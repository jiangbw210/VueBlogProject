<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.content}}</article>
  </div>
</template>

<script>
export default {
  name: "single-blog",
  data () {
    return {
        id:this.$route.params.id,
        blog:{}
    }
  },
  created(){
      this.$http.get("https://vueproject-f1a9f-default-rtdb.firebaseio.com/posts/" + this.id + ".json")
      .then(function(data){
      return data.json();

      })
      .then(function(data){
          this.blog = data;
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #single-blog{
        max-width: 960px;
        margin:0 auto;
        padding: 20px;
        background:white;
        border: 1px dotted #aaa;
    }
</style>
