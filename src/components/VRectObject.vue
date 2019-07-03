<template>
  <g>
    <VRectDrawing :drawing="drawing" @click="click" />
    <VRectHandleTranslate v-if="active" :drawing="drawing" @handle="handle" />
    <VRectHandle v-if="active" :drawing="drawing" @handle="handle" />
  </g>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import Point from "@/models/point";
import { RectDrawing } from "@/models/rect-drawing";
import VRectDrawing from "./VRectDrawing.vue";
import VRectHandle from "./VRectHandle.vue";
import VRectHandleTranslate from "./VRectHandleTranslate.vue";

@Component({
  components: {
    VRectDrawing,
    VRectHandle,
    VRectHandleTranslate
  }
})
export default class VRectObject extends Vue {
  @Prop({ required: true }) drawing!: RectDrawing;
  @Prop({ default: false }) active!: boolean;

  click(e: MouseEvent) {
    this.$emit("click", e);
  }

  handle(fn: Function, initial: Point) {
    this.$emit("scalestart", fn, initial);
  }
}
</script>
