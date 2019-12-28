export interface Drawing {
  id: string;
  kind: DrawingType;
}

export const enum DrawingType {
  Line,
  Rect
}
