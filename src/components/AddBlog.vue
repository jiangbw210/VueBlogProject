<template>
  <div id="add-blog">
      <h2>Add Blog</h2>
      <form v-if="!submitted">
          <label>Title</label>
          <input type="text" v-model="blog.title" required />
          <label>content</label>
          <textarea v-model="blog.content"> </textarea>
          <button v-on:click.prevent="post">Post Blog</button>
      </form>

    <hr>
    <div v-if="submitted">
        <h3>Post Successful!</h3>
    </div>

<div id = "preview">
    <h3>Blog</h3>
    <p>Blog Title:{{blog.title}}</p>
    <p>Blog content:</p>
    <p>{{blog.content}}</p>
</div>
</div>
  
</template>

<script>
import axios from 'axios'
export default {
  name: 'add-blog',
  data () {
    return {
      blog:{
          title:"",
          content:""
      },
      submitted:false
    }
  },
    methods:{
        post:function(){
            var _this = this;
            axios.post(
             "https://vueproject-f1a9f-default-rtdb.firebaseio.com/posts.json",this.blog)
            .then(function(data){
                console.log(data);
                _this.submitted = true;
            });
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#add-blog *{
    box-sizing:border-box;
}
#add-blog{
    margin:20px auto;
    max-width:600px;
    padding:20px;
}

label{
    display:block;
    margin: 20px 0 10px;
}

input[type='text'],textarea,select{
display:block;
width:100%;
padding:8px;
}

textarea{
    height:180px;
}

button{
    display:block;
    margin: 18px 0;
    background:white;
    color:black;
    border:0;
    padding:12px;
    border-radius:6px;
    font-size:18px;
    cursor:point;
    
    backdrop-filter: blur(3px);
    box-shadow:2px 2px 10px rgba(0,0,0,.2);
}

#preview{
    padding:10px 20px;
    border:1px dotted gray;
    margin:30px 0;
    background:white;
}

h3{
    margin-top:10px;
}
</style>
