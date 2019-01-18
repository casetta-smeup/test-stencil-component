import { Component, Event, EventEmitter, Prop } from '@stencil/core'

@Component({
  tag: 'ketchup-cnd',
  shadow: true
})
export class KetchupCnd {
  @Prop() value: number

  @Event() countdownEnded: EventEmitter

  private canvas?: HTMLCanvasElement
  private width: number
  private height: number
  private ctx: CanvasRenderingContext2D
  private updateBind = this.update.bind(this)
  private start: number
  private requestAnimationFrame: number

  componentDidLoad() {
    // starting time
    this.start = new Date().getTime()

    this.ctx = this.canvas.getContext('2d')

    this.width = this.canvas.width
    this.height = this.canvas.height

    this.update()
  }

  update() {
    this.requestAnimationFrame = requestAnimationFrame(this.updateBind)

    this.ctx.clearRect(0, 0, 100, 100)

    // add text
    this.drawText()

    // draw circles
    this.drawBackgroundCircle()
    this.drawForegroundCircle()
  }

  drawBackgroundCircle() {
    this.ctx.beginPath()
    this.ctx.lineWidth = 5
    this.ctx.strokeStyle = '#dddddd'

    const x = this.width / 2
    const y = this.height / 2
    const radius = this.width / 2 - 5 // 5 is the thickness

    this.ctx.arc(x, y, radius, 0, Math.PI * 2)
    this.ctx.stroke()
  }

  drawForegroundCircle() {
    const endAngle = this.getEndAngle()

    if (endAngle > 0) {
      // rotating the canvas
      this.ctx.save()
      this.ctx.translate(0, this.width)
      this.ctx.rotate((3 * Math.PI) / 2)
      this.ctx.translate(0, 0)

      // draw cirlce
      this.ctx.beginPath()
      this.ctx.lineWidth = 5
      this.ctx.strokeStyle = '#369491'

      const x = this.width / 2
      const y = this.height / 2
      const radius = this.width / 2 - 5 // 5 is the thickness

      this.ctx.arc(x, y, radius, 0, endAngle)
      this.ctx.stroke()

      // restore
      this.ctx.restore()
    } else {
      console.log('stopping animate')
      cancelAnimationFrame(this.requestAnimationFrame)

      // emitting event
      this.countdownEnded.emit()
    }
  }

  drawText() {
    this.ctx.font = '25px Lato'
    this.ctx.textAlign = 'center'
    this.ctx.textBaseline = 'middle'
    this.ctx.fillStyle = '#369491'

    const now = new Date().getTime()

    const difference = now - this.start

    const remainder = Math.floor((this.value * 1000 - difference) / 1000) + 1

    const x = this.width / 2
    const y = this.height / 2

    this.ctx.fillText('' + remainder, x, y)
  }

  getEndAngle() {
    const now = new Date().getTime()

    // max : 100% = now : x
    const percentage = ((now - this.start) * 100) / (this.value * 1000)

    const fullCircle = Math.PI * 2

    const toBeRemoved = (fullCircle * percentage) / 100

    return fullCircle - toBeRemoved
  }

  render() {
    return (
      <div>
        <canvas
          id="canvas"
          ref={el => (this.canvas = el as HTMLCanvasElement)}
          height="100"
          width="100"
        />
      </div>
    )
  }
}
