<template>
  <div class="addBlog">
    <h1>Add New Blog</h1>
    <quill-editor v-model="content" ref="myQuillEditor" :options="editorOptions"/>
  </div>
</template>

<script>
import 'quill/dist/quill.snow.css';
import { quillEditor } from 'vue-quill-editor';

export default {
  name: 'AddBlog',
  components: {
    quillEditor
  },
  data: () => ({
    title: '',
    category: '',
    content: '',
    editorOptions: {
      debug: 'info',
      placeholder: 'Type your post...',
      readOnly: true,
      theme: 'snow'
    },
    delta: undefined,
    editorModule: undefined
  }),
  methods: {
    showImageUI() {
      alert('Image UI');
    }
  },
  watch: {
    content() {
      this.delta = this.$refs.myQuillEditor.quill.getContents();
      console.log(this.delta);
    }
  },
  computed: {},
  mounted() {
    this.editorModule = this.$refs.myQuillEditor.quill.getModule('toolbar');
    this.editorModule.addHandler('image', this.showImageUI);
  }
};
</script>

<style lang="scss" >
.addBlog {
  margin-top: 25px;
  & h1 {
    text-align: center;
  }
}

.ql-container {
  height: 75vh;
  width: 75vw;
  margin: 0 auto;
}
.ql-toolbar {
  width: 75vw;
  margin: 0 auto;
  text-align: center;
}
</style>

