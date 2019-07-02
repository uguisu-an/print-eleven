<template>
  <g>
    <VLineDrawing :drawing="drawing" />
    <VLineDrawing :drawing="drawingMask" @click="click" />
    <VLineHandle v-if="active" :drawing="drawing" @handle="scalestart" />
  </g>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import { LineDrawing } from "@/models/line-drawing";
import VLineDrawing from "./VLineDrawing.vue";
import VLineHandle from "./VLineHandle.vue";
import Scale from "@/models/scale";
import Point from "@/models/point";

@Component({
  components: {
    VLineDrawing: VLineDrawing,
    VLineHandle: VLineHandle
  }
})
export default class VLineObject extends Vue {
  @Prop({ required: true }) drawing!: LineDrawing;
  @Prop({ default: false }) active!: boolean;

  get drawingMask() {
    return {
      ...this.drawing,
      stroke: "transparent",
      strokeWidth: Math.max(this.drawing.strokeWidth, 15)
    };
  }

  click(e: MouseEvent) {
    this.$emit("click", e);
  }

  scalestart(fn: Scale, initial: Point) {
    this.$emit("scalestart", fn, initial);
  }
}
</script>
