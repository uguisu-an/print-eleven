<template>
  <g>
    <line
      :x1="line.x1"
      :y1="line.y1"
      :x2="line.x2"
      :y2="line.y2"
      :stroke="line.stroke"
      :stroke-width="line.strokeWidth"
    />
    <line
      :x1="line.x1"
      :y1="line.y1"
      :x2="line.x2"
      :y2="line.y2"
      stroke="transparent"
      :stroke-width="Math.max(line.strokeWidth, 15)"
      @click="click"
    />
  </g>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import { LineDrawing } from "@/models/line-drawing";

@Component
export default class VLineObject extends Vue {
  @Prop({ required: true }) line!: LineDrawing;

  click(e: MouseEvent) {
    this.$emit("click", e, this.line);
  }
}
</script>
