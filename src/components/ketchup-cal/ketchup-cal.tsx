import { Component, Prop } from '@stencil/core'

import $ from 'jquery'
import 'fullcalendar'

@Component({
  tag: 'ketchup-cal'
})
export class KetchupCal {
  @Prop() showWeek: false
  @Prop() initialDate: Date
  @Prop() showNavigation = true

  private container?: HTMLDivElement

  componentDidLoad() {
    this.loadFullCalendar()
  }

  loadFullCalendar() {
    const defaultView = this.showWeek ? 'agendaWeek' : 'month'

    $(this.container).fullCalendar('destroy')

    const options: FullCalendarConfig = {
      defaultView,

      events: [
        {
          title: 'Lol',
          start: new Date(),
          color: 'yellow',
          textColor: 'black',
          allDay: true
        },
        {
          title: 'XD',
          start: '2018-12-25'
        }
      ]
    }

    if (!this.showNavigation) {
      options.header = false
    }

    if (this.initialDate) {
      options.defaultDate = this.initialDate
    }

    $(this.container).fullCalendar(options)
  }

  componentDidUpdate() {
    this.loadFullCalendar()
  }

  componentDidUnload() {
    $(this.container).fullCalendar('destroy')
  }

  render() {
    return <div ref={el => (this.container = el as HTMLDivElement)} />
  }
}

interface FullCalendarConfig {
  defaultView: string

  events: any[]

  header?: boolean | any

  defaultDate?: Date
}
