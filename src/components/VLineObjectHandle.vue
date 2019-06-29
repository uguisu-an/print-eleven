<template>
  <g>
    <VHandle :x="line.x1" :y="line.y1" @mousedown="startMoveStart" />
    <VHandle :x="line.x2" :y="line.y2" @mousedown="startMoveEnd" />
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
export default class VLineObjectHandle extends Vue {
  @Prop({ required: true }) line!: LineDrawing;

  startMoveStart() {
    this.$emit(
      "start",
      (x: number, y: number) => ({ ...this.line, x1: x, y1: y }),
      { x: this.line.x1, y: this.line.y1 }
    );
  }

  startMoveEnd() {
    this.$emit(
      "start",
      (x: number, y: number) => ({ ...this.line, x2: x, y2: y }),
      { x: this.line.x2, y: this.line.y2 }
    );
  }
}
</script>
