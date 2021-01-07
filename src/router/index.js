import Vue from "vue";
import VueRouter from "vue-router";
import Blogs from "../views/Blogs";
import Education from "../views/Education";
import Experience from "../views/Experience";
import Login from "../views/Login";
import News from "../views/News";
import Profile from "../views/Profile";
import Projects from "../views/Projects";
import Register from "../views/Register";
import Services from "../views/Services";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Profile
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: Blogs
  },
  {
    path: "/education",
    name: "Education",
    component: Education
  },
  {
    path: "/experience",
    name: "Experience",
    component: Experience
  },
  {
    path: "/news",
    name: "News",
    component: News
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/services",
    name: "Services",
    component: Services
  }
];

const router = new VueRouter({
  routes
});

export default router;
