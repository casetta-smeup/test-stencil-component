import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'smeup-mat',
  styleUrl: 'smeup-mat.scss',
  shadow: true
})
export class SmeupMatrix {
  @Prop() columns: any[];

  @Prop() rows: any[];

  @State() sort = {
    code: "",
    sortMode: ""
  };

  onSort(c) {
    // switch sort
    c.sortMode = c.sortMode === "A" ? "D" : "A";

    this.sort = {
      code: c.code,
      sortMode: c.sortMode
    }
  }

  sortRows(_rows: any[]) {
    const filteredRows = _rows.filter((r: any) => !r.group);

    if (filteredRows.length == 0) {
      return _rows;
    }

    return _rows.sort((r1, r2) => {
      const val1 = r1.fields[this.sort.code].smeupObject.codice;
      const val2 = r2.fields[this.sort.code].smeupObject.codice;

      // check if ascending or descending sort
      const sortMode = this.columns.filter(c => c.code === this.sort.code)[0]
        .sortMode;

      const compare = val1.localeCompare(val2);
      return sortMode === "A" ? compare : compare * -1;
    });
  }

  render() {
    // header
    let thead = null;
    if (this.columns) {
      thead = this.columns.map(c => (
        <th onClick={this.onSort.bind(this, c)}>{c.code}</th>
      ))
    }

    let tbody = null;
    if (this.rows) {
      let sortedRows = this.rows;
      if (this.sort.code) {
        sortedRows = this.sortRows(this.rows);
      }

      tbody = sortedRows.map(r => (
        <tr>{this.columns.map(c => (
          <td>{r.fields[c.code].smeupObject.codice}</td>
        ))}</tr>
      ))
    }

    return (
      <div>
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
