<template>
  <div>
    <VLineControl :line="selectedObject" v-if="selectedObject" />
    <v-canvas @mousemove="move" @mouseup="endMove" @mouseleave="cancelMove">
      <!-- <rect
        v-for="(item, i) in items"
        :key="i"
        :x="item.x"
        :y="item.y"
        :width="item.width"
        :height="item.height"
        stroke="gray"
        stroke-width="3px"
      /> -->
      <g v-for="(line, i) in drawings" :key="i">
        <VLineObject :line="line" @click="select(line)" />
        <VLineObjectHandle
          :line="line"
          @start="startMove"
          v-if="line === selectedObject"
        />
      </g>
    </v-canvas>
    {{ selectedObject }}
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import VLineControl from "@/components/VLineControl.vue";
import VLineObject from "@/components/VLineObject.vue";
import VLineObjectHandle from "@/components/VLineObjectHandle.vue";
import { LineDrawing } from "../models/line-drawing";
import { Drawing } from "../models/drawing";

type MoveLine = (x: number, y: number) => LineDrawing;

@Component({
  components: {
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

  moveLine?: MoveLine;
  pointCached = { x: 0, y: 0 };

  startMove(move: MoveLine, initial: { x: number; y: number }) {
    this.pointCached = initial;
    this.moveLine = move;
  }

  move(e: MouseEvent) {
    if (!this.selectedObject) return;
    if (!this.moveLine) return;
    Object.assign(this.selectedObject, this.moveLine(e.offsetX, e.offsetY));
  }

  endMove() {
    delete this.moveLine;
  }

  cancelMove() {
    if (!this.selectedObject) return;
    if (!this.moveLine) return;
    const { x, y } = this.pointCached;
    Object.assign(this.selectedObject, this.moveLine(x, y));
    delete this.moveLine;
  }
}
</script>
