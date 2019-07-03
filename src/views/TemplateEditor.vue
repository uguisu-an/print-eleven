<template>
  <div>
    <!-- <VLineControl :line="selectedObject" v-if="selectedObject" /> -->
    <v-canvas @mousemove="move" @mouseup="endMove" @mouseleave="cancelMove">
      <v-object
        v-for="d in drawings"
        :key="d.id"
        :drawing="d"
        :active="isSelected(d)"
        @click="select(d)"
        @scalestart="startMove"
        @translatestart="startMove"
      />
    </v-canvas>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import { Drawing } from "@/models/drawing";
import Scale from "@/models/scale";
import Point from "@/models/point";
import VCanvas from "@/components/VCanvas.vue";
import VObject from "@/components/VObject.vue";

@Component({
  components: {
    "v-canvas": VCanvas,
    "v-object": VObject
  }
})
export default class TemplateEditor extends Vue {
  selectedObject: Drawing | null = null;
  doMove?: Scale;
  pointCached: Point = { x: 0, y: 0 };

  get drawings() {
    return this.$store.state.drawings;
  }

  select(drawing: Drawing) {
    this.selectedObject = drawing;
  }

  isSelected(drawing: Drawing) {
    return drawing === this.selectedObject;
  }

  startMove(move: Scale, initial: Point) {
    this.pointCached = initial;
    this.doMove = move;
  }

  move(e: MouseEvent) {
    if (!this.selectedObject) return;
    if (!this.doMove) return;
    Object.assign(this.selectedObject, this.doMove(e.offsetX, e.offsetY));
  }

  endMove() {
    delete this.doMove;
  }

  cancelMove() {
    if (!this.selectedObject) return;
    if (!this.doMove) return;
    const { x, y } = this.pointCached;
    Object.assign(this.selectedObject, this.doMove(x, y));
    delete this.doMove;
  }
}
</script>
