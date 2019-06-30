import Point from "./point";

interface RectInput {
  x: number;
  y: number;
  width: number;
  height: number;
}

export default class Rect {
  x: number;
  y: number;
  width: number;
  height: number;

  public constructor(params: RectInput) {
    this.x = params.x;
    this.y = params.y;
    this.width = params.width;
    this.height = params.height;
  }

  public moveLeft({ x }: Point): Rect {
    const right = this.x + this.width;
    return new Rect({
      ...this,
      x: Math.min(right, x),
      width: Math.abs(right - x)
    });
  }

  public moveRight({ x }: Point): Rect {
    const left = this.x;
    return new Rect({
      ...this,
      x: Math.min(left, x),
      width: Math.abs(x - left)
    });
  }

  public moveTop({ y }: Point): Rect {
    const bottom = this.y + this.height;
    return new Rect({
      ...this,
      y: Math.min(bottom, y),
      height: Math.abs(bottom - y)
    });
  }

  public moveBottom({ y }: Point): Rect {
    const top = this.y;
    return new Rect({
      ...this,
      y: Math.min(top, y),
      height: Math.abs(y - top)
    });
  }

  public moveLeftTop(p: Point): Rect {
    return this.moveLeft(p).moveTop(p);
  }

  public moveRightTop(p: Point): Rect {
    return this.moveRight(p).moveTop(p);
  }

  public moveLeftBottom(p: Point): Rect {
    return this.moveLeft(p).moveBottom(p);
  }

  public moveRightBottom(p: Point): Rect {
    return this.moveRight(p).moveBottom(p);
  }
}
