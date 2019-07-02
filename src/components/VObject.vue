<template>
  <component
    :is="component"
    :drawing="drawing"
    :active="active"
    @click="click"
    @scalestart="scalestart"
  />
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import { Drawing, DrawingType } from "../models/drawing";
import VLineObject from "./VLineObject.vue";
import VRectObject from "./VRectObject.vue";
import Point from "@/models/point";
import Scale from "@/models/scale";

@Component({})
export default class VObject extends Vue {
  @Prop({ required: true }) drawing!: Drawing;
  @Prop({ default: false }) active!: boolean;

  get component(): Vue.Component {
    if (this.drawing.kind === DrawingType.Line) {
      return VLineObject;
    }
    if (this.drawing.kind === DrawingType.Rect) {
      return VRectObject;
    }
    throw new Error("not implemented");
  }

  click(e: MouseEvent) {
    this.$emit("click", e);
  }

  scalestart(fn: Scale, initial: Point) {
    this.$emit("scalestart", fn, initial);
  }

  // translatestart
  // rotatestart
}
</script>
