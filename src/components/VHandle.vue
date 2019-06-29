<template>
  <rect
    :x="x - 4"
    :y="y - 4"
    width="8"
    height="8"
    fill="white"
    stroke="gray"
    stroke-width="1"
    @mousedown="mousedown"
  />
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";

@Component({})
export default class VHandle extends Vue {
  @Prop({ required: true }) x!: number;
  @Prop({ required: true }) y!: number;

  mousedown(e: MouseEvent) {
    this.$emit("mousedown", e);
  }
}
</script>
