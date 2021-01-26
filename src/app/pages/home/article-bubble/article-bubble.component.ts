import { ElementRef, ViewChild } from '@angular/core';
import { AfterViewInit, Component } from '@angular/core';
import { Bubble } from './bubble';
import { fabric } from 'fabric';
import { GRADIENTS } from './gradients';

@Component({
  selector: 'blog-article-bubble',
  templateUrl: './article-bubble.component.html',
  styleUrls: ['./article-bubble.component.scss']
})
export class ArticleBubbleComponent implements AfterViewInit {

  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  canvas!: fabric.Canvas;
  bubbleRange = [30, 50];
  animationRange = [100, 150];
  speed = [6, 10];
  globalOptions: fabric.ICircleOptions = {
    lockMovementX: true,
    lockMovementY: true,
    lockRotation: true,
    lockScalingX: true,
    lockScalingY: true,
    lockUniScaling: true,
    hasControls: false,
    hasBorders: false,
    selectable: false
  };
  bubbles: Bubble[] = [];
  groups: fabric.Group[] = [];
  distance = 280;
  ngAfterViewInit(): void {
    this.canvas = this.initCanvas();
    this.drawBubbles(this.canvas);
    this.animate();
  }

  initCanvas(): fabric.Canvas {
    return new fabric.Canvas(this.canvasRef.nativeElement);
  }

  createBubble(params: {
    name: string;
    x: number;
    y: number;
    angle: number;
  }): Bubble {
    const sideLength = Math.ceil(Math.random() * 100 + 50); // 30-50
    const width = sideLength;
    const height = sideLength;
    const radius = sideLength / 2;
    const gradient = this.getBubbleGradient(radius);
    const circle = new fabric.Circle({
      width,
      height,
      radius,
      originX: 'center',
      originY: 'center',
      fill: gradient
    });
    const text = new fabric.Text(params.name, {
      fontSize: 12,
      originX: 'center',
      originY: 'center',
      fill: '#fff'
    });
    const group = new fabric.Group([circle, text], {
      left: params.x,
      top: params.y,
      ...this.globalOptions
    });
    const speed = (Math.random() * 4 + 6) / 2000;
    const bubble = new Bubble({
      angle: params.angle,
      group,
      speed
    });
    return bubble;
  }

  createBubbles(): Bubble[] {
    const canvasElement = this.canvasRef.nativeElement;
    const centerX = canvasElement.offsetWidth / 2;
    const centerY = canvasElement.offsetHeight / 2;
    const quantity = 30;
    const result: Bubble[] = [];
    for (let i = 0; i < quantity; i++) {
      const angle = this.getBubbleStartAngle(i, quantity);
      const { x, y } = this.getBubblePosition({
        centerX,
        centerY,
        distance: this.distance,
        angle
      });
      const name = `第${i + 1}个`;
      // const name = "";
      const circle = this.createBubble({ x, y, angle, name });
      result.push(circle);
    }
    return result;
  }

  getBubblePosition(params: {
    centerX: number;
    centerY: number;
    angle: number;
    distance: number;
  }): { x: number; y: number } {
    const offsetX = params.distance * Math.cos(params.angle);
    const offsetY = params.distance * Math.sin(params.angle);
    const result = {
      x: params.centerX + offsetX,
      y: params.centerY + offsetY,
      angle: params.angle
    };
    return result;
  }

  getBubbleStartAngle(index: number, length: number): number {
    return ((Math.PI * 2) / length) * index;
  }

  getBubbleGradient(radius: number): fabric.Gradient {
    const maxIndex = GRADIENTS.length - 1;
    const gradientIndex = Math.ceil(Math.random() * maxIndex);
    const colors = GRADIENTS[gradientIndex];
    const gradient = new fabric.Gradient({
      type: 'radial',
      colorStops: colors.map((color, index) => {
        return { offset: `${index}`, color };
      }),
      coords: {
        x1: 0,
        y1: 0,
        x2: radius / 2,
        y2: radius / 2,
        r1: radius,
        r2: radius * 2
      }
    });
    return gradient;
  }

  drawBubbles(canvas: fabric.Canvas): void {
    const bubbles = this.createBubbles();
    const groups = bubbles.map((bubble) => bubble.group);
    this.bubbles = bubbles;
    canvas.add(...groups);
  }

  animate(): void {
    if (this.bubbles && this.bubbles.length) {
      this.bubbles.forEach((bubble) => {
        const group = bubble.group;
        bubble.angle += bubble.speed;
        const canvasElement = this.canvasRef.nativeElement;
        const centerX = canvasElement.offsetWidth / 2;
        const centerY = canvasElement.offsetHeight / 2;
        const { x, y } = this.getBubblePosition({
          centerX,
          centerY,
          distance: this.distance,
          angle: bubble.angle
        });
        group.left = x;
        group.top = y;
      });
      this.canvas.renderAll();
    }
    requestAnimationFrame(this.animate.bind(this));
  }

}
