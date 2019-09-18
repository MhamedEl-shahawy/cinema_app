import Vue from 'vue'
import Router from 'vue-router'

const Movies = resolve =>{
  require.ensure(['./views/Home.vue'],()=>{
      resolve(require('./views/Home.vue'));
  });
};
const Movies_popular = resolve =>{
  require.ensure(['./views/popular.vue'],()=>{
      resolve(require('./views/popular.vue'));
  });
};

const Movies_trend = resolve =>{
  require.ensure(['./views/trend.vue'],()=>{
      resolve(require('./views/trend.vue'));
  });
};

const Movies_top = resolve =>{
  require.ensure(['./views/top.vue'],()=>{
      resolve(require('./views/top.vue'));
  });
};

const Movies_upcoming = resolve =>{
  require.ensure(['./views/upcoming.vue'],()=>{
      resolve(require('./views/upcoming.vue'));
  });
};

const Movies_tv = resolve =>{
  require.ensure(['./views/tv.vue'],()=>{
      resolve(require('./views/tv.vue'));
  });
};


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Movies
    },
    {
      path: '/tv',
      name: 'tv',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:Movies_tv 
    },
       {
      path: '/trend',
      name: 'trend',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:Movies_trend 
     },
      {
      path: '/upcoming',
      name: 'upcoming',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:Movies_upcoming 

    },
     {
      path: '/popular',
      name: 'popular',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:Movies_popular
    },
     {
      path: '/top',
      name: 'top',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    component:Movies_top
    },
     {
      path: '/details/:id/:name',
      name: 'details',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/details.vue')
      }
    },
    {
      path: '/search',
      name: 'search',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/search.vue')
      }
    },
   
    {
      path: '/cast/:id',
      name: 'cast',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/cast.vue')
      }
    }

  ]
})
