import {
  Component,
  Prop
} from '@stencil/core';

@Component({
  tag: 'ketchup-btn',
  styleUrl: 'ketchup-btn.scss'
})
export class KetchupBtn {
  @Prop() buttons: any[];

  // setup props
  @Prop() fillspace = false;
  @Prop() showtext = true;
  @Prop() showicon = true;
  @Prop() horizontal = true;
  @Prop() rounded = false;
  @Prop() textmode: string; // should be an enum
  @Prop() transparent = false;
  @Prop() borderColor: string;

  render() {
    let buttonsJsx = null;
    if (this.buttons) {
      buttonsJsx = this.buttons.map((btn, i) => (
        <ketchup-button
          label={btn.value}
          iconClass={btn.iconClass}
          fillspace={this.fillspace}
          showtext={this.showtext}
          showicon={this.showicon}
          rounded={this.rounded}
          textmode={this.textmode}
          transparent={this.transparent}
          borderColor={this.borderColor}
          data-id={i}
        ></ketchup-button>
      ))
    }

    let compClass = 'btn-container';
    if (this.fillspace) {
      compClass += ' fillspace';
    }

    if (!this.horizontal) {
      compClass += ' vertical';
    }

    return (
      <div class={compClass}>
        {buttonsJsx}
      </div>
    );
  }
}