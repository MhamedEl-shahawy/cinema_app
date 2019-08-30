<template>
 <div class="main">

      <nav>
  <div class="container">
    <router-link to="/"><a id="brand"><img src="../assets/cinemacrush-logo.png" /></a></router-link>
    
  </div>
</nav>
  <div class="film_movie">

     <div class="row_bg">
          <div class="title">
            <h1>{{products.original_name || products.title}}</h1>
            <div class="rating">
            <img src="../assets/star1.png" alt="" width="17" height="17" border="0">
            <img src="../assets/star1.png" alt="" width="17" height="17" border="0">
            <img src="../assets/star2.png" alt="" width="17" height="17" border="0">
            <img src="../assets/star0.png" alt="" width="17" height="17" border="0">
            <img src="../assets/star0.png" alt="" width="17" height="17" border="0">
        </div>
           </div> 
          <div class="movie_info">
            <img  :src="'https://image.tmdb.org/t/p/original'+products.poster_path" class="thumbnail">
            <div>
            <ul class="list-group">
              <li class="list-group-item"><strong>IMDB Rating: </strong> <span>{{products.vote_average}}</span></li>
              <li class="list-group-item"><strong>IMDB Votes:</strong> {{products.popularity}}</li>
              <li class="list-group-item"><strong>Country:</strong> <span v-for="(country,index) in products.production_countries">{{country.name}} </span></li>
              <li class="list-group-item"><strong>Language:</strong> {{products.original_language}}</li>
              <li class="list-group-item"><strong>Company Production:</strong> <span v-for="(country,index) in products.production_companies">{{country.name}} </span></li>
              <li class="list-group-item"><strong>Genre:</strong><span v-for="(country,index) in products.genres">{{country.name}} </span></li>
              <li class="list-group-item"><strong>Release Date:</strong> {{products.release_date}}</li>
              <li class="list-group-item inline"><a class="show_video"  @click="hide = !hide">Play Trailer</a></li>
              <li class="list-group-item inline"><a class="show_poster"  @click="hide_poster = !hide_poster">  Poster</a></li>
              <li class="list-group-item inline inline_watch"><a class="show_video"  @click="hide_move = !hide_move"> Watch</a></li>
            </ul>
            <div class="details">
            <h3>Cast</h3>
            <ul class="list-group">
              <li class="list-group-item cast" v-for="nam in credit"><router-link :to="'/cast/'+nam.id"><a>{{nam.name}}</a></router-link></li>       
           </ul>
            
            <h3>{{products.title || products.original_name}}</h3>
            <p>{{products.overview}}</p>
            <a :href="'http://imdb.com/title/'+products.imdb_id" target="_blank" class="btn">View IMDB</a>
            <router-link to="/search"><a class="btn">Go Back To Search</a></router-link>
           </div>
          </div>
          <div class="intro   hide_poster" id="intro_img" v-show="hide_poster">
               <a class="close" @click="hide_poster = !hide_poster"></a>
               <img :src="'https://image.tmdb.org/t/p/original/'+products.poster_path" class="thumbnail">
           </div>
          <div class="intro" id="intro_video" v-show="hide">
             <a class="close" @click="hide = !hide"></a> 
             <iframe  class="youtube-video" style="height:70%;width:80%;" :src="'https://www.youtube.com/embed/'+video[0].key" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div> 
           <div class="intro " id="intro_movie" v-show="hide_move">
             <a class="close"  @click="hide_move = !hide_move"></a> 
             <iframe  class="youtube-video" style="height:70%;width:80%;" :src="'https://vidsrc.me/embed/'+products.imdb_id+'/'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>  
        </div>
        </div>
        
        
        </div> 
        <div class="info">
         <h2 class="inline_watch">Recomendations Movies to <span>{{products.original_name ||products.title}}</span></h2>
       </div>
          <div class="film">
  <div id="movies" class="row">
    <div v-for="product in same" class="col-grid">
            <div class="well_box">
              <router-link :to="'/details/'+product.id+'/'+product.title || product.original_name "><a>
               <div>
               <span>{{product.title || product.name}}</span>
              </div>
              <img :src="'https://image.tmdb.org/t/p/original'+product.poster_path">
              </a>
              </router-link>
            </div>
          </div>
          </div>
 </div>

   
  </div>
</template>

<script>
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

  export default {
    name:"details",
    data() {
      return {
           products: [],
           id:this.$route.params.id,
           name:this.$route.params.name,
           same:[],
           video:" ",
           hide:false,
           hide_move:false,
           hide_poster:false,
           type:"",
           credit:[],
      }
    },
      created: function(){
          this.fetchProducts(this.id);
          
      },
      watch: {
          "$route.params.id"(val) {
           // call the method which loads your initial state
                   window.location.reload()
          },
       },
      methods: {
        fetchProducts(num){
           {
              this.$http.get(`https://api.themoviedb.org/3/movie/${num}?append_to_response=videos%2Ccredits%2Creviews&api_key=400225a1886f38d9cf3c934d6a756c4d`).then((response) => {
              this.products = response.body;
                this.video = this.products["videos"].results;
                this.credit = this.products["credits"].cast;

                console.log(this.products);
              });
               
           }

            this.fetchProductsSame(num,"movie");
           if(this.products["title"] !== this.name){
               {
              this.$http.get(`https://api.themoviedb.org/3/tv/${num}?append_to_response=videos%2Ccredits%2Creviews&api_key=400225a1886f38d9cf3c934d6a756c4d`).then((response) => {
              this.products = response.body;
              this.video = this.products["videos"].results;
              this.credit = this.products["credits"].cast;
              });
                             this.fetchProductsSame(num,"tv");

               }
               
           }
          
          },
          fetchProductsSame(num,type){
           {

              this.$http.get(`https://api.themoviedb.org/3/${type}/${num}/recommendations?api_key=400225a1886f38d9cf3c934d6a756c4d`).then((response) => {
              this.same = response.body.results;
              });
              
           }
          }
        }
          
        
  }
</script>
<style lang="scss" scoped>
a{
   text-decoration: none;
   color:#fff;
  outline: none;
}


.film_movie{
   position: relative;
   width:100%;
   padding:2em; 
   overflow-x: hidden;

}
.row_bg{
  position: relative;
  width: 100%;
  height:100%;
  margin-top: 8em;
  padding: 2em;

}
.film_movie .title{
      background-color: rgba(17,17,17,0.8);
    background-image: url(../assets/gradient.png);
    background-position: top;
    background-repeat: repeat-x;
    margin-bottom: 1px;
    overflow: hidden;
    padding: 25px;
    position: relative;
    z-index: 1;
    box-shadow: 0 0 50px #000;
}
.film_movie .title h1 {
    float: left;
    font-family: bold;
    font-size: 30px;
    line-height: 1.2;
}
.film_movie .title .rating {
    float: right;
    white-space: nowrap;
    margin-top: 6px;
}
.movie_info{
  width:100%;
  background-color:rgba(0,0,0,0.6);  
  display: grid;
  grid-template-columns:repeat(1,1fr 2fr); 
  grid-gap: 20px;
  padding:1em; 
}
.movie_info img{
   width:100%; 
}
ul li{
   line-height:1.5; 
   transition-duration:0.5s; 
}
.navbar-menu  li:hover{
     border-bottom: 1px dotted #555;
   }
ul li strong{
   color:#777;
   font-family: 'Darker Grotesque', sans-serif;  
   font-size:1.5em; 

}
ul li span{
       border-bottom: 1px dotted #555;
}
.cast{
  display: inline-block;
}
.cast a{
       border-bottom: 1px dotted #555;
       display: inline-block;
       cursor: pointer;
 }
.details{
   margin-top:0.5em; 
}
.details a{
  border-bottom: 1px dotted #555;
  color:#fff;
  margin-right: 0.5em;
  margin-top:0.5em;  
}
.details h3{
   color:#666;
   margin-bottom: 1em;
   margin-top: 1em;
   font-family: light;  
}

.details p{
  color:#ccc;
   font-family: 'Darker Grotesque', sans-serif;  
   margin-top:0.5em;
   font-size:1.2em;  
   margin-bottom:0.5em;  
}
.inline{
  display: inline-block;
  color: #fff;
  border-bottom: 1px dotted #555;
  margin-right:0.5em; 
  margin-top:1em;
  margin-bottom:1em; 

}
.inline a{
  color: #fff;
  cursor: pointer;
}
.inline_watch a,
.inline_watch span{
  color:#d63031;
  font-size:1.3em;
  font-weight: bolder;   
}
.inline_watch span{
  font-size:1em;

}
.intro{
   width:100%;
   height:100vh;
   display: inline-flex;
   justify-content: center;
   align-items: center;
   z-index:9999;
   position: fixed;
   top:0;
   left:0;   
   background-color:rgba(0,0,0,0.9);     
   padding:2em; 
}
/*close */
.close {
    background: #2d3436;
    width: 60px;
    height: 60px;
    position: absolute;
    top:2%; 
}
.close:after {
    content: '';
    height: 60px;
    border-left: 2px solid #fff;
    position: absolute;
    transform: rotate(45deg);
    left: 28px;
}

.close:before {
    content: '';
    height: 60px;
    border-left: 2px solid #fff;
    position: absolute;
    transform: rotate(-45deg);
    left: 28px;
}

.main_movies{
   background-color:rgba(0,0,0,0.6); 
}
nav {
  background: #111;
  height: 70px;
  line-height: 80px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  transition: all 0.5s;
}
nav a#brand {
  text-transform: uppercase;
  foat: left;
  font-weight: 800;
  font-size: 20px;
}
.cast{
   padding-right:0.5em; 
}
.reviews {
    background-color: #111;
    background-color: rgba(17,17,17,0.8);
    padding: 25px;
    margin-bottom: 30px;
}
.reviews div {
    margin-bottom: 20px;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
.reviews .avatar {
    width: 60px;
}
.reviews td {
    vertical-align: middle;
    padding: 6px;
}
.reviews p {
    line-height: 1.3;
    margin-top: 6px;
}

/* start same */
 #movies{
   position: relative;
   padding-top:2.5em;  
   padding-bottom:2.5em;  

  width: 100%;
   display: grid;
    grid-template-columns: repeat(6,1fr);
}
.row div:nth-child(1) {
  grid-column: span 2;
  grid-row: span 2;
}
.well_box{
   position: relative;
   width:100%;
   height: 100%; 
   box-shadow: 0 0 20px rgba(0,0,0,0.5);
}
.well_box a{
   text-shadow: 0 0 35px #000, 0 0 25px #000, 0 0 15px #000, 0 0 5px #000, 0 0 5px #000;
   text-transform: uppercase; 
}
.well_box a img{
   width: 100%;
   height:100%; 
}
.well_box div{
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0,0,0,0.05);
    -webkit-transition: all .2s ease-in;
    -moz-transition: all .2s ease-in;
    -o-transition: all .2s ease-in;
    transition: all .2s ease-in;
    box-shadow: 0 0 40px rgba(0,0,0,0.7) inset, 0 0 10px rgba(0,0,0,0.5), 0 0 60px rgba(255,255,255,0.25);
    opacity: 0;
    z-index: 1;

}    
.well_box span {
    width: 100%;
    position: absolute;
    bottom: 0;
    padding: 20px;
    font-weight: bold;
    font-size: 20px;
    line-height: 1.3;
    text-transform: uppercase;
    text-shadow: 0 0 35px #000, 0 0 25px #000, 0 0 15px #000, 0 0 5px #000, 0 0 5px #000;
}
.well_box div:hover{
    opacity: 1;
}

.hide_poster img{
    
    margin-top:2em;
   width:40vw;

}
@media only screen and (min-width: 320px) and (max-width: 760px){
 #movies{
   display: block;      
 }
 .well_box{
   margin-bottom:1em; 
 }
 .film_movie{
   padding: 0;
 }
 .movie_info{
   padding-bottom: 2em;
 }
 .movie_info{
   display: block;
 }
 .movie_info img{
   width:100%;
   height:100%;  
 }

 .info h2{
   margin-top:3em;
  }
 




   .movie_info{
   display: block;
 }


}




@media only screen and (min-width:761px) and (max-width: 900px){
  #movies{
   grid-template-columns:repeat(3,1fr);
   grid-gap:20px;  
 } 
 .movie_info{
   display: block;
 }
}
@media only screen and (min-width: 320px) and (max-width: 760px){
 #movies{
   display: block;      
 }
 
 }
</style>
  