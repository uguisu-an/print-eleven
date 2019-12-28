<template>
  <g>
    <VHandle :x="leftTop.x" :y="leftTop.y" @mousedown="handleLeftTop" />
    <VHandle :x="top.x" :y="top.y" @mousedown="handleTop" />
    <VHandle :x="rightTop.x" :y="rightTop.y" @mousedown="handleRightTop" />
    <VHandle :x="right.x" :y="right.y" @mousedown="handleRight" />
    <VHandle
      :x="rightBottom.x"
      :y="rightBottom.y"
      @mousedown="handleRightBottom"
    />
    <VHandle :x="bottom.x" :y="bottom.y" @mousedown="handleBottom" />
    <VHandle
      :x="leftBottom.x"
      :y="leftBottom.y"
      @mousedown="handleLeftBottom"
    />
    <VHandle :x="left.x" :y="left.y" @mousedown="handleLeft" />
  </g>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import Point from "@/models/point";
import Rect from "@/models/rect";
import { RectDrawing } from "@/models/rect-drawing";
import VHandle from "./VHandle.vue";

@Component({
  components: {
    VHandle
  }
})
export default class VRectHandle extends Vue {
  @Prop({ required: true }) drawing!: RectDrawing;

  get leftTop() {
    return { x: this.drawing.x, y: this.drawing.y };
  }

  get top() {
    return { x: this.drawing.x + this.drawing.width / 2, y: this.drawing.y };
  }

  get rightTop() {
    return { x: this.drawing.x + this.drawing.width, y: this.drawing.y };
  }

  get right() {
    return {
      x: this.drawing.x + this.drawing.width,
      y: this.drawing.y + this.drawing.height / 2
    };
  }

  get rightBottom() {
    return {
      x: this.drawing.x + this.drawing.width,
      y: this.drawing.y + this.drawing.height
    };
  }

  get bottom() {
    return {
      x: this.drawing.x + this.drawing.width / 2,
      y: this.drawing.y + this.drawing.height
    };
  }

  get leftBottom() {
    return { x: this.drawing.x, y: this.drawing.y + this.drawing.height };
  }

  get left() {
    return { x: this.drawing.x, y: this.drawing.y + this.drawing.height / 2 };
  }

  handleLeft() {
    const drawing = new Rect(this.drawing);
    this.handle(
      (x, y) => ({ ...this.drawing, ...drawing.moveLeft({ x, y }) }),
      this.left
    );
  }

  handleRight() {
    const drawing = new Rect(this.drawing);
    this.handle(
      (x, y) => ({ ...this.drawing, ...drawing.moveRight({ x, y }) }),
      this.right
    );
  }

  handleTop() {
    const drawing = new Rect(this.drawing);
    this.handle(
      (x, y) => ({ ...this.drawing, ...drawing.moveTop({ x, y }) }),
      this.top
    );
  }

  handleBottom() {
    const drawing = new Rect(this.drawing);
    this.handle(
      (x, y) => ({ ...this.drawing, ...drawing.moveBottom({ x, y }) }),
      this.bottom
    );
  }

  handleLeftTop() {
    const drawing = new Rect(this.drawing);
    this.handle(
      (x, y) => ({ ...this.drawing, ...drawing.moveLeftTop({ x, y }) }),
      this.leftTop
    );
  }

  handleRightTop() {
    const drawing = new Rect(this.drawing);
    this.handle(
      (x, y) => ({ ...this.drawing, ...drawing.moveRightTop({ x, y }) }),
      this.rightTop
    );
  }

  handleRightBottom() {
    const drawing = new Rect(this.drawing);
    this.handle(
      (x, y) => ({ ...this.drawing, ...drawing.moveRightBottom({ x, y }) }),
      this.rightBottom
    );
  }

  handleLeftBottom() {
    const drawing = new Rect(this.drawing);
    this.handle(
      (x, y) => ({ ...this.drawing, ...drawing.moveLeftBottom({ x, y }) }),
      this.leftBottom
    );
  }

  handle(fn: (x: number, y: number) => RectDrawing, initial: Point) {
    this.$emit("handle", fn, initial);
  }
}
</script>
