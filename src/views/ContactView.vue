<template>
  <div class="contact">
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
    <div
      class="component viewproduct"
      @click="navigate('product')"
      v-if="isView"
    >
      <i class="fa-solid fa-angle-left"></i> Back to Contact Page
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
    <div class="side-1" v-if="page === 'product'">
      <div class="side side_1">
        <p v-motion-slide-bottom>TIME TO MEET YOUR</p>
        <h3 v-motion-slide-bottom>NEW</h3>
        <span>_</span>
        <h5>
          Finding the perfect place to call home can be hard. Our team of
          creatives and specialists makes real estate easy.
        </h5>
      </div>
      <div v-motion-fade class="side side_2">
        <img src="../assets/STAR.svg" alt="" v-motion-fade />
        <span v-motion-slide-bottom>ITEMS</span>
      </div>
    </div>
    <div class="side-2" v-if="page === 'product'">
      <div class="side-2__container">
        <div class="content-1">
          <p>WHAT WE <br />OFFER</p>
          <span>_</span>
        </div>
        <div class="content-2">
          <div class="content_items" v-motion-slide-bottom :delay="200">
            <img src="../assets/STAR.svg" alt="" />
            <div class="content_text">
              <div>EXPERIENCED TEAM</div>
              <span>
                Each of us is a master of our craft – we've worked a number of
                years in our field and each have passion and creative vision for
                every project we put our hands on.
              </span>
            </div>
          </div>
          <div class="content_items" v-motion-slide-bottom :delay="400">
            <img src="../assets/STAR.svg" alt="" />
            <div class="content_text">
              <div>QUALITY TO DIE FOR</div>
              <span>
                We pay a lot of attention to each and every detail, because we
                know that we are in charge of creating somebody's safe haven. We
                partner up with the best craftsmen to ensure our famed quality.
              </span>
            </div>
          </div>
          <div class="content_items" v-motion-slide-bottom :delay="600">
            <img src="../assets/STAR.svg" alt="" />
            <div class="content_text">
              <div>VISIONARIES OF THE FUTURE</div>
              <span>
                We're not scared to go beyond the horizon. As the visionaries of
                tomorrow, we won't say no to experimentation, unusual materials,
                or unlikely combinations.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="side-3" v-if="page === 'product'">
      <div class="side-3__container">
        <div class="side-3__text">
          <div class="side-3__text--1">
            <p>MEET OUR TEAM</p>
            <h5>A COLLECTIVE, THAT MAKES DREAMS COME TRUE</h5>
            <span
              >Our strength lies in our individuality. Set up by Esther Bryce,
              Presson's team strives to bring in the best talent in various
              fields, from architecture to interior design and sales.
            </span>
          </div>
          <span class="underline">_</span>
        </div>
        <div class="side-3__personnel">
          <div class="personnel">
            <img src="../assets/per1.webp" alt="" />
            <p>TRA XUAN</p>
            <span>Founder • Interior designer</span>
          </div>
          <div class="personnel">
            <img src="../assets/per2.webp" alt="" />
            <p>KHUONG TRAN</p>
            <span>CEO</span>
          </div>
          <div class="personnel">
            <img src="../assets/per3.webp" alt="" />
            <p>XUAN KHUONG</p>
            <span>SEO</span>
          </div>
          <div class="personnel">
            <img src="../assets/per4.webp" alt="" />
            <p>KHUONG TRA</p>
            <span>CFO</span>
          </div>
        </div>
      </div>
    </div>
    <div class="side-4" v-motion-fade v-if="page === 'product'">
      <div class="side-4__container">
        <div class="side-3__text">
          <div class="side-3__text--1">
            <p>CONTACT US</p>
            <h5>A COLLECTIVE, THAT MAKES DREAMS COME TRUE</h5>
            <span
              >If you're interested in hearing more about the way we work, have
              a business proposal, or are interested in making a purchase, we'd
              love to hear from you.
            </span>
          </div>
          <span class="underline">_</span>
        </div>
        <form action="" @submit.prevent="Submit">
          <div>Names*</div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Your name"
            v-model="name"
          />
          <div>Last name*</div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Your last name"
            v-model="last_name"
          />
          <div>Your email*</div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Your email"
            v-model="email"
          />
          <div>Messages*</div>
          <textarea
            placeholder="Enter your message"
            v-model="message"
          ></textarea>
          <button>SUBMIT</button>
        </form>
      </div>
    </div>

    <div class="information">
      <div class="information-container">
        <div class="infor-text1">
          About us | FAQ's | Term & Conditions | Privacy Policy
        </div>
        <div class="infor-text2">
          <div class="phone">
            <i class="fa-solid fa-phone"></i> +8542 219 725
          </div>
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
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";
export default {
  name: "ContactView",
  components: {},
  setup() {
    const isView = ref(false);
    const page = ref("product");
    const navigate = (pages) => {
      page.value = pages;
      isView.value = !isView.value;
    };
    const isLogin = ref(true);
    const names = ref("");
    const cart = ref([]);
    const name = ref("");
    const last_name = ref("");
    const email = ref("");
    const message = ref("");

    const Submit = () => {
      name.value = "";
      last_name.value = "";
      email.value = "";
      message.value = "";
      alert("Your contact was sent...");
    };
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

    const handleLogin = () => {
      isLogin.value = false;
    };
    const Logout = () => {
      firebase
        .auth()
        .signOut()
        .then(() => console.log("Sign out"))
        .catch((err) => alert(err.message));
    };

    return {
      handleLogin,
      Logout,
      Delete,
      increaseQuantity,
      decreaseQuantity,
      updatePrice,
      isView,
      page,
      navigate,
      cart,
      isLogin,
      names,
      name,
      last_name,
      email,
      message,
      Submit,
      isView,
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
  margin-bottom: 0px;
}
.contact {
  width: 100%;
  height: auto;
}
.side-1 {
  color: #474747;
  width: 1100px;
  height: 500px;
  background-color: #004b80;
  margin: 0 auto;
  position: relative;
  top: 80px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  .side {
    width: 50%;
    height: 100%;
    background-color: #f3f3f3;
  }
  .side_1 {
    p {
      font-size: 35px;
      font-weight: bold;
      margin: 0;
      padding: 0;
      position: relative;
      top: 120px;
      left: 100px;
    }
    h3 {
      font-size: 150px;
      font-weight: bold;
      margin: 0;
      padding: 0;
      position: relative;
      top: 120px;
      left: 100px;
    }
    span {
      font-size: 190px;
      font-weight: bold;
      position: relative;
      top: -20px;
      left: 100px;
    }
    h5 {
      font-weight: lighter;
      font-size: 11px;
      position: relative;
      top: -20px;
      left: 100px;
      width: 400px;
    }
  }
  .side_2 {
    background-size: cover;
    background-position: right 20%;
    background-image: url(../assets/b3.jpg);
    img {
      position: absolute;
      top: -50px;
      right: -90px;
    }
    span {
      font-size: 150px;
      font-weight: bold;
      position: relative;
      top: 160px;
      left: -50px;
    }
  }
}
.side-2 {
  width: 100%;
  height: 600px;
  background-color: #d2c7b4;
  position: relative;
  top: 100px;
  color: #262525;
  @include center-item();
  .side-2__container {
    width: 60%;
    height: 70%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    .content-1 {
      width: 40%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      p {
        font-size: 50px;
        font-weight: bold;
        letter-spacing: 1px;
        position: relative;
        top: -40px;
      }
      span {
        font-size: 150px;
        font-weight: bold;
      }
    }
    .content-2 {
      width: 60%;
      height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .content_items {
        width: 100%;
        height: 30%;

        display: flex;
        justify-content: space-between;
        align-items: center;

        .content_text {
          width: 80%;
          height: 100%;
          text-align: justify;
          position: relative;
          top: 20.25px;
          left: -10px;
          div {
            font-weight: bold;
            margin-bottom: 5px;
          }
          span {
            font-size: 10px;
          }
        }
      }
    }
  }
}
.viewproduct {
  top: 30px;
}
.side-3 {
  width: 100%;
  height: 700px;

  position: relative;
  top: 100px;
  @include center-item();
  .side-3__container {
    width: 60%;
    height: 85%;

    display: flex;
    .side-3__text {
      width: 37%;
      height: 100%;

      .side-3__text--1 {
        width: 95%;
        height: 35%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: $items-color;
        p {
          font-size: 40px;
          font-weight: bold;
          margin: 0;
          padding: 0;
          letter-spacing: 5px;
        }
        h5 {
          font-size: 12px;
          margin: 0;
          padding: 0;
          font-weight: lighter;
        }
        span {
          font-size: 10px;
          width: 80%;
        }
      }
      .underline {
        font-size: 150px;
        position: relative;
        top: 220px;
      }
    }
    .side-3__personnel {
      width: 65%;
      height: 100%;

      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      gap: 10px;
      .personnel {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: $items-color;
        img {
          width: 86%;
          height: 80%;
        }
        p {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 5%;
          font-weight: bold;
        }
        span {
          width: 100%;
          height: 8%;
          font-size: 10px;
        }
      }
    }
  }
}
.side-4 {
  width: 100%;
  height: 600px;
  position: relative;
  top: 100px;
  background-color: #d2c7b4;
  color: $items-color;
  @include center-item();
  .side-4__container {
    width: 60%;
    height: 80%;

    display: flex;
    .side-3__text {
      width: 37%;
      height: 100%;

      .side-3__text--1 {
        width: 95%;
        height: 35%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: $items-color;
        p {
          font-size: 40px;
          font-weight: bold;
          margin: 0;
          padding: 0;
          letter-spacing: 5px;
        }
        h5 {
          font-size: 12px;
          margin: 0;
          padding: 0;
          font-weight: lighter;
        }
        span {
          font-size: 10px;
          width: 80%;
        }
      }
      .underline {
        font-size: 150px;
        position: relative;
        top: 140px;
      }
    }
    form {
      width: 63%;
      height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-size: 12px;
      div {
        position: relative;
        top: 10px;
        left: 50px;
        font-family: $font;
      }
      input {
        width: 80%;
        height: 8%;
        position: relative;
        font-family: $font;
        left: 50px;
        text-indent: 10px;
        &::placeholder {
          font-size: 10px;
          text-indent: 10px;
        }
        border: none;
      }
      textarea {
        width: 80%;
        height: 30%;
        position: relative;
        font-family: $font;
        left: 50px;
        color: #1f1e1e;
        border: none;
        text-indent: 10px;
        &::placeholder {
          position: relative;
          top: 5px;
          font-size: 10px;
          text-indent: 10px;
        }
      }
      button {
        width: 170px;
        height: 35px;
        background-color: #262525;
        color: #f3f3f3;
        border: none;
        position: relative;
        right: -330px;
        cursor: pointer;
        font-weight: bold;
        font-family: $font;
      }
    }
  }
}
.information,
.copyright {
  position: relative;
  top: 100px;
}
</style>
