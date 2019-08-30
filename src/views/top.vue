<template>
  <div class="main">
 <Header /> 
  <div class="filter">
    <h3>Top Rated Movies</h3>
  </div>

 

   
   <div class="film">
      <div id="movies" class="row">
        <div v-for="product in products[0]" class="col-grid">
            <div class="well_box">
              <router-link :to="'/details/'+product.id+'/'+product.title"><a>
               <div>
               <span>{{product.title}}</span>
              </div>
              <img :src="'https://image.tmdb.org/t/p/original'+product.poster_path">
              </a>
              </router-link>
            </div>
          </div>
  

        <div v-for="product in products[1]" class="col-grid">
            <div class="well_box">
              <router-link :to="'/details/'+product.id+'/'+product.title"><a>
               <div>
               <span>{{product.title}}</span>
              </div>
              <img :src="'https://image.tmdb.org/t/p/original'+product.poster_path">
              </a>
              </router-link>
            </div>
          </div>

          <div v-for="product in products[2]" class="col-grid">
            <div class="well_box">
              <router-link :to="'/details/'+product.id+'/'+product.title"><a>
               <div>
               <span>{{product.title}}</span>
              </div>
              <img :src="'https://image.tmdb.org/t/p/original'+product.poster_path">
              </a>
              </router-link>
            </div>
          </div>
      
          <div v-for="product in products[3]" class="col-grid">
            <div class="well_box">
              <router-link :to="'/details/'+product.id+'/'+product.title"><a>
               <div>
               <span>{{product.title}}</span>
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
import header from '../components/header.vue'

  export default {
    name:"top",
    components: {
    'v-icon': Icon,
    'Header':header
  },
    data() {
      return {
           products: []
      }
    },
      created: function(){
          this.fetchProducts();
          this.fetchProducts2();
          this.fetchProducts3();
          this.fetchProducts4();





      },
      methods: {
        fetchProducts(){
           {
              this.$http.get(`https://api.themoviedb.org/3/movie/top_rated?page=1&api_key=400225a1886f38d9cf3c934d6a756c4d`).then((response) => {
              this.products.push(response.body.results);
              });
              
           }
          
          },
           fetchProducts2(){
           {
              this.$http.get(`https://api.themoviedb.org/3/movie/top_rated?page=2&api_key=400225a1886f38d9cf3c934d6a756c4d`).then((response) => {
              this.products.push(response.body.results);
              });
              
           }
          
          },
           fetchProducts3(){
           {
              this.$http.get(`https://api.themoviedb.org/3/movie/top_rated?page=3&api_key=400225a1886f38d9cf3c934d6a756c4d`).then((response) => {
              this.products.push(response.body.results);
              });
              
           }
          
          },
             fetchProducts4(){
           {
              this.$http.get(`https://api.themoviedb.org/3/movie/top_rated?page=4&api_key=400225a1886f38d9cf3c934d6a756c4d`).then((response) => {
              this.products.push(response.body.results);
              });
              
           }
          
          }

        }
  }
</script>
<style lang="scss" scoped>
$width: 1em;
$bg: #201c29;
$color: #ab49de;

a{
   text-decoration: none;
   color:#fff;
   cursor: pointer;
}
.main{
   position:relative;
   width:100%;
   padding-left:2.3em;
   padding-right:2.3em;

}




 .filter{
    position:relative;
    width:100%;
    display: grid;
    grid-template-columns:2fr 1fr; 
  
    h3{
       color:#fff;
    }
}   

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


@media only screen and (min-width:761px) and (max-width: 900px){
  #movies{
   grid-template-columns:repeat(3,1fr);
   grid-gap:20px;  
 } 
}
@media only screen and (min-width: 320px) and (max-width: 760px){
 #movies{
   display: block;      
 }
 
 }
</style>
  