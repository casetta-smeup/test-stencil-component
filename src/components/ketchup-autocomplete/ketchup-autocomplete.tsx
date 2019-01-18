import { Component, Event, EventEmitter } from '@stencil/core'

import _ from 'lodash'

@Component({
  tag: 'ketchup-autocomplete',
  styleUrl: 'ketchup-autocomplete.scss',
  shadow: true
})
export class KetchupAutocomplete {
  @Event() query: EventEmitter

  private paperComplete?: HTMLElement

  componentDidLoad() {
    // adding listener
    this.paperComplete.addEventListener(
      'autocomplete-change',
      _.debounce(this.debounceQuery.bind(this), 400, event)
    )
  }

  debounceQuery(event) {
    this.query.emit({ value: event.detail.text })
  }

  render() {
    return (
      <div class="autocomplete">
        <paper-autocomplete
          ref={el => (this.paperComplete = el as HTMLElement)}
          label="Scrivi qualcosa"
          id="input-remote-users"
          remote-source
          min-length="2"
        />
      </div>
    )
  }
}
