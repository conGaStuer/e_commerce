import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductView from "../views/products/ProductView.vue";
import ProductDetails from "../views/products/ProductDetails.vue";
import ContactView from "../views/ContactView.vue";
import CollectionView from "../views/CollectionView.vue";
import CartView from "../views/CartView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    props: true,
  },

  {
    path: "/product",
    name: "product",
    component: ProductView,
    props: true,
  },
  {
    path: "/product/:id",
    name: "ProductDetails",
    component: ProductDetails,
    props: true,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/collection",
    name: "collection",
    component: CollectionView,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },

  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
