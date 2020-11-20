<template>
  <div class="grid-container">
    <article v-for="post in posts" :key="post.id">
      <img :src="post.image" />
      <h3>{{ post.description }}</h3>
      <router-link :to="{ name: 'Update', params: { post: post } }">
        <button>Update</button>
      </router-link>
      <button type="button" v-on:click="deletePost(post.id)">Delete</button>
    </article>
  </div>
</template>

<script>
import { postRef } from "../firebase-db";
export default {
    data () {
        return {
            posts: []
        };
    },
    firestore: {
        posts: postRef
    }
}
</script>