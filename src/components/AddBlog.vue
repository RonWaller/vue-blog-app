<template>
  <div class="addBlog">
    <h1>Add New Blog</h1>
    <quill-editor v-model="content" :options="editorOptions" ref="myQuillEditor"/>
  </div>
</template>

<script>
import 'quill/dist/quill.snow.css';
import quill from 'quill';
import { Quill, quillEditor } from 'vue-quill-editor';

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
      theme: 'snow',
      debug: 'info',
      placeholder: 'Type your post...',
      readOnly: true
    },
    delta: undefined
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
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  },
  mounted() {
    console.log('this is current quill instance object', this.editor);
  }
};
</script>

<style lang="scss" >
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
.ql-toolbar {
  text-align: center;
}
</style>

