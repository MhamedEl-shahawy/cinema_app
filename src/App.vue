<template>
  <div id="app">
    
    <router-view/>

    <div class="footer">
    <div class="logo"><a href="/"><img src="./assets/cinemacrush-logo.png" alt="Cinema Crush" width="180" height="25" border="0"></a></div>
    <div class="copy">Copyright © <a href="/">CinemaCrush</a>. Date Source: <a href="http://www.themoviedb.org/" target="_blank">TMDb</a></div>
  </div>
  </div>
</template>
<script>

export default {
  name:'app',
    
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Titillium+Web&display=swap');
@import url("https://fonts.googleapis.com/css?family=Oswald:400,500,600,700|Poppins:300,800|Roboto:300i,400,500,700");
@import url('https://fonts.googleapis.com/css?family=Darker+Grotesque&display=swap');
@import url('https://fonts.googleapis.com/css?family=Pacifico&display=swap');

*{
   box-sizing: border-box;
   padding:0;
   margin: 0;
}
ul {
   list-style: none;
}
a{
   text-decoration: none;
   color:#fff;
  outline: none;
}

img{
   max-width:100%; 
}
#app{
   background:#000;
   height:100%;
   width:100%;
   overflow-x: hidden;
   padding:1.7em;
   position: relative;
font-family: 'Titillium Web', sans-serif;
    color: #fff;

}
#app:before {
     animation: grain 1s steps(10) infinite;
     background-image: url(./assets/grains.png);
     content: "";
     height: 300%;
     left: -50%;
     opacity: 0.48;
     position: fixed;
     top: -110%;
     width: 300%;
}
@keyframes grain {
     0%, 100% { transform: translate(0, 0); }
     10% { transform: translate(-5%, -10%); }
     20% { transform: translate(-15%, 5%); }
     30% { transform: translate(7%, -25%); }
     40% { transform: translate(-5%, 25%); }
     50% { transform: translate(-15%, 10%); }
     60% { transform: translate(15%, 0%); }
     70% { transform: translate(0%, 15%); }
     80% { transform: translate(3%, 35%); }
     90% { transform: translate(-10%, 10%); }
}

 .footer {
    background-color: rgba(17,17,17,0.8);
    height: 120px;
    position: relative;
    margin-bottom: 30px;
    font-size: 14px;
    color: #999;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    margin-left: 20px;
    margin-right: 20px;

}


.footer .logo {
    position: absolute;
    width: 180px;
    height: 25px;
    bottom: 25px;
    right: 25px;
}
.logo {
    float: left;
}
.footer .copy {
    position: absolute;
    bottom: 25px;
    left: 25px;
}

</style>
