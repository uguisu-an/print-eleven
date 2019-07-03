<template>
  <rect
    :x="drawing.x"
    :y="drawing.y"
    :width="drawing.width"
    :height="drawing.height"
    :fill="drawing.fill"
    :stroke="drawing.stroke"
    :stroke-width="drawing.strokeWidth"
    @click="click"
    @mousedown="mousedown"
  />
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import { RectDrawing } from "@/models/rect-drawing";

@Component({})
export default class VRectDrawing extends Vue {
  @Prop({ required: true }) drawing!: RectDrawing;

  click(e: MouseEvent) {
    this.$emit("click", e);
  }

  mousedown(e: MouseEvent) {
    this.$emit("mousedown", e);
  }
}
</script>
