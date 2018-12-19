import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ketchup-button',
  styleUrl: 'ketchup-button.scss'
})
export class KetchupButton {
  @Prop() label: string;
  @Prop() iconClass: string;

  render() {
    let btnLabel = null;
    if (this.label) {
      btnLabel = <span class="button-text">{this.label}</span>;
    }

    let icon = null;
    if (this.iconClass) {
      icon = <span class={'button-icon ' + this.iconClass}></span>;
    }

    return (
      <button>
        {icon}
        {btnLabel}
      </button>
    );
  }
}