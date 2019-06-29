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
          @mousedown="movePoint"
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

  moveType = "";
  pointCached = { x: 0, y: 0 };

  movePoint(_e: MouseEvent, p: "start" | "end") {
    if (p === "start") {
      this.moveStartPoint();
    } else {
      this.moveEndPoint();
    }
  }

  moveStartPoint() {
    if (!this.selectedObject) return;
    this.moveType = "start";
    this.pointCached = { x: this.selectedObject.x1, y: this.selectedObject.y1 };
  }

  moveEndPoint() {
    if (!this.selectedObject) return;
    this.moveType = "end";
    this.pointCached = { x: this.selectedObject.x2, y: this.selectedObject.y2 };
  }

  move(e: MouseEvent) {
    if (!this.selectedObject) return;
    if (this.moveType === "start") {
      this.selectedObject.x1 = e.offsetX;
      this.selectedObject.y1 = e.offsetY;
    } else if (this.moveType === "end") {
      this.selectedObject.x2 = e.offsetX;
      this.selectedObject.y2 = e.offsetY;
    }
  }

  endMove() {
    if (!this.selectedObject) return;
    this.moveType = "";
  }

  cancelMove() {
    if (!this.selectedObject) return;
    if (this.moveType === "start") {
      this.selectedObject.x1 = this.pointCached.x;
      this.selectedObject.y1 = this.pointCached.y;
    } else if (this.moveType === "end") {
      this.selectedObject.x2 = this.pointCached.x;
      this.selectedObject.y2 = this.pointCached.y;
    }
    this.moveType = "";
  }
}
</script>
