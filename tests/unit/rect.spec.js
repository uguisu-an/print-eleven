const first = { x: 100, y: 200, width: 300, height: 400 };

const moveLeft = (rect, { x }) => {
  const right = rect.x + rect.width;
  return {
    x: Math.min(right, x),
    width: Math.abs(right - x)
  };
};

const moveTop = (rect, { y }) => {
  const bottom = rect.y + rect.height;
  return {
    y: Math.min(bottom, y),
    height: Math.abs(bottom - y)
  };
};

const moveRight = (rect, { x }) => {
  const left = rect.x;
  return {
    x: Math.min(left, x),
    width: Math.abs(x - left)
  };
};

const moveBottom = (rect, { y }) => {
  const top = rect.y;
  return {
    y: Math.min(top, y),
    height: Math.abs(y - top)
  };
};

const moveLeftTop = (rect, xy) => ({
  ...moveLeft(rect, xy),
  ...moveTop(rect, xy)
});

const moveRightBottom = (rect, xy) => ({
  ...moveRight(rect, xy),
  ...moveBottom(rect, xy)
});

const moveRightTop = (rect, xy) => ({
  ...moveRight(rect, xy),
  ...moveTop(rect, xy)
});

const moveLeftBottom = (rect, xy) => ({
  ...moveLeft(rect, xy),
  ...moveBottom(rect, xy)
});

describe("Rect", () => {
  describe("Left Top", () => {
    it("左上に動かしたら拡大する", () => {
      const b = moveLeftTop(first, { x: 50, y: 50 });
      expect(b).toEqual({ x: 50, y: 50, width: 350, height: 550 });
    });
    it("右下に動かしたら縮小する", () => {
      const b = moveLeftTop(first, { x: 300, y: 300 });
      expect(b).toEqual({ x: 300, y: 300, width: 100, height: 300 });
    });
    it("長さがマイナスになったら反転する", () => {
      const b = moveLeftTop(first, { x: 1000, y: 1000 });
      expect(b).toEqual({ x: 400, y: 600, width: 600, height: 400 });
    });
  });

  describe("Right Bottom", () => {
    it("左上に動かしたら縮小する", () => {
      const b = moveRightBottom(first, { x: 300, y: 300 });
      expect(b).toEqual({ x: 100, y: 200, width: 200, height: 100 });
    });
    it("右下に動かしたら拡大する", () => {
      const b = moveRightBottom(first, { x: 1000, y: 1000 });
      expect(b).toEqual({ x: 100, y: 200, width: 900, height: 800 });
    });
    it("長さがマイナスになったら反転する", () => {
      const b = moveRightBottom(first, { x: 50, y: 50 });
      expect(b).toEqual({ x: 50, y: 50, width: 50, height: 150 });
    });
  });

  describe("Right Top", () => {
    it("右上に動かしたら拡大する", () => {
      const b = moveRightTop(first, { x: 500, y: 100 });
      expect(b).toEqual({ x: 100, y: 100, width: 400, height: 500 });
    });
    it("長さがマイナスになったら反転する", () => {
      const b = moveRightTop(first, { x: 0, y: 1000 });
      expect(b).toEqual({ x: 0, y: 600, width: 100, height: 400 });
    });
  });

  describe("Left Bottom", () => {
    it("右下に動かしたら縮小する", () => {
      const b = moveLeftBottom(first, { x: 300, y: 300 });
      expect(b).toEqual({ x: 300, y: 200, width: 100, height: 100 });
    });
  });
});
