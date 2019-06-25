<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    hello world
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
