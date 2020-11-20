<template>
    <div class="update">
        <h1>Update</h1>
        <form action="">
            <input 
            type="text" 
            v-model="post.title"
            placeholder="Type title"
            required
           />
            <input 
            type="text" 
            v-model="post.description"
            placeholder="Type description"
            required
           />
           <input 
           type="file"
           ref="fileInput"
           accept="image/*"
           v-on:change="previewImage"
           />
           <button class="choose-image" type="button" v-on:click="triggerChooseImg">
        Choose Image
      </button>
      <div>
        <img :src="post.image" class="image-preview" />
      </div>
      <button id="update-post" type="button" v-on:click="updatePost">Update post</button>
    </form>
  </div>
</template>


<script>
import { postRef } from "../firebase-db";
export default {
  name: "Update",
  props: {
    post: Object
  },
  methods: {
    triggerChooseImg() {
      this.$refs.fileInput.click();
    },
    previewImage() {
      const imageFile = this.$refs.fileInput.files[0];
      const fileReader = new FileReader();
      fileReader.onload = event => {
        this.post.image = event.target.result;
      };
      fileReader.readAsDataURL(imageFile);
    },
    updatePost() {
      console.log(this.post);

      postRef.doc(this.post.id).set({
        title: this.post.title,
        description: this.post.description,
        image: this.post.image
      });

      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
form {
  padding: 0em 1em 2.5em;
}

button {
    font-family: futura-pt;
  font-weight: 500;
  text-transform: lowercase;
}

button.choose-image {
  background-color: #428CD4;
  border-radius: 30px;
}

button#update-post {
    margin-top: 2%;
    background-color: #004e9a;
  border-radius: 30px;
  margin-bottom: 5%;
}

input {
  margin: 1em auto;
  width: 100%;
  max-width: 350px;
  padding: 12px 15px;
  box-sizing: border-box;
  display: block;
  outline: none;
  border: 3px solid #ccc;
    font-size: 1em;
  font-family: futura-pt;
}

input:focus{
border-color: #428cd4
}

input[type="file"] {
  display: none;
}

.image-preview {
  max-width: 350px;
  width: 100%;
  padding: 1em 0;
}
</style>
