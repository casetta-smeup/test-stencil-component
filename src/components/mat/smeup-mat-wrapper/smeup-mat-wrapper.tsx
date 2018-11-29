import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'smeup-mat-wrapper',
  styleUrl: 'smeup-mat-wrapper.scss',
  shadow: true
})
export class SmeupMatWrapper {
  @Prop() columns: any[];

  @Prop() rows: any[];

  render() {
    let slotRows = null;
    if (this.rows && this.columns) {
      slotRows = this.rows.map((r) => {
        return this.columns.map((c) => {
          const slotName = `cell-${c.code}-${r.fields['ID'].smeupObject.codice}`;
          const cellValue = r.fields[c.code].smeupObject.codice;

          return (<span slot={slotName}>{cellValue}</span>);
        })
      })
    }

    return (
      <smeup-mat
        columns={this.columns}
        rows={this.rows}
      >
        {slotRows}
      </smeup-mat>
    );
  }
}
