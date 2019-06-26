<template>
  <div>
    <button class="btn btn-outline-primary rounded-circle" @click="addObject">
      +
    </button>
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
      <g v-for="(line, i) in lines" :key="i">
        <VLineObject :line="line" @click="select" />
        <VLineObjectHandle
          :line="line"
          @mousedown="movePoint"
          v-if="line === selectedObject"
        />
      </g>
    </v-canvas>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import VLineControl from "@/components/VLineControl.vue";
import VLineObject from "@/components/VLineObject.vue";
import VLineObjectHandle from "@/components/VLineObjectHandle.vue";

interface BoundingBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface LineObject {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  stroke: string;
  strokeWidth: number;
}

@Component({
  components: {
    VLineControl,
    VLineObject,
    VLineObjectHandle
  }
})
export default class TemplateEditor extends Vue {
  // items: BoundingBox[] = [];
  lines: LineObject[] = [];

  selectedObject: LineObject | null = null;

  addObject() {
    this.lines.push({
      x1: 10 * this.lines.length,
      y1: 10,
      x2: 100 + 15 * this.lines.length,
      y2: 100,
      stroke: "gray",
      strokeWidth: 3
    });
    this.selectedObject = this.lines.slice(-1)[0];
    // this.items.push({
    //   x: 10 * this.items.length,
    //   y: 100 * this.items.length,
    //   width: 400,
    //   height: 200
    // });
  }

  select(_e: MouseEvent, line: LineObject) {
    this.selectedObject = line;
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
    console.info("move");
    if (!this.selectedObject) return;
    this.moveType = "start";
    this.pointCached = { x: this.selectedObject.x1, y: this.selectedObject.y1 };
  }

  moveEndPoint() {
    console.info("move");
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
    console.info("moved");
    if (!this.selectedObject) return;
    this.moveType = "";
  }

  cancelMove() {
    console.info("canceled");
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
