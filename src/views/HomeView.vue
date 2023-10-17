<template>
  <nav>
    <div class="container">
      <div class="label">
        <router-link to="/" class="component text1">Hae</router-link>
        <router-link to="/" class="component text2">rin's</router-link>
      </div>
      <input
        type="text"
        name=""
        id=""
        placeholder="Search for table , chair..."
        class="search"
        v-model="search"
        v-on:keydown="filtSearch"
      />

      <div class="nav-bar">
        <router-link to="/" class="component">Home</router-link>
        <router-link to="/product" class="component">Product</router-link>
        <router-link to="/contact" class="component">Contact</router-link>
        <router-link to="/collection" class="component">Collection</router-link>
      </div>

      <div to="/cart" class="component cart-view" @click="navigate('cart')">
        <i class="fa fa-shopping-cart"></i>
        <span class="cart_length">{{ cart.length }}</span>
      </div>

      <!-- <button class="login" @click="handleLogin"> -->
      <button class="login" v-if="isLogin">
        <router-link to="/login" class="login-router"
          >Login / Sign up</router-link
        >
      </button>
      <div class="log-out" v-else>
        <span>Welcome, {{ names }}</span>
        <button @click="Logout" class="login logout">Log out</button>
      </div>
    </div>
  </nav>

  <div class="introduce" v-if="page === 'product'">
    <div class="introduce-text">
      <div class="intro-text--1">Why Haerin's</div>
      <div class="intro-text--2">
        I'm super shy, super shy But wait a minute while I make you mine make
        you mine 떨리는 지금도 you're on my mind all the time I wanna tell
      </div>
      <button class="intro-text--3">Explore our Packages</button>
    </div>

    <div class="search-container" v-if="isSearch">
      <div v-for="test in filteredItems" :key="test.id" class="search-contents">
        <div class="search-content">
          <router-link
            :to="{ name: 'ProductDetails', params: { id: test.id } }"
            class="search-link"
            >{{ test.name }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="service-container" v-motion-fade v-if="page === 'product'">
    <div class="service">
      <div class="service-item">
        <div class="service-item--content service-item--logo">
          <i class="fa-solid fa-award"></i>
        </div>
        <div class="service-item--content service-item--text">
          Quality Products & Best Price
        </div>
      </div>
      <div class="service-item">
        <div class="service-item--content service-item--logo">
          <i class="fa-solid fa-cubes"></i>
        </div>
        <div class="service-item--content service-item--text">
          Easy Returns & Customization
        </div>
      </div>
      <div class="service-item">
        <div class="service-item--content service-item--logo">
          <i class="fa-solid fa-truck-fast"></i>
        </div>
        <div class="service-item--content service-item--text">
          Free Delivery, Installation & Maintenance
        </div>
      </div>
      <div class="service-item">
        <div class="service-item--content service-item--logo">
          <i class="fa-solid fa-headset"></i>
        </div>
        <div class="service-item--content service-item--text">
          Our Impressive Customer Support
        </div>
      </div>
    </div>
  </div>
  <div class="component viewproduct" @click="navigate('product')" v-if="isView">
    <i class="fa-solid fa-angle-left"></i>Back to Home page
  </div>
  <div class="list-container" v-motion-fade v-if="page === 'product'">
    <div class="list-items">
      <p>Best Selling Packages</p>

      <vueper-slides
        class="no-shadow nani1"
        :visible-slides="4"
        slide-multiple
        :gap="3"
        :slide-ratio="1 / 4"
        :dragging-distance="200"
        :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
        v-for="item in items"
        :key="item.id"
      >
        <vueper-slide v-for="(itemm, i) in item" :key="i">
          <template #content>
            <router-link
              :to="{
                name: 'ProductDetails',
                params: { id: itemm.id },
              }"
              class="component product"
            >
              <div class="items-container">
                <div
                  class="items-content items-image"
                  :style="{ backgroundImage: `url(${itemm.image_link})` }"
                >
                  <div class="discount">
                    <span>{{ itemm.discount }}</span>
                  </div>
                </div>
                <div class="items-content items-info">
                  <div class="items-infor">
                    <div class="items-information items-name">
                      {{ itemm.name }}
                    </div>
                    <div class="items-information items-icon">
                      <i class="fa-solid fa-bed"></i>
                      <i class="fa-solid fa-chair"></i>
                      <i class="fa-solid fa-couch"></i>
                    </div>
                    <div class="items-information items-rating">
                      Rating: {{ itemm.rating }}
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="items-information items-price">
                      $ {{ itemm.price }}/month
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </template>
        </vueper-slide>
      </vueper-slides>
    </div>
  </div>

  <div class="list-container" v-motion-fade-visible v-if="page === 'product'">
    <div class="list-items">
      <p>Most viewed furniture</p>
      <vueper-slides
        class="no-shadow nani1"
        :visible-slides="4"
        slide-multiple
        :gap="3"
        :slide-ratio="1 / 4"
        :dragging-distance="200"
        :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
        v-for="view in views"
        :key="view.id"
      >
        <vueper-slide v-for="(vieww, i) in view" :key="i">
          <template #content>
            <router-link
              :to="{ name: 'ProductDetails', params: { id: vieww.id } }"
              class="component product"
            >
              <div class="items-container">
                <div
                  class="items-content items-image"
                  :style="{ backgroundImage: `url(${vieww.image_link})` }"
                >
                  <div class="discount">
                    <span>{{ vieww.discount }}</span>
                  </div>
                </div>
                <div class="items-content items-info">
                  <div class="items-infor">
                    <div class="items-information items-name">
                      {{ vieww.name }}
                    </div>
                    <div class="items-information items-icon">
                      <i class="fa-solid fa-bed"></i>
                      <i class="fa-solid fa-chair"></i>
                      <i class="fa-solid fa-couch"></i>
                    </div>
                    <div class="items-information items-rating">
                      Rating: {{ vieww.rating }}
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="items-information items-price">
                      $ {{ vieww.price }}/month
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </template>
        </vueper-slide>
      </vueper-slides>
    </div>
  </div>
  <div
    class="list-container comment"
    v-motion-fade-visible
    v-if="page === 'product'"
  >
    <div class="list-items">
      <span class="comment-span">What people are saying about us</span>
      <vueper-slides
        class="no-shadow nani1"
        :visible-slides="3"
        slide-multiple
        :gap="3"
        :slide-ratio="1 / 3.5"
        :dragging-distance="200"
        :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
        v-for="comment in comments"
        :key="comment.id"
      >
        <vueper-slide v-for="(commentt, i) in comment" :key="i">
          <template #content>
            <div class="comment-container">
              <div
                class="avatar-comment"
                :style="{ backgroundImage: `url(${commentt.avatar})` }"
              >
                <span class="quote">&#x275D;</span>
              </div>
              <div class="comments">
                <div class="user-comment">
                  {{ commentt.comment }}
                </div>
              </div>
              <div class="comments info-comment">
                <div class="info-com">{{ commentt.name }}</div>
                <div class="info-com1">{{ commentt.country }}</div>
              </div>
            </div>
          </template>
        </vueper-slide>
      </vueper-slides>
    </div>
  </div>
  <div v-if="page === 'cart'" class="cart">
    <div class="cart_container">
      <div class="cart_info">
        <div class="info_side">
          <div class="all_items">
            <input type="checkbox" name="" id="" />
            <span>All Products</span>
          </div>
          <span class="price_quo">Price quotaiton</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Delete</span>
        </div>
      </div>
      <div class="cart_items">
        <div class="items_side" v-for="item in cart" :key="item.id">
          <div class="choose_item">
            <input type="checkbox" name="" id="" />
            <div
              class="item_image"
              :style="{ backgroundImage: `url(${item.image_link})` }"
            ></div>
            <div class="item_name">{{ item.name }}</div>
          </div>
          <span class="item_quo"> $ {{ item.price }}</span>
          <div class="item_quan">
            <button class="minus" @click="decreaseQuantity(item)">-</button>
            <span>{{ item.quantity }}</span>
            <button class="plus" @click="increaseQuantity(item)">+</button>
          </div>
          <span class="item_price">$ {{ item.price }}</span>
          <button @click="Delete(item)">Delete</button>
        </div>
      </div>
    </div>
  </div>
  <div class="information">
    <div class="information-container">
      <div class="infor-text1">
        About us | FAQ's | Term & Conditions | Privacy Policy
      </div>
      <div class="infor-text2">
        <div class="phone"><i class="fa-solid fa-phone"></i> +8542 219 725</div>
        <div class="phone">
          <i class="fa-solid fa-envelope"></i>xuankhuong1402@gmail.com
        </div>
      </div>
      <div class="infor-text3">
        <div>Follow us</div>
        <div class="infor-social">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin"></i>
        </div>
      </div>
    </div>
  </div>
  <div class="copyright">
    <div class="copyright-text">
      Copyright &copy; 2023 Haerin's Pvt. Ltd.. All rights reserved
    </div>
  </div>
  <router-view />
</template>

<script>
import { computed, onBeforeMount, ref } from "vue";
// @ is an alias to /src
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import ProductDetails from "../views/products/ProductDetails.vue";

import "firebase/compat/auth";
import firebase from "firebase/compat/app";

export default {
  name: "HomeView",
  components: { VueperSlides, VueperSlide, ProductDetails },

  setup() {
    const isView = ref(false);
    const page = ref("product");
    const navigate = (pages) => {
      page.value = pages;
      isView.value = !isView.value;
    };
    const cart = ref([]);
    const isSearch = ref(false);
    const isLogin = ref(true);
    const handleLogin = () => {
      isLogin.value = false;
    };

    const names = ref("");
    onBeforeMount(() => {
      const user = firebase.auth().currentUser;
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        cart.value = JSON.parse(savedCart);
      }
      if (user) {
        isLogin.value = false;
        names.value = user.email.split("@")[0];
      }
    });

    const items = ref([]);
    const views = ref([]);
    const comments = ref([]);
    const tests = ref([]);
    const error = ref(null);
    const search = ref("");

    const Logout = () => {
      firebase
        .auth()
        .signOut()
        .then(() => console.log("Sign out"))
        .catch((err) => alert(err.message));
    };

    const loadd = async () => {
      try {
        let data = await fetch("http://localhost:3000/tests");
        if (!data.ok) {
          throw Error("no data available");
        }
        tests.value = await data.json();
        console.log(tests.value);
      } catch (err) {
        error.value = err.message;
        console.log(error.value);
      }
    };
    const filteredItems = ref([]);
    loadd();
    const filtSearch = () => {
      if (search.value) {
        filteredItems.value = tests.value.filter(
          (test) => test.tag.includes(search.value), // Add a comma here
          (test) => test.name.includes(search.value), // Add a comma here

          (isSearch.value = true)
        );
      } else {
        isSearch.value = false;
      }
    };
    const load = async () => {
      try {
        let data = await fetch("http://localhost:3000/items");
        if (!data.ok) {
          throw Error("no data available");
        }
        items.value = await data.json();
        console.log(items.value);
      } catch (err) {
        error.value = err.message;
        console.log(error.value);
      }
    };
    const loadView = async () => {
      try {
        let data = await fetch("http://localhost:3000/views");
        if (!data.ok) {
          throw Error("no data available");
        }
        views.value = await data.json();
        console.log(views.value);
      } catch (err) {
        error.value = err.message;
        console.log(error.value);
      }
    };
    const loadComment = async () => {
      try {
        let data = await fetch("http://localhost:3000/comments");
        if (!data.ok) {
          throw Error("no data available");
        }
        comments.value = await data.json();
        console.log(comments.value);
      } catch (err) {
        error.value = err.message;
        console.log(error.value);
      }
    };
    load();
    loadView();
    loadComment();
    const Delete = (item) => {
      const index = cart.value.findIndex((cartItem) => cartItem.id === item.id);
      if (index !== -1) {
        cart.value.splice(index, 1);
        // Lưu lại giỏ hàng sau khi xóa vào LocalStorage (nếu muốn)
        localStorage.setItem("cart", JSON.stringify(cart.value));
      }
    };
    const increaseQuantity = (item) => {
      item.quantity++;
      updatePrice(item);
    };

    const decreaseQuantity = (item) => {
      if (item.quantity > 1) {
        item.quantity--;
        updatePrice(item);
      }
    };

    const updatePrice = (item) => {
      item.price = item.unitPrice * item.quantity;
    };
    return {
      page,
      navigate,
      cart,
      isLogin,
      handleLogin,
      items,
      views,
      comments,
      error,
      search,
      filtSearch,
      filteredItems,
      isSearch,
      Logout,
      names,
      isView,
      Delete,
      increaseQuantity,
      decreaseQuantity,
      updatePrice,
      // slides,
    };
  },
};
</script>
<style lang="scss">
@mixin center-item {
  display: flex;
  justify-content: center;
  align-items: center;
}
$text-color: rgb(144, 143, 143);
$items-color: #474747;
$content-color: #e8554e;
$content-color2: #004b80;
$font: "Lato";
///////////products

body {
  padding: 0;
  margin: 0;

  font-family: "Lato", sans-serif;
  letter-spacing: 0.5px;
}
nav {
  width: 100%;
  height: 80px;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 5px 1px rgb(45, 44, 44);

  .container {
    width: 95%;
    height: 90%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;

    .label {
      width: 8%;
      height: 60%;
      font-size: 42px;
      font-weight: bold;
      position: relative;
      top: -5px;
      @include center-item();
      .text1 {
        color: $content-color2;
        text-decoration: none;
      }
      .text2 {
        color: $content-color;
        text-decoration: none;
      }
    }
    .search {
      width: 24%;
      height: 46%;
      border-radius: 5px;
      text-indent: 7px;
      border: 1px solid $text-color;
      &::-webkit-input-placeholder {
        text-indent: 7px;
        font-size: 12px;
        color: $text-color;
        font-family: $font;
      }
    }

    .nav-bar {
      width: 35%;
      height: 60%;

      display: flex;
      justify-content: space-around;
      align-items: center;
      .component {
        width: 23%;
        height: 90%;
        color: black;
        @include center-item;
        text-decoration: none;
        font-size: 17px;
        font-weight: bold;
        cursor: pointer;
      }
      .router-link-active {
        background-color: rgba($text-color, 0.2);
        border-radius: 5px;
        transition: all 0.4s ease-in-out;
      }
    }
    .cart_length {
      color: white;
      font-size: 10px;
      padding: 2px 4px;
      background-color: #e8554e;
      border-radius: 50%;
      position: relative;
      top: -18.5px;
      left: -8px;
    }
    .fa-shopping-cart {
      font-size: 25px;
      color: $text-color;
      position: relative;
      right: -0px;
      cursor: pointer;
    }

    .login {
      font-family: $font;
      font-size: 15.5px;
      width: 10%;
      height: 55%;
      color: white;
      font-weight: 550;
      background-color: $content-color2;
      border: none;
      border-radius: 5px;
      cursor: pointer;

      .login-router {
        text-decoration: none;
        color: white;
      }
    }
    .logout {
      width: 30%;
      height: 80%;
    }
    .log-out {
      width: 20%;
      height: 60%;

      display: flex;
      justify-content: space-around;
      align-items: center;
      span {
        color: $items-color;
        font-weight: bold;
        font-size: 18px;
      }
    }
  }
}

.introduce {
  width: 100%;
  height: 340px;
  background: url("../assets/b3.jpg");
  background-position: center 70%;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  z-index: 1;
  .search-container {
    position: relative;
    top: 58px;
    left: 235px;
    width: 340.462px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
    .search-contents {
      width: 100%;
      height: 100%;
      background-color: white;
    }
    .search-content {
      width: 100%;
      height: 100%;
      cursor: pointer;

      display: flex;
      align-items: flex-start;
      justify-content: center;
      text-indent: 10px;
      .search-link {
        width: 100%;
        height: 30%;
        text-decoration: none;
        color: $items-color;
      }
    }
  }
  .introduce-text {
    width: 400px;
    height: 74%;
    background-color: white;
    border-radius: 5px;
    position: absolute;
    left: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .intro-text--1 {
      width: 35%;
      height: 14%;
      background-color: $content-color;
      font-size: 14px;
      position: relative;
      left: -130px;
      border-top-left-radius: 5px;
      border-bottom-right-radius: 10px;
      @include center-item();
      color: whitesmoke;
    }
    .intro-text--2 {
      width: 80%;
      height: 67%;
      font-size: 18px;
      position: relative;
      top: -8px;

      color: #515151;
      @include center-item();
    }
    .intro-text--3 {
      font-family: $font;
      font-size: 14px;
      width: 50%;
      height: 17%;
      position: relative;
      left: -61px;
      top: -20px;
      background: none;
      font-weight: bold;
      border: 3px solid $content-color2;
      color: $content-color2;
      border-radius: 5px;
    }
  }
}
.service-container {
  width: 100%;
  height: 200px;
  border-bottom: 1px solid black;
  position: relative;
  z-index: 0;
  @include center-item();
  .service {
    width: 89%;
    height: 90%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    .service-item {
      width: 21%;
      height: 85%;
      background-color: #f9f9f9;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      box-shadow: 0px 4px 5px 1px #cdcccc;
    }
    .service-item--content {
      width: 90%;
      height: 30%;

      @include center-item();
    }
    .service-item--logo {
      color: $content-color;
      font-size: 45px;
      position: relative;
      top: 10px;
    }
    .service-item--text {
      width: 70%;
      font-size: 15px;
      font-weight: bold;
      text-align: center;
      color: $items-color;
    }
  }
}
.viewproduct {
  font-size: 20px;
  cursor: pointer;
  position: relative;
  top: 30.212px;
  left: 35.2px;
  z-index: 4;
  color: #2596be;
}
.cart {
  width: 100%;
  height: 1500px;
  background-color: #f3f3f3;
  position: relative;
  top: 50px;
  @include center-item();
  .cart_container {
    width: 80%;
    height: 90%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .cart_info {
      width: 100%;
      height: 60px;
      background-color: #fff;
      @include center-item();
      .info_side {
        width: 90%;
        height: 80%;

        display: flex;
        justify-content: space-between;
        align-items: center;
        color: $items-color;
        font-weight: bold;
        .all_items {
          width: 20%;
          input[type="checkbox"] {
            transform: scale(1.5);
            margin-right: 15px;
          }
        }
      }
    }
    .cart_items {
      width: 100%;
      height: 93.2%;
      background-color: #f3f3f3;
      display: flex;
      flex-direction: column;
      align-items: center;
      .items_side {
        width: 90%;
        height: 130.12px;
        box-shadow: 2px 2px 4px 0px grey;
        padding: 0px 60px;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: white;
        .choose_item {
          width: 320px;
          display: flex;
          justify-content: space-between;
          align-items: center;

          input[type="checkbox"] {
            transform: scale(1.5);
          }
          .item_image {
            width: 100px;
            height: 100px;
            background-size: cover;
            background-position: center;
          }
          .item_name {
            width: 170px;
          }
        }
        .item_quo {
          position: relative;
          left: -75px;
        }
        .item_quan {
          position: relative;
          left: -17px;
          .minus {
            width: 20px;
            height: 20px;
            position: relative;
            left: 20px;
          }
          span {
            position: relative;
            left: 30px;
          }
          .plus {
            width: 20px;
            height: 20px;
            position: relative;
            left: 40px;
          }
        }
        .item_price {
          position: relative;
          left: 30px;
          color: #e8554e;
        }
        button {
          border: none;

          width: 80px;
          height: 30px;
          border-radius: 5px;
          background-color: #e8554e;
          cursor: pointer;
          font-weight: bold;
          font-family: $font;
          color: white;
          position: relative;
          left: 15px;
        }
      }
    }
  }
}
.list-container {
  width: 100%;
  height: 480px;
  @include center-item();
  .list-items {
    width: 99.2%;
    height: 98%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    p {
      font-weight: bolder;
      font-size: 35px;
      position: relative;
      left: -492px;
      color: $items-color;
    }
    .vueperslides {
      width: 100%;
      @include center-item();
      flex-direction: column;
    }
    .vueperslides__inner {
      width: 90%;
      height: 95%;
      .vueperslides__arrow {
        width: 100px;
      }
      svg {
        width: 58px;
        height: 58px;
        font-size: 15px;
        font-weight: bold;
        position: relative;
        top: -7.5px;
        background-color: white;
        border-radius: 50%;
        box-shadow: 0px 4px 5px 1px #cdcccc;
        color: $text-color;
      }
    }
    .vueperslides__track {
      height: 98%;

      cursor: pointer;
      width: 100%;
      .vueperslides__track-inner {
        width: 95%;
        height: 98.5%;
      }
      .vueperslide {
        border-radius: 10px;
        border-left: 1px solid $items-color;
        box-shadow: 2px 2px 3px 0.54px #969595;
        .items-container {
          width: 100%;
          height: 100%;
          background-color: white;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          border-radius: 10px;

          .items-content {
            width: 100%;
            height: 50%;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
          }
          .items-info {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            .items-infor {
              width: 90%;
              height: 85%;

              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: flex-start;
            }
            .items-information {
              width: 90%;
              height: 23.1%;
              text-align: left;

              display: flex;
              align-items: center;
            }
            .items-name {
              font-size: 17px;
              color: $items-color;
              font-weight: bold;
            }
            .items-icon {
              font-size: 18px;
              color: $text-color;
              position: relative;
              font-weight: bold;
              left: 2px;
              top: 5px;
              width: 40%;
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
            .items-rating {
              color: $text-color;
              display: flex;
              align-items: center;
              justify-content: flex-start;
              width: 60%;
              font-size: 16px;
              i {
                margin-left: 5px;
                color: $content-color;
                font-size: 13.1px;
              }
            }
            .items-price {
              color: $items-color;
              font-size: 16px;
              font-weight: bold;
              position: relative;
              left: 2px;
              top: -5px;
            }
          }
          .items-image {
            background-size: cover;
            background-position: center 65%;
            background-repeat: no-repeat;
            .discount {
              display: flex;
              justify-content: flex-start;

              span {
                padding: 5px 15px;
                background-color: #f9ab4c;
                clip-path: polygon(82% 0, 100% 50%, 82% 100%, 0 100%, 0 0);
                font-size: 13.2px;
                font-weight: bold;
                color: $items-color;
                position: relative;
                top: 20px;
              }
            }
          }
        }
      }
    }
  }
}
.comment {
  margin-top: 70px;
  .comment-span {
    font-size: 35px;
    font-weight: bold;
    margin-bottom: 30px;
  }
  .comment-container {
    width: 100%;
    height: 100%;
    border-top: 1px solid black;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .avatar-comment {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center 1.2%;
      position: relative;
      top: 10px;
      .quote {
        position: relative;
        left: -18px;
        top: -35px;
        font-size: 80px;
        color: $content-color;
      }
    }
    .comments {
      width: 80%;
      height: 42%;
      font-weight: 300;
      color: $items-color;

      @include center-item();
      font-size: 17px;
      text-align: center;
    }
    .info-comment {
      width: 80%;
      height: 10%;
      position: relative;

      top: -10px;
      flex-direction: column;
      font-size: 15px;
      .info-com1 {
        color: $content-color;
        font-size: 12px;
      }
    }
  }
}
.information {
  width: 100%;
  height: 60px;
  margin-top: 10px;
  background-color: #f9f9f9;
  @include center-item();
  .information-container {
    width: 89%;
    height: 90%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    .infor-text1 {
      width: 30%;
      height: 90%;
      font-size: 15px;
      @include center-item();
      justify-content: flex-start;
    }
    .infor-text2 {
      width: 45%;
      height: 90%;
      font-size: 15px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .phone {
        width: 45%;
        height: 80%;
        box-shadow: 1px 1px 5px 1px #e0dede;
        border-radius: 5px;
        @include center-item();
        i {
          margin-right: 7px;
        }
      }
    }
    .infor-text3 {
      width: 15%;
      height: 90%;
      font-size: 15px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      color: $items-color;
      letter-spacing: 1.2px;
      .infor-social {
        width: 50%;
        height: 90%;

        display: flex;
        align-items: center;
        justify-content: space-around;
        i {
          font-size: 25px;
        }
        .fa-facebook {
          color: $content-color2;
        }
        .fa-instagram {
          color: white;
          font-size: 27px;
          border-radius: 5px;
          background: rgb(131, 58, 180);
          background: linear-gradient(
            90deg,
            rgba(131, 58, 180, 1) 0%,
            rgba(253, 29, 29, 1) 50%,
            rgba(252, 176, 69, 1) 100%
          );
        }
        .fa-linkedin {
          color: #2596be;
          font-size: 27px;
        }
      }
    }
  }
}
.copyright {
  width: 100%;
  height: 60px;
  @include center-item();
  color: $text-color;
  font-size: 12px;
}
.product {
  text-decoration: none;
}
</style>
