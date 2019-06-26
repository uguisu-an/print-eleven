<template>
  <div class="container" v-if="line">
    <div class="form-row form-group">
      <label for="x1" class="col-sm-3 col-form-label">x1</label>
      <div class="col-sm-3">
        <input
          type="number"
          id="x1"
          class="form-control"
          v-model.number="line.x1"
        />
      </div>
      <label for="y1" class="col-sm-3 col-form-label">y1</label>
      <div class="col-sm-3">
        <input
          type="number"
          id="y1"
          class="form-control"
          v-model.number="line.y1"
        />
      </div>
    </div>
    <div class="form-row form-group">
      <label for="x2" class="col-sm-3 col-form-label">x2</label>
      <div class="col-sm-3">
        <input
          type="number"
          id="x2"
          class="form-control"
          v-model.number="line.x2"
        />
      </div>
      <label for="y2" class="col-sm-3 col-form-label">y2</label>
      <div class="col-sm-3">
        <input
          type="number"
          id="y2"
          class="form-control"
          v-model.number="line.y2"
        />
      </div>
    </div>
    <div class="form-row form-group">
      <label for="stroke" class="col-sm-3 col-form-label">stroke</label>
      <div class="col-sm-3">
        <input
          type="text"
          id="stroke"
          class="form-control"
          v-model="line.stroke"
        />
      </div>
      <label for="stroke-width" class="col-sm-3 col-form-label"
        >stroke-width</label
      >
      <div class="col-sm-3">
        <input
          type="number"
          id="stroke-width"
          class="form-control"
          v-model.number="line.strokeWidth"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import { LineObject } from "@/types/object";

@Component
export default class VLineControl extends Vue {
  @Prop() line?: LineObject;
}
</script>
