<template>
    <div class="head">
         <header>
     
      <nav>
  <div class="container">
    <a href="#" id="brand"><img src="../assets/cinemacrush-logo.png" /></a>
    <button class="show_me">
      <span></span>
      <span></span>
      <span></span>
    </button>
    
    <ul class="navbar-menu hide">
      <router-link to="/" tag="li"><a href="#">Home</a></router-link>
      <router-link to="/popular" tag="li"><a href="#">Popular</a></router-link>
      <router-link to="/top" tag="li"><a href="#">Top Rated</a></router-link>
      <router-link to="/upcoming" tag="li"><a href="#">Upcoming</a></router-link>
      <router-link to="/trend" tag="li"><a href="#">Trending</a></router-link>
      <router-link to="/tv" tag="li"><a href="#">TV Show</a></router-link>
      <router-link to="/search" tag="li"><a href="#">Search</a></router-link>
    </ul>
  </div>
</nav>

    </header>
     <div class="land">
    <p>Latest movies and movie trailers</p>
    <p>CinemaCrush is your beautiful collection of popular, top rated, box office and upcoming movies. Discover latest movie trailers and reviews. Show your LOVE of movies.</p>
 </div> 
  </div>
</template>
<script>


  export default {
    name:"header",
   
    
}
</script>
<style lang="scss" scoped>
.head{
   width:100%;
   overflow-x: hidden;
   position: relative;
font-family: 'Titillium Web', sans-serif;
    color: #fff;

}
#brand img{
   max-width:100%; 
}
nav a {
  display: inline-block;
  color: #fff;
  text-decoration: none;
}
nav a span{
   font-weight: bolder;
}
nav {
  background: #000;
  height: 70px;
  line-height: 80px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  transition: all 0.5s;
}

nav.scrollUp {
  transform: translateY(-80px);
}

nav ul.navbar-menu {
  margin: 0;
  padding: 0;
  display: inline-block;
  float: right;
   transition-duration:0.5s;

}

nav ul.navbar-menu li {
  display: inline-block;
  margin: 0 10px;
}

nav ul.navbar-menu li a {
  color: #fff;
  font-size: 15px;
}

nav a#brand {
  text-transform: uppercase;
  foat: left;
  font-weight: 800;
  font-size: 20px;
}

nav button {
  background: none;
  width: 30px;
  height: 40px;
  margin-top: 20px;
  border: none;
  float: right;
  display: inline-block;
  cursor: pointer;
  display: none;
}

nav button span {
  width: 30px;
  height: 40px;
  height: 2px;
  background: #333;
  display: block;
  margin: 5px 0;
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
  