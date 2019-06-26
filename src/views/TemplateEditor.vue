<template>
  <div>
    <VLineControl :line="selectedObject" v-if="selectedObject" />

    <button class="btn btn-outline-primary rounded-circle" @click="addObject">
      +
    </button>
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
      <template v-for="(line, i) in lines">
        <g :key="i">
          <line
            :x1="line.x1"
            :y1="line.y1"
            :x2="line.x2"
            :y2="line.y2"
            :stroke="line.stroke"
            :stroke-width="line.strokeWidth"
            marker-start="url(#marker-circle)"
            marker-end="url(#marker-circle)"
          />
          <line
            :x1="line.x1"
            :y1="line.y1"
            :x2="line.x2"
            :y2="line.y2"
            stroke="transparent"
            :stroke-width="Math.max(line.strokeWidth, 15)"
            @click="select(line)"
          />
          <template v-if="line === selectedObject">
            <circle
              :cx="line.x1"
              :cy="line.y1"
              r="5"
              stroke="gray"
              stroke-width="1"
              fill="white"
              @mousedown="moveStartPoint"
            />
            <circle
              :cx="line.x2"
              :cy="line.y2"
              r="5"
              stroke="gray"
              stroke-width="1"
              fill="white"
              @mousedown="moveEndPoint"
            />
          </template>
        </g>
      </template>
    </v-canvas>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import VLineControl from "@/components/VLineControl.vue";

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
    VLineControl
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

  select(line: LineObject) {
    this.selectedObject = line;
  }

  moveType = "";
  pointCached = { x: 0, y: 0 };

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
