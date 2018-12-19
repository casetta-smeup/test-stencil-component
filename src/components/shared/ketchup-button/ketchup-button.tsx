import {
  Component,
  Element,
  Prop,
  Watch
} from '@stencil/core';

@Component({
  tag: 'ketchup-button',
  styleUrl: 'ketchup-button.scss'
})
export class KetchupButton {
  @Element() ketchupButtonEl: HTMLElement;

  @Prop() label: string;
  @Prop() iconClass: string;
  @Prop() fillspace = false;
  @Prop() showtext = true;

  @Watch('fillspace')
  onFillspaceChange(newValue: string, oldValue: string) {
    if (newValue === oldValue) {
      return;
    }

    if (this.fillspace) {
      this.ketchupButtonEl.classList.add('fillspace');
    } else {
      this.ketchupButtonEl.classList.remove('fillspace'); 
    }
  }

  render() {
    let btnLabel = null;
    if (this.showtext && this.label) {
      btnLabel = <span class="button-text">{this.label}</span>;
    }

    let icon = null;
    if (this.iconClass) {
      icon = <span class={'button-icon ' + this.iconClass}></span>;
    }

    let btnClass = '';
    if (this.fillspace) {
      btnClass = 'fillspace';
    }

    return (
      <button class={btnClass}>
        {icon}
        {btnLabel}
      </button>
    );
  }
}