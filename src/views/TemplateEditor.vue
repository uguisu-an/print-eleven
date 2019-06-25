<template>
  <div>
    <button class="btn btn-outline-primary rounded-circle" @click="addObject">
      +
    </button>
    <v-canvas>
      <rect
        v-for="(item, i) in items"
        :key="i"
        :x="item.x"
        :y="item.y"
        :width="item.width"
        :height="item.height"
        stroke="gray"
        stroke-width="3px"
      />
    </v-canvas>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";

interface BoundingBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

@Component
export default class TemplateEditor extends Vue {
  items: BoundingBox[] = [];

  addObject() {
    this.items.push({
      x: 10 * this.items.length,
      y: 100 * this.items.length,
      width: 400,
      height: 200
    });
  }
}
</script>
