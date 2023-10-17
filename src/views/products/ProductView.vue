<template>
  <div class="products">
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
          <router-link to="/collection" class="component"
            >Collection</router-link
          >
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
    <div class="direct" v-if="page === 'product'">
      <span class="direct-text">
        <router-link to="/" class="component">Home</router-link>&nbsp; &nbsp;
        &nbsp;/ &nbsp; &nbsp; &nbsp;<router-link to="/product" class="component"
          >Product Listing</router-link
        ></span
      >
    </div>
    <div
      class="component viewproduct"
      @click="navigate('product')"
      v-if="isView"
    >
      <i class="fa-solid fa-angle-left"></i> Back to Product
    </div>
    <div class="product" v-if="page === 'product'">
      <div class="product-container">
        <div class="product-filter">
          <div class="product-filter__sec-1">
            <div class="filter-sec__1">
              <div class="text"><span>Filter Results</span></div>
              <div class="filter-side">
                <div class="filter">
                  <button
                    @click="filterProducts('rating')"
                    :style="{
                      backgroundColor: tags == 'rating' ? '#0787ef' : 'white',
                      color: tags == 'rating' ? 'white' : 'black',
                    }"
                    class="btnFilt"
                  >
                    {{ tags == "rating" ? "&#10003;" : "" }}
                  </button>
                  <span>High Rating</span>
                </div>
              </div>
            </div>
            <div class="filter-sec__2">
              <div class="text">Furniture</div>
              <div class="filter-side">
                <div class="filter">
                  <button
                    @click="filterProduct('room')"
                    :style="{
                      backgroundColor: tags == 'room' ? '#0787ef' : 'white',
                      color: tags == 'room' ? 'white' : 'black',
                    }"
                    class="btnFilt"
                  >
                    {{ tags == "room" ? "&#10003;" : "" }}
                  </button>
                  <span>Room</span>
                </div>
                <div class="filter">
                  <button
                    @click="filterProduct('sofa')"
                    :style="{
                      backgroundColor: tags == 'sofa' ? '#0787ef' : 'white',
                      color: tags == 'sofa' ? 'white' : 'black',
                    }"
                    class="btnFilt"
                  >
                    {{ tags == "sofa" ? "&#10003;" : "" }}
                  </button>
                  <span>Sofa</span>
                </div>
                <div class="filter">
                  <button
                    @click="filterProduct('table')"
                    :style="{
                      backgroundColor: tags == 'table' ? '#0787ef' : 'white',
                      color: tags == 'table' ? 'white' : 'black',
                    }"
                    class="btnFilt"
                  >
                    {{ tags == "table" ? "&#10003;" : "" }}
                  </button>
                  <span>Table</span>
                </div>
                <div class="filter">
                  <button
                    @click="filterProduct('package')"
                    :style="{
                      backgroundColor: tags == 'package' ? '#0787ef' : 'white',
                      color: tags == 'package' ? 'white' : 'black',
                    }"
                    class="btnFilt"
                  >
                    {{ tags == "package" ? "&#10003;" : "" }}
                  </button>
                  <span>Package</span>
                </div>
                <div class="filter">
                  <button
                    class="btnFilt"
                    @click="filterProduct('chair')"
                    :style="{
                      backgroundColor: tags == 'chair' ? '#0787ef' : 'white',
                      color: tags == 'chair' ? 'white' : 'black',
                    }"
                  >
                    {{ tags == "chair" ? "&#10003;" : "" }}
                  </button>
                  <span>Chair</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="product-list">
          <router-link
            v-for="test in filteredItems"
            :key="test.id"
            :to="{ name: 'ProductDetails', params: { id: test.id } }"
            v-if="isFilt"
            class="texter"
          >
            <div class="items-container" v-motion-slide-left>
              <div
                class="items-content items-image"
                :style="{ backgroundImage: `url(${test.image_link})` }"
              >
                <div class="discount">
                  <span>{{ test.discount }}</span>
                </div>
              </div>
              <div class="items-content items-info">
                <div class="items-infor">
                  <div class="items-information items-name">
                    {{ test.name }}
                  </div>
                  <div class="items-information items-icon">
                    <i class="fa-solid fa-bed"></i>
                    <i class="fa-solid fa-chair"></i>
                    <i class="fa-solid fa-couch"></i>
                  </div>
                  <div class="items-information items-rating">
                    Rating: {{ test.rating }}
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <div class="items-information items-price">
                    {{ test.price }}/month
                  </div>
                </div>
              </div>
            </div>
          </router-link>
          <router-link
            v-for="listt in list"
            :key="listt.id"
            v-else
            :to="{ name: 'ProductDetails', params: { id: listt.id } }"
            class="texter"
          >
            <div class="items-container">
              <div
                class="items-content items-image"
                :style="{ backgroundImage: `url(${listt.image_link})` }"
              >
                <div class="discount">
                  <span>{{ listt.discount }}</span>
                </div>
              </div>
              <div class="items-content items-info">
                <div class="items-infor">
                  <div class="items-information items-name">
                    {{ listt.name }}
                  </div>
                  <div class="items-information items-icon">
                    <i class="fa-solid fa-bed"></i>
                    <i class="fa-solid fa-chair"></i>
                    <i class="fa-solid fa-couch"></i>
                  </div>
                  <div class="items-information items-rating">
                    Rating: {{ listt.rating }}
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <div class="items-information items-price">
                    {{ listt.price }}/month
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
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
</template>
<script>
import HomeView from "@/views/HomeView.vue";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";
import { ref, onBeforeMount } from "vue";
export default {
  name: "ProductView",
  components: {
    HomeView,
  },
  setup() {
    const isView = ref(false);
    const page = ref("product");
    const navigate = (pages) => {
      page.value = pages;
      isView.value = !isView.value;
    };
    const cart = ref([]);

    const items = ref([]);
    const tests = ref([]);
    const error = ref(null);
    const filteredItems = ref([]);
    const list = ref([]);
    const isFilt = ref(false);
    const names = ref("");
    const isLogin = ref(true);

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
    const Logout = () => {
      firebase
        .auth()
        .signOut()
        .then(() => console.log("Sign out"))
        .catch((err) => alert(err.message));
    };
    const loads = async () => {
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
    const Loads = async () => {
      try {
        let data = await fetch("http://localhost:3000/pro");
        if (!data.ok) {
          throw Error("no data available");
        }
        list.value = await data.json();
        console.log(list.value);
      } catch (err) {
        error.value = err.message;
        console.log(error.value);
      }
    };
    Loads();
    loads();
    const tags = ref(null);
    const filterProduct = (tag) => {
      if (isFilt.value === tag) {
        isFilt.value = false;
        filteredItems.value = tests.value; // Reset the filtered items to all items.
        tags.value = null;
      } else {
        tags.value = tag;
        isFilt.value = tag;
        filteredItems.value = tests.value.filter((item) => {
          return item.tag === tag;
        });
        console.log(filteredItems.value);
      }
    };
    const filterProducts = (tag) => {
      if (tag === "rating") {
        if (isFilt.value === tag) {
          isFilt.value = false;
          filteredItems.value = tests.value; // Reset the filtered items to all items.
          tags.value = null;
        } else {
          tags.value = tag;
          isFilt.value = tag;
          filteredItems.value = tests.value.filter((item) => {
            return item.rating > 1000;
          });
          console.log(filteredItems.value);
        }
        // Assuming you have an array of products called "products"
      }
    };

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
      Delete,
      increaseQuantity,
      decreaseQuantity,
      updatePrice,
      isView,
      page,
      navigate,
      cart,
      items,
      error,
      filterProduct,
      tests,
      filteredItems,
      isFilt,
      list,
      tags,
      filterProducts,
      Logout,
      names,

      // slides,
    };
  },
};
</script>

<style lang="scss" scoped>
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
.direct {
  width: 100%;
  height: 100px;
  background-color: #f3f3f3;
  @include center-item();
  .direct-text {
    position: relative;
    left: -595px;
  }
}
.component {
  color: rgb(14, 173, 173);
  text-decoration: none;
}
.products {
  width: 100%;
  height: 1600px;
  .product {
    width: 100%;
    height: 1000px;

    @include center-item();
    .product-container {
      width: 87.2%;
      height: 90%;

      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      .product-filter {
        width: 22.124%;
        height: 70%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        color: $items-color;
        font-weight: bold;
        .product-filter__sec-1 {
          width: 100%;
          height: 75%;

          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          border: 0.5px solid #8e959a;
          .filter-sec__1 {
            width: 100%;
            height: 20%;

            border-bottom: 0.5px solid #8e959a;
            .text {
              width: 100%;
              height: 20%;
              background-color: #f3f3f3;
              text-indent: 10px;
              font-weight: bold;
              display: flex;

              text-align: justify;
              padding-top: 20px;
              span {
                position: relative;
                top: -10px;
                font-size: 17px;
              }
            }
            .filter-side {
              width: 100%;
              height: 60%;

              display: flex;
              flex-direction: column;
              justify-content: space-around;
              align-items: center;
              .filter {
                width: 90%;
                height: 30%;

                display: flex;
                justify-content: flex-start;
                align-items: center;
                button {
                  width: 25.1px;
                  height: 25.1px;
                  margin-right: 15px;
                  border-radius: 4px;
                  border: 0.5px solid #8e959a;
                  cursor: pointer;
                  font-weight: bold;
                }
              }
            }
          }
          .filter-sec__2 {
            width: 100%;
            height: 75%;

            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .text {
              width: 100%;
              height: 10%;

              text-indent: 10px;
              font-weight: bold;
              display: flex;
              align-items: center;
              font-size: 17px;
            }
            .filter-side {
              width: 100%;
              height: 90%;

              display: flex;
              flex-direction: column;
              justify-content: space-around;
              align-items: center;
              .filter {
                width: 90%;
                height: 18%;

                display: flex;
                justify-content: flex-start;
                align-items: center;
                button {
                  width: 25.1px;
                  height: 25.1px;
                  margin-right: 15px;
                  border-radius: 4px;
                  border: 0.5px solid #8e959a;
                  cursor: pointer;
                  font-weight: bold;
                }
              }
            }
          }
        }
        .product-filter__sec-2 {
          width: 100%;
          height: 20%;
        }
      }
      .product-list {
        width: 75%;
        height: 100%;

        padding-bottom: 400px;
        display: grid;
        grid-template-columns: repeat(3, 2fr);
        grid-template-rows: repeat(3, 2fr);
        gap: 40px;
        .texter {
          text-decoration: none;
        }
        .items-container {
          width: 300px;
          height: 400px;
          background-color: white;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          border-radius: 10px;
          box-shadow: 2px 2px 3px 0.54px #969595;

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
</style>
