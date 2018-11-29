import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'smeup-mat',
  styleUrl: 'smeup-mat.scss',
  shadow: true
})
export class SmeupMatrix {
  @Prop() columns: any[];
  
  @Prop() rows: any[];

  render() {
    // header
    let thead = null;
    if (this.columns) {
      thead = this.columns.map(c => (
        <th>{c.code}</th>
      ))
    }

    // TODO rows
    let tbody = null;
    if (this.rows) {
      tbody = this.rows.map(r => (
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
