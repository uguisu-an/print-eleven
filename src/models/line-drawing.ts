import uuid from "uuid";
import { DrawingType, Drawing } from "./drawing";

export interface LineDrawingInput {
  id?: string;
  x1?: number;
  y1?: number;
  x2?: number;
  y2?: number;
  stroke?: string;
  strokeWidth?: number;
}

export class LineDrawing implements Drawing {
  id: string = uuid();
  kind = DrawingType.Line;
  x1: number = 0;
  y1: number = 0;
  x2: number = 0;
  y2: number = 0;
  stroke: string = "gray";
  strokeWidth: number = 1;

  public constructor(params: LineDrawingInput = {}) {
    if (params.id) this.id = params.id;
    if (params.x1) this.x1 = params.x1;
    if (params.y1) this.y1 = params.y1;
    if (params.x2) this.x2 = params.x2;
    if (params.y2) this.y2 = params.y2;
    if (params.stroke) this.stroke = params.stroke;
    if (params.strokeWidth) this.strokeWidth = params.strokeWidth;
  }
}
