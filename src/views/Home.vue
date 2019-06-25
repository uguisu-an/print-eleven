<template>
  <div class="home">
    <TemplateEditor />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TemplateEditor from "./TemplateEditor.vue";

@Component({
  components: {
    TemplateEditor
  }
})
export default class Home extends Vue {}
</script>
