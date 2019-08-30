<template>
  <div class="main">
 <Header />
  <div class="filter">
    <h3>Your Result</h3>
  
       
     
  </div>

  <div class="jumbotron">
        <h3>Search For Any Movie</h3>
        <form id="searchForm">
          <input type="search"  id="searchText" @keyup="fetchProducts(text)" v-model="text" placeholder="Search Movies...">
        </form>
  </div>

   <div class="film">
  <div id="movies" class="row">
    <div v-for="product in products" class="col-grid">
            <div class="well_box">
              <router-link :to="'/details/'+product.id+'/'+product.title"><a>
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
import header from '../components/header.vue'

  export default {
    name:"search",
    components: {
    'v-icon': Icon,
    "Header":header
  },
    data() {
      return {
           products: [],
           text:'',
      }
    },
      
      methods: {
        fetchProducts(text){
           {
              this.$http.get(`https://api.themoviedb.org/3/search/multi?query=${text}&api_key=400225a1886f38d9cf3c934d6a756c4d`).then((response) => {
              this.products = response.body.results;
               console.log(this.products);
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
/* search icon */
.jumbotron{
   position: relative;
   width: 100%;
   text-align: center;
}
.jumbotron h3{
   margin-bottom:1.5em; 
}
form {
  display: flex;
  width: 100%;
  justify-content: center;
  position: relative;
  margin-bottom:1.5em; 
}
form input[type=search] {
  border: solid 3px #fff;
  box-sizing: border-box;
  font-size: 2em;
  height: 2em;
  outline: solid #fc0 0;
  padding: 0.5em;
  transition: all 2s ease-in;
  width: 45vw;
  z-index: 9;
}
.cast{
   padding-right:0.5em; 
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
  