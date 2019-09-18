<template>
    <div class="head">
    <div class="menu" >
      <a><img src="../assets/cinemacrush-logo.png"  @click="show_nav = !show_nav" /></a> 
      <v-icon name="align-right" scale="2"  />
    </div>

      <nav v-show="show_nav">
               <v-icon name="align-right" scale="2"  />

         <ul> 

            <router-link to="/" tag="li">Home</router-link>
      <router-link to="/popular" tag="li">Popular</router-link>
      <router-link to="/top" tag="li">Top Rated</router-link>
      <router-link to="/upcoming" tag="li">Upcoming</router-link>
      <router-link to="/trend" tag="li">Trending</router-link>
      <router-link to="/tv" tag="li">TV Show</router-link>
      <router-link to="/search" tag="li">Search</router-link>
         </ul>

      </nav>

     <div class="land">
    <p>Latest movies and movie trailers</p>
    <p>CinemaCrush is your beautiful collection of popular, top rated, box office and upcoming movies. Discover latest movie trailers and reviews. Show your LOVE of movies.</p>
 </div> 
  </div>
  </div>

</template>
<script>
import Icon from 'vue-awesome/components/Icon'


  export default {
    name:"header",
    components: {
    'v-icon': Icon
  },
  data(){
     return{
       show_nav:false,
     }  
  },
 methods:{
   show(){
     alert("show me")
   }
 }

    
}
</script>
<style lang="scss" scoped>
.menu{
   position:relative;
   width:100%;
  svg{
    position:absolute;
    right:0%;
   cursor:pointer;
  }
}

nav{
    height:100vh;
   background:#2d3436;
   width:25vw;
   position:fixed;
   right:0;
   top:0;
   z-index:999;
   overflow:hidden;
   padding:2.3em;
   svg{
    position:absolute;
    right:8%;
   cursor:pointer;
  }
ul{
    margin-top:4em;

   li{
    line-height:2.4em;
    border-bottom: 1px dotted #b2bec3;
    font-size:1.2em;
   cursor:pointer;

   }
}
}

.land{
   position: relative;
   width:100%;
   padding:2em;
   padding-left:0;
   margin-top:2em;
   font-family: 'Darker Grotesque', sans-serif;  
}
.land p{
   color:#fff;
  line-height:1.5;
  margin-bottom:1em; 
  font-size:1.2em;  
}
.land p:nth-child(2){
   background-color:#111;
   padding: 1.1em;

 }
</style>
  