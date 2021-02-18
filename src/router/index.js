import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    components: {
      default: Home,
      user: User
    },
    props: {
      default: { nameprop: 'Routing in Vue.js' },
      user: { nameprop: 'Jack' }
    }
  },
  {
    path: "/about",
    name: "About",
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/frontend",
    name: "Frontend",
    props: { // <-- props as a data
      greetings: {
        text: "Welcome"
      }
    },
    component: () =>
      import(/* webpackChunkName: "frontend" */ "../views/Frontend.vue")
  },
  {
    path: "/backend",
    name: "Backend",
    // props: true,
    props: (route) => { // <-- props as a Function
      const backendText = "/backend";
      return { backendText: backendText === route.path };
    },
    component: () =>
      import(/* webpackChunkName: "backend" */ "../views/Backend.vue")
  },
  {
    path: "/course/:cname",
    name: "CourseDetails",
    props: true, // <-- props as a Boolean
    component: () =>
      import(/* webpackChunkName: "course" */ "../views/Course.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "my-router-active-class",
  routes
});

export default router;
