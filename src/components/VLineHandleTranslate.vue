<template>
  <line
    class="line-handle-translate"
    :x1="drawing.x1"
    :y1="drawing.y1"
    :x2="drawing.x2"
    :y2="drawing.y2"
    stroke="transparent"
    stroke-width="15"
    @mousedown="handle"
  />
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import { LineDrawing } from "@/models/line-drawing";

@Component({})
export default class VLineDrawing extends Vue {
  @Prop({ required: true }) drawing!: LineDrawing;

  handle(e: MouseEvent) {
    const d = { ...this.drawing };
    const a = e.offsetX;
    const b = e.offsetY;
    this.$emit(
      "handle",
      (x: number, y: number) => ({
        ...d,
        x1: d.x1 + (x - a),
        y1: d.y1 + (y - b),
        x2: d.x2 + (x - a),
        y2: d.y2 + (y - b)
      }),
      { x: a, y: b }
    );
  }

  click(e: MouseEvent) {
    this.$emit("click", e);
  }
}
</script>

<style lang="scss" scoped>
.line-handle-translate {
  cursor: move;
}
</style>
