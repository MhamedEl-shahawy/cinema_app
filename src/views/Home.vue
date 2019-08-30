<template>
  <div class="main">
   <Header />

  <div class="filter">
    <h3>Discover New Movies & TV Shows</h3>
    <div class="filter_box">
     <div class="box">
  <select  @change="fetchProducts(gener,years,sort_by)" v-model="gener">
    <option >Filter generes</option>
    <option  value="28">Action</option>
    <option  value="18">Drama</option>
    <option value="10752">War</option>
    <option value="80">Crime</option>
    <option value="878">Science Fiction</option>
    <option value="27">Horror</option>
  </select>
</div>
<div class="box">
  <select  @change="fetchProducts(gener,years,sort_by)" v-model="sort_by">
    <option>Sort By</option>
    <option  value="vote_average.desc">Rating Descending</option>
    <option value="vote_average.asc">Rating Ascending</option>
    <option value="release_date.desc">Release Date</option>
    <option value="popularity.desc">Popularity</option>
  </select>
</div> 
<div class="box">
  <select  @change="fetchProducts(gener,years,sort_by)" v-model="years">
    <option>Years</option>
    <option  value="2019">2019</option>
    <option value="2018">2018</option>
    <option value="2017">2017</option>
    <option value="2016">2016</option>
    <option value="2015">2015</option>
    <option value="2014">2014</option>
    <option value="2013">2013</option>
    <option value="2012">2012</option>
    <option value="2011">2011</option>
    <option value="2010">2010</option>
    <option value="2009">2009</option>
    <option value="2008">2008</option>
    <option value="2007">2007</option>
    <option value="2006">2006</option>
    <option value="2005">2005</option>
    <option value="2004">2004</option>
    <option value="2003">2003</option>
    <option value="2002">2002</option>
    <option value="2001">2001</option>
    <option value="2000">2000</option>
    <option value="1999">1999</option>
    <option value="1998">1998</option>
    <option value="1997">1997</option>
    <option value="1996">1996</option>
    <option value="1995">1995</option>
    <option value="1994">1994</option>
    <option value="1993">1993</option>

  </select>
</div>   
  
   </div>   
  </div>

 

   <div class="film">
  <div id="movies" class="row">
    <div v-for="product in products" class="col-grid">
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
    name:"home",
    components: {
    'v-icon': Icon,
    'Header':header
  },
    data() {
      return {
           products: [],
           gener:28,
           years:2019,
           sort_by:"popularity.desc"
      }
    },
      created: function(){
          this.fetchProducts(this.gener,this.years,this.sort_by);
      },
      methods: {
        fetchProducts(gener,year,sort){
           {

      this.$http.get(`https://api.themoviedb.org/3/discover/movie?api_key=400225a1886f38d9cf3c934d6a756c4d&year=${year}&sort_by=popularity.desc&with_genres=${gener}&sort_by=${sort}`).then((response) => {
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
   .filter_box{
   position:relative;
      display:inline-flex;
     margin-top:3em;
     margin-bottom:2em;

   }

.box{
   position:relative;
   margin-right:2em;

}
.box select {
  background-color: #0563af;
  color: white;
  padding: 12px;
  width: 250px;
  border: none;
  font-size: 20px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  -webkit-appearance: button;
  appearance: button;
  outline: none;
  overflow-y:scroll;
  z-index:99;

}

.box::before {
  content: "\f13a";
  font-family: FontAwesome;
  position: absolute;
  top: 0;
  right: 0;
  width: 20%;
  height: 100%;
  text-align: center;
  font-size: 28px;
  line-height: 45px;
  color: rgba(255, 255, 255, 0.5);
  background-color: rgba(255, 255, 255, 0.1);
  pointer-events: none;
}

.box:hover::before {
  color: rgba(255, 255, 255, 0.6);
  background-color: rgba(255, 255, 255, 0.2);
}

.box select option {
  padding: 30px;
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
  