import { Component } from '@stencil/core'

@Component({
  tag: 'ketchup-cnd',
  styleUrl: 'ketchup-cnd.scss'
})
export class KetchupCnd {
  private canvas?: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D
  private updateBind = this.update.bind(this)
  private start: number
  private requestAnimationFrame: number

  componentDidLoad() {
    // starting time
    this.start = new Date().getTime()

    this.ctx = this.canvas.getContext('2d')

    // rotating the canvas
    // this.ctx.rotate((45 * Math.PI) / 180)

    this.update()
  }

  update() {
    this.requestAnimationFrame = requestAnimationFrame(this.updateBind)

    this.ctx.clearRect(0, 0, 100, 100)

    // draw circles
    this.drawBackgroundCircle()
    this.drawForegroundCircle()
  }

  drawBackgroundCircle() {
    this.ctx.beginPath()
    this.ctx.lineWidth = 5
    this.ctx.strokeStyle = '#dddddd'
    this.ctx.arc(50, 50, 45, 0, Math.PI * 2)
    this.ctx.stroke()
  }

  drawForegroundCircle() {
    const endAngle = this.getEndAngle()

    if (endAngle > 0) {
      // draw cirlce
      this.ctx.beginPath()
      this.ctx.lineWidth = 5
      this.ctx.strokeStyle = '#369491'
      this.ctx.arc(50, 50, 45, 0, endAngle)
      this.ctx.stroke()
    } else {
      console.log('stopping animate')
      cancelAnimationFrame(this.requestAnimationFrame)
    }
  }

  getEndAngle() {
    const max = 5000 // 5 secondi

    const now = new Date().getTime()

    // max : 100% = now : x
    const percentage = ((now - this.start) * 100) / max

    const fullCircle = Math.PI * 2

    const toBeRemoved = (fullCircle * percentage) / 100

    return fullCircle - toBeRemoved
  }

  render() {
    return (
      <canvas
        id="canvas"
        ref={el => (this.canvas = el as HTMLCanvasElement)}
        height="100"
        width="100"
      />
    )
  }
}
