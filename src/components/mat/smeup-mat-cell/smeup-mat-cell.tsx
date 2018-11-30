import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'smeup-mat-cell',
  styleUrl: 'smeup-mat-cell.scss',
  shadow: true
})
export class SmeupMatCell {
  @Prop() column: any;

  @Prop() row: any;

  render() {
    const content = this.row.fields[this.column.code].smeupObject.codice;

    return (
      <td>{content}</td>
    );
  }
}
