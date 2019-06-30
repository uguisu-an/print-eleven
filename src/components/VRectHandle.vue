<template>
  <g>
    <VHandle :x="leftTop.x" :y="leftTop.y" @mousedown="handleLeftTop" />
    <VHandle :x="top.x" :y="top.y" />
    <VHandle :x="rightTop.x" :y="rightTop.y" @mousedown="handleRightTop" />
    <VHandle :x="right.x" :y="right.y" />
    <VHandle
      :x="rightBottom.x"
      :y="rightBottom.y"
      @mousedown="handleRightBottom"
    />
    <VHandle :x="bottom.x" :y="bottom.y" />
    <VHandle
      :x="leftBottom.x"
      :y="leftBottom.y"
      @mousedown="handleLeftBottom"
    />
    <VHandle :x="left.x" :y="left.y" />
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
  @Prop({ required: true }) rect!: RectDrawing;

  get leftTop() {
    return { x: this.rect.x, y: this.rect.y };
  }

  get top() {
    return { x: this.rect.x + this.rect.width / 2, y: this.rect.y };
  }

  get rightTop() {
    return { x: this.rect.x + this.rect.width, y: this.rect.y };
  }

  get right() {
    return {
      x: this.rect.x + this.rect.width,
      y: this.rect.y + this.rect.height / 2
    };
  }

  get rightBottom() {
    return {
      x: this.rect.x + this.rect.width,
      y: this.rect.y + this.rect.height
    };
  }

  get bottom() {
    return {
      x: this.rect.x + this.rect.width / 2,
      y: this.rect.y + this.rect.height
    };
  }

  get leftBottom() {
    return { x: this.rect.x, y: this.rect.y + this.rect.height };
  }

  get left() {
    return { x: this.rect.x, y: this.rect.y + this.rect.height / 2 };
  }

  handleLeftTop() {
    const rect = new Rect(this.rect);
    this.handle(
      (x, y) => ({ ...this.rect, ...rect.moveLeftTop({ x, y }) }),
      this.leftTop
    );
  }

  handleRightTop() {
    const rect = new Rect(this.rect);
    this.handle(
      (x, y) => ({ ...this.rect, ...rect.moveRightTop({ x, y }) }),
      this.rightTop
    );
  }

  handleRightBottom() {
    const rect = new Rect(this.rect);
    this.handle(
      (x, y) => ({ ...this.rect, ...rect.moveRightBottom({ x, y }) }),
      this.rightBottom
    );
  }

  handleLeftBottom() {
    const rect = new Rect(this.rect);
    this.handle(
      (x, y) => ({ ...this.rect, ...rect.moveLeftBottom({ x, y }) }),
      this.leftBottom
    );
  }

  handle(fn: (x: number, y: number) => RectDrawing, initial: Point) {
    this.$emit("handle", fn, initial);
  }
}
</script>
