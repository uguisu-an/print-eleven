import uuid from "uuid";
import { DrawingType, Drawing } from "./drawing";

export interface RectDrawingInput {
  id?: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
}

export class RectDrawing implements Drawing {
  id: string = uuid();
  kind = DrawingType.Rect;
  x: number = 0;
  y: number = 0;
  width: number = 1;
  height: number = 1;
  fill: string = "none";
  stroke: string = "gray";
  strokeWidth: number = 0;

  public constructor(params: RectDrawingInput = {}) {
    if (params.id) this.id = params.id;
    if (params.x) this.x = params.x;
    if (params.y) this.y = params.y;
    if (params.width) this.width = params.width;
    if (params.height) this.height = params.height;
    if (params.fill) this.fill = params.fill;
    if (params.stroke) this.stroke = params.stroke;
    if (params.strokeWidth) this.strokeWidth = params.strokeWidth;
  }
}
