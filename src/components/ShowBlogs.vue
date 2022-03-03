<template>
  <div id="show-blogs">
   <h1>Blogs</h1>
   <input id=search type="text" v-model="search" placeholder="search">
   
   <div v-for="blog in filteredBlogs" :key="blog.title" class="single-blog">
    <router-link v-bind:to="'/blog/'+ blog.id"><h2>{{blog.title}}</h2></router-link>
    <article>
        {{blog.content}}
    </article>
   </div>

  </div>
</template>

<script>

export default {
  name: 'show-blogs',
  data(){
      return{
          blogs:[],
          search:""
      }
  },
  created(){
      this.$http.get('https://vueproject-f1a9f-default-rtdb.firebaseio.com/posts.json')
      .then(function(data){
         return data.json()
      })
      .then(function(data){
          var blogsArray = [];
          for(let key in data){
              data[key].id = key;
              blogsArray.push(data[key]);
          }
          this.blogs = blogsArray;
      })
  },
  computed:{
      filteredBlogs:function(){
          return this.blogs.filter((blog)=>{
              return blog.title.match(this.search);})
      }
  }
}
</script>

<style>
#show-blogs{
    max-width: 800px;
    margin:0 auto;
}
.single-blog{
    padding:20px;
    margin:20px 0;
    box-sizing: border-box;
    background:white;
    border:1px dotted #aaa;

    backdrop-filter: blur(3px);
    box-shadow:2px 2px 10px rgba(0,0,0,.2);

}
#show-blogs a{
    color: #444;
    text-decoration:none;
}
input [type="text"]{
    position: absolute;
    padding:8px;
    width:100%;
    box-sizing:border-box;
}

#search{
    width:790px;
    height: 30px;
    position:relative;
    border-radius:10px;
    transition:0.5s;
    display: flex;
    justify-content: center;
    align-items:center;
    box-shadow: 0 0 0 1px aqua;
}
</style>