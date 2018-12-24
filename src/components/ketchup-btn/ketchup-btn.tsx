import { Component, Prop, State, Watch } from '@stencil/core'

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

  @State() selectedBtnIndex: number

  @Watch('showSelection')
  onShowSelectionChanged(newValue: boolean) {
    if (!newValue && this.buttons) {
      // unselecting all buttons
      this.selectedBtnIndex = -1
    }
  }

  onBtnClicked(event: CustomEvent) {
    if (this.showSelection) {
      this.selectedBtnIndex = parseInt((event.target as HTMLElement).dataset.id)
    }
  }

  render() {
    let buttonsJsx = null
    if (this.buttons) {
      buttonsJsx = this.buttons.map((btn, i) => {
        let btnClass = this.buttonClass || ''
        if (i === this.selectedBtnIndex) {
          btnClass += ' btn-selected'
        }

        return (
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
            buttonClass={btnClass}
            flat={this.flat}
            data-id={i}
            onBtnClicked={ev => this.onBtnClicked(ev)}
          />
        )
      })
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
