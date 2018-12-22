import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'ketchup-btn',
  styleUrl: 'ketchup-btn.scss'
})
export class KetchupBtn {
  @Prop() buttons: any[]

  // setup props
  @Prop() buttonClass = ''
  @Prop() fillspace = false
  @Prop() showtext = true
  @Prop() showicon = true
  @Prop() horizontal = true
  @Prop() rounded = false
  @Prop() flat = false
  @Prop() textmode: string // should be an enum
  @Prop() transparent = false
  @Prop() borderColor: string
  @Prop() showSelection = false

  onBtnClicked(event: CustomEvent) {
    console.log('event', event)
  }

  render() {
    let buttonsJsx = null
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
          buttonClass={this.buttonClass}
          flat={this.flat}
          data-id={i}
          onBtnClicked={ev => this.onBtnClicked(ev)}
        />
      ))
    }

    let compClass = 'btn-container'
    if (this.fillspace) {
      compClass += ' fillspace'
    }

    if (!this.horizontal) {
      compClass += ' vertical'
    }

    return <div class={compClass}>{buttonsJsx}</div>
  }
}
