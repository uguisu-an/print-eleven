import Point from "./point";

interface RectInput {
  x: number;
  y: number;
  width: number;
  height: number;
}

export default class Rect {
  public readonly x: number;
  public readonly y: number;
  public readonly width: number;
  public readonly height: number;

  public constructor(params: RectInput) {
    this.x = params.x;
    this.y = params.y;
    this.width = params.width;
    this.height = params.height;
  }

  public moveLeft({ x }: Point): Rect {
    return new Rect({
      ...this,
      x: Math.min(this.right, x),
      width: Math.abs(this.right - x)
    });
  }

  public moveRight({ x }: Point): Rect {
    return new Rect({
      ...this,
      x: Math.min(this.left, x),
      width: Math.abs(x - this.left)
    });
  }

  public moveTop({ y }: Point): Rect {
    return new Rect({
      ...this,
      y: Math.min(this.bottom, y),
      height: Math.abs(this.bottom - y)
    });
  }

  public moveBottom({ y }: Point): Rect {
    return new Rect({
      ...this,
      y: Math.min(this.top, y),
      height: Math.abs(y - this.top)
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

  private get left(): number {
    return this.x;
  }

  private get right(): number {
    return this.x + this.width;
  }

  private get top(): number {
    return this.y;
  }

  private get bottom(): number {
    return this.y + this.height;
  }
}
