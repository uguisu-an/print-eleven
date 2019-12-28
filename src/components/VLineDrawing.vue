<template>
  <line
    :x1="drawing.x1"
    :y1="drawing.y1"
    :x2="drawing.x2"
    :y2="drawing.y2"
    :stroke="drawing.stroke"
    :stroke-width="drawing.strokeWidth"
    @click="click"
  />
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import { LineDrawing } from "@/models/line-drawing";

@Component({})
export default class VLineDrawing extends Vue {
  @Prop({ required: true }) drawing!: LineDrawing;

  click(e: MouseEvent) {
    this.$emit("click", e);
  }
}
</script>
