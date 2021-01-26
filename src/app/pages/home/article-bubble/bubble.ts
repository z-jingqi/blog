import { fabric } from 'fabric';

export class Bubble {
  angle: number; // 起始角度
  speed: number; // 动画时，角度变化的速度
  group: fabric.Group;
  constructor(options: { angle: number; speed: number; group: fabric.Group }) {
    this.angle = options.angle;
    this.speed = options.speed;
    this.group = options.group;
  }
}
