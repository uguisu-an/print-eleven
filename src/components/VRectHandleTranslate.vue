<template>
  <VRectDrawing
    :drawing="drawing"
    @mousedown="handle"
    class="rect-handle-translate"
  />
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import Point from "@/models/point";
import { RectDrawing } from "@/models/rect-drawing";
import VRectDrawing from "./VRectDrawing.vue";

@Component({
  components: {
    VRectDrawing
  }
})
export default class VRectHandleTranslate extends Vue {
  @Prop({ required: true }) drawing!: RectDrawing;

  handle(e: MouseEvent) {
    const d = { ...this.drawing };
    const a = e.offsetX;
    const b = e.offsetY;
    this.$emit(
      "handle",
      (x: number, y: number) => ({
        ...d,
        x: d.x + (x - a),
        y: d.y + (y - b)
      }),
      { x: a, y: b }
    );
  }
}
</script>

<style lang="scss" scoped>
.rect-handle-translate {
  cursor: move;
}
</style>
