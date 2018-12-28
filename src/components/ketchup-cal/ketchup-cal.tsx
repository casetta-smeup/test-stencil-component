import { Component, Prop } from '@stencil/core'

import $ from 'jquery'
import 'fullcalendar'

@Component({
  tag: 'ketchup-cal',
  styleUrl: 'ketchup-cal.scss'
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
          title: 'evento colorato tramite color e textColor',
          start: '2018-12-27',
          color: 'yellow',
          textColor: 'black',
          allDay: true
        },
        {
          title: 'Evento colorato tramite cella G',
          start: '2018-12-25',
          className: '-smeup-cell-G-00C30'
        },
        {
          title: 'Evento con start e end',
          start: '2018-12-28T10:00:00',
          end: '2018-12-28T12:30:00',
          allDay: false
        },
        {
          title: 'Icone!',
          start: '2018-12-29',
          allDay: false,
          icons: ['mdi mdi-account', 'mdi mdi-plus']
        }
      ]
    }

    if (!this.showNavigation) {
      options.header = false
    }

    if (this.initialDate) {
      options.defaultDate = this.initialDate
    }

    options.eventRender = function(date, element) {
      if (date.icons) {
        const content = element[0].querySelector('.fc-content')

        const iconsContainer = document.createElement('div')
        iconsContainer.classList.add('icons-container')

        date.icons.forEach(icon => {
          const iconContainer = document.createElement('span')
          iconContainer.className = 'icon-container ' + icon
          iconsContainer.appendChild(iconContainer)
        })

        content.appendChild(iconsContainer)
      }
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

  eventRender?: any
}
