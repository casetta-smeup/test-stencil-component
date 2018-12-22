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

  componentDidLoad() {
    // starting time
    this.start = new Date().getTime()

    this.ctx = this.canvas.getContext('2d')
    requestAnimationFrame(this.updateBind)
  }

  update() {
    requestAnimationFrame(this.updateBind)

    this.ctx.clearRect(0, 0, 100, 100)

    const max = 5000 // 5 secondi

    const now = new Date().getTime()

    // max : 100% = now : x
    const percentage = ((now - this.start) * 100) / max

    const fullCircle = Math.PI * 2

    const toBeRemoved = (fullCircle * percentage) / 100

    // draw circle
    this.ctx.lineWidth = 10
    this.ctx.beginPath()
    this.ctx.arc(50, 50, 45, 0, fullCircle - toBeRemoved)
    this.ctx.stroke()
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
