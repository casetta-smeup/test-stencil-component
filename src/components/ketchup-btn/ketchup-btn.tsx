import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ketchup-btn',
  styleUrl: 'ketchup-btn.scss'
})
export class KetchupBtn {
  @Prop() buttons: any[];

  // setup props
  @Prop() fillspace: false;
  @Prop() showtext: true;

  render() {
    let buttonsJsx = null;
    if (this.buttons) {
      buttonsJsx = this.buttons.map(btn => (
        <ketchup-button
          label={btn.value}
          iconClass={btn.iconClass}
          fillspace={this.fillspace}
          showtext={this.showtext}
        ></ketchup-button>
      ))
    }

    let compClass = 'btn-container';
    if (this.fillspace) {
      compClass += ' fillspace';
    }

    return (
      <div class={compClass}>
        {buttonsJsx}
      </div>
    );
  }
}