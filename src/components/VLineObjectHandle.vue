<template>
  <g>
    <rect
      :x="line.x1 - 4"
      :y="line.y1 - 4"
      width="8"
      height="8"
      stroke="gray"
      stroke-width="1"
      fill="white"
      @mousedown="mousedown($event, 'start')"
    />
    <rect
      :x="line.x2 - 4"
      :y="line.y2 - 4"
      width="8"
      height="8"
      stroke="gray"
      stroke-width="1"
      fill="white"
      @mousedown="mousedown($event, 'end')"
    />
  </g>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import { LineDrawing } from "@/models/line-drawing";

@Component
export default class VLineObjectHandle extends Vue {
  @Prop({ required: true }) line!: LineDrawing;

  mousedown(e: MouseEvent, p: "start" | "end") {
    this.$emit("mousedown", e, p);
  }
}
</script>
