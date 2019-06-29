<template>
  <rect
    :x="rect.x"
    :y="rect.y"
    :width="rect.width"
    :height="rect.height"
    :fill="rect.fill"
    :stroke="rect.stroke"
    :stroke-width="rect.strokeWidth"
    @click="click"
  />
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import { RectDrawing } from "@/models/rect-drawing";

@Component({})
export default class VRectDrawing extends Vue {
  @Prop({ required: true }) rect!: RectDrawing;

  click(e: MouseEvent) {
    this.$emit("click", e);
  }
}
</script>
