<template>
  <g>
    <VRectDrawing :rect="rect" @click="click" />
    <VRectHandle v-if="selected" :rect="rect" @handle="handle" />
  </g>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import Point from "@/models/point";
import { RectDrawing } from "@/models/rect-drawing";
import VRectDrawing from "./VRectDrawing.vue";
import VRectHandle from "./VRectHandle.vue";

@Component({
  components: {
    VRectDrawing,
    VRectHandle
  }
})
export default class VRectObject extends Vue {
  @Prop({ required: true }) rect!: RectDrawing;
  @Prop({ default: false }) selected!: boolean;

  handle(fn: Function, initial: Point) {
    this.$emit("movestart", fn, initial);
  }

  click(e: MouseEvent) {
    this.$emit("click", e);
  }
}
</script>
