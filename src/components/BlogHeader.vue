<template>
  <div>
      
  <nav>
      <ul>          
          <li>            
              <router-link to='/' exact>BLOG</router-link>
              <router-link to='/add' exact>POST</router-link>
          </li>
      </ul>
      
  </nav>  
  <p id="clock">{{getTime()}}</p>
  </div>
</template>

<script>
export default{
    name:"blog-header",
    methods: {
    getTime(){
       var _this = this;
        let yy = new Date().getFullYear();
        let mm = new Date().getMonth()+1;
        let dd = new Date().getDate();
        let hh = new Date().getHours();
        let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
        let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
        _this.gettime = yy+'/'+mm+'/'+dd+' '+hh+':'+mf+':'+ss;
        return _this.gettime  
    }
}                              
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
    list-style-type:none;
    text-align: center;
    margin:0;
}
li{
    display: inline-block;
    margin: 0 10px;
}

a{
    color: white;
    text-decoration:none;
    padding: 12px;
    border-radius:5px;
}

nav{
    background: rgba(255,255,255,.3);
    padding:30px 0;
    margin-bottom:40px;

    backdrop-filter: blur(3px);
    box-shadow:2px 2px 10px rgba(0,0,0,.2);

}

.router-link-active{
    background: white;
    color: black;
}

#clock{
    font-size: 50px;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-shadow:0 0 20px #66ccff, 0 2px 0 #DAF6FF;
    text-align:center;
}

</style>
