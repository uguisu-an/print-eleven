<template>
  <div class="home">
    <button class="btn btn-outline-primary" @click="addLine">
      線を追加
    </button>
    <button class="btn btn-outline-primary" @click="addRect">
      四角形を追加
    </button>
    <TemplateEditor />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapMutations } from "vuex";
import TemplateEditor from "./TemplateEditor.vue";

@Component({
  components: {
    TemplateEditor
  },
  methods: {
    ...mapMutations(["addLine", "addRect"])
  }
})
export default class Home extends Vue {}
</script>
