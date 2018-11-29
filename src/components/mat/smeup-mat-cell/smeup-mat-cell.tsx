import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'smeup-mat-cell',
  styleUrl: 'smeup-mat-cell.scss',
  shadow: true
})
export class SmeupMatCell {
  @Prop() content: string;

  render() {
    return (
      <td>{this.content}</td>
    );
  }
}
