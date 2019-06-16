<template>
  <div class="addBlog">
    <h1>Add New Blog</h1>
    <quill-editor v-model="content" ref="myQuillEditor" :options="editorOptions"/>
  </div>
</template>

<script>
import 'quill/dist/quill.snow.css';
import { quillEditor } from 'vue-quill-editor';
import { Button, Input, Select } from 'iview';

export default {
  name: 'AddBlog',
  components: {
    quillEditor
  },
  data: () => ({
    content: '',
    editorOptions: {
      debug: 'info',
      placeholder: 'Type your post...',
      readOnly: true,
      theme: 'snow'
    },
    delta: undefined
  }),
  watch: {
    content() {
      this.delta = this.$refs.myQuillEditor.quill.getContents();
    }
  }
};
</script>

<style lang="scss" scoped>
.addBlog {
  margin: 25px 0;
  & h1 {
    text-align: center;
  }
}
.quill-editor {
  height: 75vh;
  width: 75vw;
  margin: 15px auto;
}
</style>

