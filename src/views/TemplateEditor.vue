<template>
  <div>
    {{ selectedObject }}
    <VLineControl :line="selectedObject" v-if="selectedObject" />
    <v-canvas @mousemove="move" @mouseup="endMove" @mouseleave="cancelMove">
      <g v-for="(d, i) in drawings" :key="i">
        <VRectObject
          :rect="d"
          :selected="d === selectedObject"
          @click="selectedObject = d"
          @movestart="startMove"
        />
        <!-- <VLineObject :line="line" @click="select(line)" />
        <VLineObjectHandle
          :line="line"
          @start="startMove"
          v-if="line === selectedObject"
        /> -->
      </g>
    </v-canvas>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import VLineControl from "@/components/VLineControl.vue";
import VLineObject from "@/components/VLineObject.vue";
import VLineObjectHandle from "@/components/VLineObjectHandle.vue";
import VRectObject from "@/components/VRectObject.vue";
import { LineDrawing } from "../models/line-drawing";
import { Drawing } from "../models/drawing";

type Move = (x: number, y: number) => Drawing;

@Component({
  components: {
    VRectObject,
    VLineControl,
    VLineObject,
    VLineObjectHandle
  }
})
export default class TemplateEditor extends Vue {
  get drawings() {
    return this.$store.state.drawings;
  }

  selectedObject: LineDrawing | null = null;

  select(drawing: LineDrawing) {
    this.selectedObject = drawing;
  }

  doMove?: Move;
  pointCached = { x: 0, y: 0 };

  startMove(move: Move, initial: { x: number; y: number }) {
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
