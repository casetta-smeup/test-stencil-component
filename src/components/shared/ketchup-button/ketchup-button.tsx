import {
  Component,
  Element,
  Event,
  EventEmitter,
  Prop,
  Watch
} from '@stencil/core'

@Component({
  tag: 'ketchup-button',
  styleUrl: 'ketchup-button.scss'
})
export class KetchupButton {
  @Element() ketchupButtonEl: HTMLElement

  @Prop() label: string
  @Prop() buttonClass: string
  @Prop() iconClass: string
  @Prop() fillspace = false
  @Prop() showtext = true
  @Prop() showicon = true
  @Prop() rounded = false
  @Prop() textmode: string
  @Prop() transparent = false
  @Prop() borderColor: string

  @Event({
    eventName: 'btnClicked',
    composed: true,
    cancelable: true,
    bubbles: true
  })
  btnClicked: EventEmitter

  @Watch('fillspace')
  onFillspaceChange(newValue: string, oldValue: string) {
    if (newValue === oldValue) {
      return
    }

    if (this.fillspace) {
      this.ketchupButtonEl.classList.add('fillspace')
    } else {
      this.ketchupButtonEl.classList.remove('fillspace')
    }
  }

  @Watch('borderColor')
  onBorderColorChange(newValue: string, oldValue: string) {
    if (newValue === oldValue) {
      return
    }

    if (this.transparent && this.borderColor) {
      const btnStyle = this.ketchupButtonEl.querySelector('button').style
      btnStyle.borderColor = this.borderColor
      btnStyle.color = this.borderColor
    }
  }

  onBtnClickedHandler() {
    this.btnClicked.emit()
  }

  render() {
    let btnLabel = null
    if ('Hint' !== this.textmode && this.showtext && this.label) {
      btnLabel = <span class="button-text">{this.label}</span>
    }

    let icon = null
    if (this.showicon && this.iconClass) {
      icon = <span class={'button-icon ' + this.iconClass} />
    }

    let btnClass = this.buttonClass ? this.buttonClass : ''

    if (this.fillspace) {
      btnClass = 'fillspace'
    }

    if (this.rounded) {
      btnClass += ' rounded'
    }

    if (this.transparent) {
      btnClass += ' transparent'
    }

    let title = ''
    if ('Hint' === this.textmode) {
      title = this.label
    }

    return (
      <button
        class={btnClass}
        title={title}
        onClick={this.onBtnClickedHandler.bind(this)}
      >
        {icon}
        {btnLabel}
      </button>
    )
  }
}
