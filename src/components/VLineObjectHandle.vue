<template>
  <g>
    <circle
      :cx="line.x1"
      :cy="line.y1"
      r="5"
      stroke="gray"
      stroke-width="1"
      fill="white"
      @mousedown="mousedown($event, 'start')"
    />
    <circle
      :cx="line.x2"
      :cy="line.y2"
      r="5"
      stroke="gray"
      stroke-width="1"
      fill="white"
      @mousedown="mousedown($event, 'end')"
    />
  </g>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import { LineObject } from "@/types/object";

@Component
export default class VLineObjectHandle extends Vue {
  @Prop({ required: true }) line!: LineObject;

  mousedown(e: MouseEvent, p: "start" | "end") {
    this.$emit("mousedown", e, p);
  }
}
</script>
