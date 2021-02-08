import { fabric } from 'fabric';

export class Bubble {
  angle: number; // 起始角度
  speed: number; // 动画时，角度变化的速度
  group: fabric.Group;
  pause: boolean; // 暂停动画
  id: string;
  constructor(options: { id: string; angle: number; speed: number; group: fabric.Group; pause?: boolean }) {
    this.angle = options.angle;
    this.speed = options.speed;
    this.group = options.group;
    this.pause = options.pause ? true : false;
    this.id = options.id;
  }
}
