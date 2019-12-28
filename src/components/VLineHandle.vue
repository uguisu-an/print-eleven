<template>
  <g>
    <VHandle :x="drawing.x1" :y="drawing.y1" @mousedown="startMoveStart" />
    <VHandle :x="drawing.x2" :y="drawing.y2" @mousedown="startMoveEnd" />
  </g>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import { LineDrawing } from "@/models/line-drawing";
import VHandle from "@/components/VHandle.vue";

@Component({
  components: {
    VHandle
  }
})
export default class VLineHandle extends Vue {
  @Prop({ required: true }) drawing!: LineDrawing;

  startMoveStart() {
    this.$emit(
      "handle",
      (x: number, y: number) => ({ ...this.drawing, x1: x, y1: y }),
      { x: this.drawing.x1, y: this.drawing.y1 }
    );
  }

  startMoveEnd() {
    this.$emit(
      "handle",
      (x: number, y: number) => ({ ...this.drawing, x2: x, y2: y }),
      { x: this.drawing.x2, y: this.drawing.y2 }
    );
  }
}
</script>
