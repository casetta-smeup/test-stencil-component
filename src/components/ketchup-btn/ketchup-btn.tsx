import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ketchup-btn',
  styleUrl: 'ketchup-btn.scss'
})
export class KetchupBtn {
  @Prop() buttons: any[];

  render() {
    let buttonsJsx = null;
    if (this.buttons) {
      buttonsJsx = this.buttons.map(btn => <ketchup-button label={btn.value} iconClass={btn.iconClass}></ketchup-button>)
    }

    return (
      <div class="btn-container">
        {buttonsJsx}
      </div>
    );
  }
}