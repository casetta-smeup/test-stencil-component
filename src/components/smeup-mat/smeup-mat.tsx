import {
  Component,
  Event,
  EventEmitter,
  Prop,
  State
} from '@stencil/core';

@Component({
  tag: 'smeup-mat',
  styleUrl: 'smeup-mat.scss'
})
export class SmeupMatrix {
  @Prop() columns: any[];

  @Prop() rows: any[];

  @Prop() filterable = false;

  @Prop() sortable = false;

  @Event() onCellClicked: EventEmitter;

  @State() sort = {
    code: "",
    sortMode: ""
  };

  @State() hackzor = false;

  onSort(c) {
    if (this.sortable) {
      // switch sort
      c.sortMode = c.sortMode === "A" ? "D" : "A";

      this.sort = {
        code: c.name,
        sortMode: c.sortMode
      }
    }
  }

  sortRows(_rows: any[]) {
    const filteredRows = _rows.filter((r: any) => !r.group);

    if (filteredRows.length == 0) {
      return _rows;
    }

    return _rows.sort((r1, r2) => {
      const val1 = r1.values[this.sort.code];
      const val2 = r2.values[this.sort.code];

      // check if ascending or descending sort
      const sortMode = this.columns.filter(c => c.name === this.sort.code)[0]
        .sortMode;

      const compare = val1.localeCompare(val2);
      return sortMode === "A" ? compare : compare * -1;
    });
  }

  onCellClickedHandler(c, r) {
    this.onCellClicked.emit({ c, r });

    if (!r.selected) {
      // unselect all rows
      this.rows.forEach(r => r.selected = false);

      // select this row
      r.selected = true;

      // hack in progress
      this.hackzor = !this.hackzor;
    }
  }

  onFilterChangeHandler(event, c) {
    c.filterValue = event.target.value;

    // hack in progress
    this.hackzor = !this.hackzor;
  }

  filterRows(_rows: any[]) {
    const columnsWithFilter = this.columns.filter(c => {
      if (c.filterValue) {
        return c.filterValue.length > 0;
      }
      return false;
    });

    return _rows.filter(r => {
      if (columnsWithFilter.length > 0) {
        // there is atleast one filter
        return (
          columnsWithFilter.filter(c => {
            let rowCell = r.values[c.name];
            if (rowCell) {
              return rowCell.includes(c.filterValue);
            }
            return false;
          }).length == columnsWithFilter.length
        );
      }
      return true;
    });
  }

  render() {
    // console.log("rendering");

    // header
    let thead = null;
    if (this.columns) {
      const className = this.sortable ? "sortable" : "";

      thead = this.columns.map((c, i) => {
        let filter = null;
        if (this.filterable) {
          filter = (<input type="text" value={c.filterValue ? c.filterValue : ""} onChange={(event) => this.onFilterChangeHandler(event, c)}></input>);
        }

        return (<th class={className}>
          <span onClick={this.onSort.bind(this, c, i)}>{c.title}</span>
          <br />
          {filter}
        </th>);
      })
    }

    let tbody = null;
    if (this.rows) {
      let sortedRows = this.rows;
      if (this.sort.code) {
        sortedRows = this.sortRows(this.rows);
      }

      const filteredRows = this.filterRows(sortedRows);

      tbody = filteredRows.map(r => (
        <tr class={r.selected ? 'selected' : ''}>{this.columns.map((c) => (
          <td onClick={this.onCellClickedHandler.bind(this, c, r)}>{r.values[c.name]}</td>
        ))}</tr>
      ))
    }

    return (
      <div>
        <slot />
        <table>
          <thead>
            <tr>{thead}</tr>
          </thead>
          <tbody>{tbody}</tbody>
        </table>
      </div>
    );
  }
}
