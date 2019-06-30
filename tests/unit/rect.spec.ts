import Rect from "@/models/rect";

const rect = new Rect({ x: 100, y: 200, width: 300, height: 400 });

describe("Rect", () => {
  describe("Left Top", () => {
    it("左上に動かしたら拡大する", () => {
      const b = rect.moveLeftTop({ x: 50, y: 50 });
      expect(b).toEqual({ x: 50, y: 50, width: 350, height: 550 });
    });
    it("右下に動かしたら縮小する", () => {
      const b = rect.moveLeftTop({ x: 300, y: 300 });
      expect(b).toEqual({ x: 300, y: 300, width: 100, height: 300 });
    });
    it("長さがマイナスになったら反転する", () => {
      const b = rect.moveLeftTop({ x: 1000, y: 1000 });
      expect(b).toEqual({ x: 400, y: 600, width: 600, height: 400 });
    });
  });

  describe("Right Bottom", () => {
    it("左上に動かしたら縮小する", () => {
      const b = rect.moveRightBottom({ x: 300, y: 300 });
      expect(b).toEqual({ x: 100, y: 200, width: 200, height: 100 });
    });
    it("右下に動かしたら拡大する", () => {
      const b = rect.moveRightBottom({ x: 1000, y: 1000 });
      expect(b).toEqual({ x: 100, y: 200, width: 900, height: 800 });
    });
    it("長さがマイナスになったら反転する", () => {
      const b = rect.moveRightBottom({ x: 50, y: 50 });
      expect(b).toEqual({ x: 50, y: 50, width: 50, height: 150 });
    });
  });

  describe("Right Top", () => {
    it("右上に動かしたら拡大する", () => {
      const b = rect.moveRightTop({ x: 500, y: 100 });
      expect(b).toEqual({ x: 100, y: 100, width: 400, height: 500 });
    });
    it("長さがマイナスになったら反転する", () => {
      const b = rect.moveRightTop({ x: 0, y: 1000 });
      expect(b).toEqual({ x: 0, y: 600, width: 100, height: 400 });
    });
  });

  describe("Left Bottom", () => {
    it("右下に動かしたら縮小する", () => {
      const b = rect.moveLeftBottom({ x: 300, y: 300 });
      expect(b).toEqual({ x: 300, y: 200, width: 100, height: 100 });
    });
  });
});
