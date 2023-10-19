<template>
  <div class="isAdd" v-if="isAdd">
    <i class="fa-solid fa-circle-check"></i>
    <p>The product has been added to the cart.</p>
  </div>
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
  <div class="direct">
    <span class="direct-text">
      <router-link to="/" class="component">Home</router-link>&nbsp; &nbsp;
      &nbsp;/ &nbsp; &nbsp; &nbsp;<router-link to="/product" class="component"
        >Product Listing</router-link
      ></span
    >
  </div>
  <div class="component viewproduct" @click="navigate('product')" v-if="isView">
    <i class="fa-solid fa-angle-left"></i> View Product Details
  </div>
  <div class="product-info sr-reveal" v-if="page === 'product'">
    <div class="product-info__container">
      <div class="section-1">
        <div class="list-1">
          <vueper-slides
            ref="vueperslides1"
            :touchable="false"
            fade
            :autoplay="false"
            :bullets="false"
            @slide="
              $refs.vueperslides2.goToSlide($event.currentSlide.index, {
                emit: false,
              })
            "
            fixed-height="400px"
          >
            <vueper-slide
              v-for="(slide, i) in slides"
              :key="i"
              :image="slide.image"
            >
              <template #content>
                <div
                  v-for="test in tests.filter(
                    (test) => test.id == `${$route.params.id}`
                  )"
                  :key="test.id"
                  v-if="isDisplay"
                  @mouseover="noneDisplay"
                >
                  <div
                    :style="{ backgroundImage: `url(${test.image_link})` }"
                    class="test"
                  ></div>
                </div>
              </template>
            </vueper-slide>
          </vueper-slides>
        </div>

        <div class="list-2">
          <vueper-slides
            class="no-shadow thumbnails list-2"
            ref="vueperslides2"
            @slide="
              $refs.vueperslides1.goToSlide($event.currentSlide.index, {
                emit: false,
              })
            "
            :visible-slides="slides.length"
            fixed-height="75px"
            :bullets="false"
            :touchable="false"
            :gap="2.5"
            :arrows="false"
          >
            <vueper-slide
              v-for="(slide, i) in slides"
              :key="i"
              :image="slide.image"
              @click="$refs.vueperslides2.goToSlide(i)"
            >
            </vueper-slide>
          </vueper-slides>
        </div>
      </div>
      <div class="section-2">
        <div v-for="item in items" :key="item.id" class="info-items">
          <div
            v-for="itemm in item.filter(
              (itemm) => itemm.id == `${$route.params.id}`
            )"
            :key="itemm.id"
            class="info-items__container"
          >
            <div class="into-name">
              <p>{{ itemm.name }}</p>
              <span
                ><i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                4.0 ( {{ itemm.rating }} )
              </span>
            </div>
            <div class="descrip">
              "A soft and inviting sofa is the perfect place to relax and unwind
              after a long day. Look for a sofa that is made from high-quality
              materials and has a comfortable seating depth. Choose a style that
              complements your existing décor and that will fit your space
              perfectly."
            </div>
            <div class="addCart">
              <span
                >Price :$ {{ itemm.unitPrice }}
                <span class="discount">{{ itemm.discount }}</span></span
              >
              <button class="cart-btn" @click="addItemToCart(itemm)">
                ADD TO CART
              </button>
            </div>
            <div class="shipping">
              <div class="logo">
                <i class="fa-solid fa-truck"></i>
                <i class="fa-solid fa-calendar-days"></i>
              </div>
              <div class="text">
                <span>Shippied in 3 days</span>
                <span>Min retal Tenure 6 months</span>
              </div>
            </div>
            <div class="info-details" v-motion-slide-left>
              <div class="details-1 details">
                <div class="details-1__1">
                  <p>Size & Dimensions</p>
                  <span>&#x2022; 24"L x 23"B x 39"H</span>
                </div>
                <div class="details-1__2">
                  <p>Safety and Usage</p>
                  <span>&#x2022; Do not overload the washing machine</span>
                  <span
                    >&#x2022; Ensure to clean inside the drum to avoid
                    damage</span
                  >
                </div>
              </div>
              <div class="details-2 details">
                <div class="details-1__3">
                  <p>Features & Specification</p>
                  <span>&#x2022; Capacity/Size : 5.8 to 6.5 </span>
                  <span>&#x2022; Brand May vary </span>
                  <span>&#x2022; Whirpool/Haier/Godrej</span>
                </div>
              </div>
            </div>
            <div class="list-like">
              <vueper-slides
                :slide-ratio="0.2"
                :infinite="false"
                disable-arrows-on-edges
                bullets-outside
                class="no-shadow"
                v-motion-slide-left
              >
                <vueper-slide
                  v-for="(slide, i) in slides"
                  :key="i"
                  :title="slide.title"
                  :content="slide.content"
                  :style="'background-color: #e9e9e9'"
                />
              </vueper-slides>
            </div>
            <div class="question" v-motion-slide-left>
              <div class="questions">Frequently Asked Question</div>
              <div class="question-container">
                <div class="question-1">
                  <div class="ques-1">
                    Q: The standard Lorem Ipsum passage, used since the 1500s
                    <i class="fa-solid fa-chevron-up"></i>
                  </div>
                  <div class="ques-2">
                    <div>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here, making it
                      look like readable English.
                    </div>
                  </div>
                </div>
                <div class="question-2">
                  <div class="ques-list">
                    Q: The standard Lorem Ipsum passage, used since the 1500s
                    <i class="fa-solid fa-chevron-down"></i>
                  </div>
                  <div class="ques-list">
                    Q: The standard Lorem Ipsum passage, used since the 1500s<i
                      class="fa-solid fa-chevron-down"
                    ></i>
                  </div>
                  <div class="ques-list">
                    Q: The standard Lorem Ipsum passage, used since the 1500s<i
                      class="fa-solid fa-chevron-down"
                    ></i>
                  </div>
                  <div class="ques-list">
                    Q: The standard Lorem Ipsum passage, used since the 1500s<i
                      class="fa-solid fa-chevron-down"
                    ></i>
                  </div>
                  <div class="ques-list">
                    Q: The standard Lorem Ipsum passage, used since the 1500s<i
                      class="fa-solid fa-chevron-down"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
import { ref, onBeforeMount } from "vue";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import { useRouter } from "vue-router";
import CartView from "../CartView.vue";
export default {
  components: { VueperSlides, VueperSlide, CartView },
  props: ["id", "cart"],
  setup() {
    const isView = ref(false);
    const page = ref("product");
    const navigate = (pages) => {
      page.value = pages;
      isView.value = !isView.value;
    };
    const items = ref([]);
    const slides = [
      {
        content: "Lucas Tommy: Im really love this product ",
        image:
          "https://img.freepik.com/free-photo/gray-sofa-brown-living-room-with-copy-space_43614-954.jpg?w=900&t=st=1695216791~exp=1695217391~hmac=b498a4acec3c6c910ec306ff56afc5cb685daf332b6b1c98fa7f764fcecaf723",
      },
      {
        content: "Richard Milly: Im really love this product ",
        image:
          "https://img.freepik.com/free-photo/picture-frame-wall-with-scandinavian-home-interior_53876-139779.jpg?w=996&t=st=1695216905~exp=1695217505~hmac=93fcaa1ca4e8c915de3afd301bc7c3bbbf1a97ea0f4f6c578f195d6c58cdce55",
      },
      {
        content: "Cardiey: Im really love this product ",
        image:
          "https://img.freepik.com/premium-photo/wooden-table-chair-modern-dinning-room-home-interior-dinning-room-home_73503-912.jpg?w=996",
      },
      {
        content: "Solit Record: Im really love this product ",
        image:
          "https://img.freepik.com/free-photo/gray-sofa-white-living-room_43614-796.jpg?t=st=1695218486~exp=1695219086~hmac=050a76b39cc7af073c0f9a786d4c3b0033ac5618737c52430701bd70198d1732",
      },
      {
        content: "Get it Higher: Im really love this product ",
        image:
          "https://img.freepik.com/free-photo/interior-design-with-photoframes-couch_23-2149385435.jpg?w=996&t=st=1695217821~exp=1695218421~hmac=1944e4ef4c0e25ce40a97cdf48a817f2a96795f9f2bc10486db3e042131863ae",
      },
      {
        content: "Im really love this product ",
        image:
          "https://img.freepik.com/free-photo/picture-frame-by-velvet-armchair_53876-132788.jpg?w=360&t=st=1695217691~exp=1695218291~hmac=cea71c1c1db963f3752e36dd1fa50b3d7f382a76a6981d9d72043274f3e57bad",
      },
    ];
    const cart = ref([]);
    const isAdd = ref(false);
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
    const addItemToCart = (itemm) => {
      const existingItemIndex = cart.value.findIndex(
        (item) => item.id === itemm.id
      );
      if (existingItemIndex !== -1) {
        cart.value[existingItemIndex].quantity += 1;
      } else {
        itemm.quantity = 1; // Tạo trường quantity cho sản phẩm
        cart.value.push(itemm);
      }

      console.log(itemm);
      console.log(cart.value);
      isAdd.value = true;
      localStorage.setItem("cart", JSON.stringify(cart.value));
      updatePrice(itemm);
      setTimeout(() => {
        isAdd.value = false;
      }, 3000);
    };
    const tests = ref([]);
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
    loads();
    const isDisplay = ref(true);
    const noneDisplay = () => {
      setTimeout(() => {
        isDisplay.value = false;
      }, 1500);
    };
    const error = ref(null);
    const Load = async () => {
      try {
        let data = await fetch("http://localhost:3000/items");
        if (!data.ok) {
          throw Error("no data available");
        }
        items.value = await data.json();
        console.log(items.value);
      } catch (err) {
        console.log(error.value);
      }
    };
    Load();
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
      isDisplay,
      noneDisplay,
      tests,
      loads,
      page,
      navigate,
      items,
      slides,
      error,
      addItemToCart,
      cart,
      isAdd,
      Logout,
      names,
      // slides,
      isView,
      Delete,
      increaseQuantity,
      decreaseQuantity,
      updatePrice,
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
.quantity {
  color: white;
  padding: 3px 6px;
  border-radius: 50%;
  font-size: 10px;
  background-color: $content-color;
  position: relative;
  top: -17px;
  left: 18px;
}
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
  span {
    color: white;
    font-size: 10px;
    padding: 2px 4px;
    background-color: #e8554e;
    border-radius: 50%;
    position: relative;
    top: -18.5px;
    left: -8px;
  }
}

.isAdd {
  width: 500px;
  height: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(76, 76, 76, 100);
  opacity: 0.8;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .fa-circle-check {
    font-size: 100px;
    color: #00bfa5;
    position: relative;
    top: 30px;
  }
  p {
    color: white;
    font-size: 20px;
  }
}
.viewproduct {
  font-size: 20px;
  cursor: pointer;
  position: relative;
  top: 20px;
  left: 35.2px;
}
.product-info {
  width: 100%;
  height: 1500px;

  @include center-item();
  font-family: $font;
  .product-info__container {
    width: 95%;
    height: 90%;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .section-1 {
      width: 52%;
      height: 37.12%;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .list-1 {
        width: 100%;
        height: 200px;
        cursor: pointer;
        .test {
          width: 744.5px;
          height: 400px;
          background-position: center;
          background-size: cover;
          position: relative;
          z-index: 0;
        }
      }
      .list-2 {
        width: 100%;
        height: 75px;
        cursor: pointer;
      }
    }
    .section-2 {
      width: 45%;
      height: 100%;

      display: flex;

      .info-items {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-start;
        .info-items__container {
          width: 90%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          .into-name {
            width: 100%;
            height: 5%;

            p {
              font-weight: bold;
              font-size: 30px;
              margin: 0;
              padding: 0;
            }
            span {
              font-size: 14px;
              position: relative;

              top: 10px;
              color: $items-color;
              i {
                color: #f9ad49;
              }
            }
          }
          .descrip {
            width: 100%;
            height: 7%;

            color: $items-color;
          }
          .addCart {
            width: 100%;
            height: 9%;
            position: relative;
            top: -10px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: flex-start;
            .cart-btn {
              width: 90%;
              height: 45px;
              background-color: $content-color2;
              border: none;
              color: white;
              font-weight: bold;
              font-size: 20px;
              font-family: $font;
              border-radius: 4px;
              cursor: pointer;
            }
            span {
              position: relative;

              font-size: 35px;
              color: $items-color;
              font-weight: bold;
              letter-spacing: 2px;
              display: flex;
              align-items: center;
              .discount {
                font-size: 14px;
                margin-left: 20px;
                padding: 2px 5px;
                background-color: $content-color;
                color: white;
              }
            }
          }
          .shipping {
            width: 100%;
            height: 5%;

            display: flex;
            color: $items-color;
            justify-content: flex-start;
            font-size: 16px;
            .logo {
              width: 7%;
              height: 100%;

              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              i {
                margin-top: 5px;
              }
            }
            .text {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: center;
              span {
                margin-top: 4px;
              }
            }
          }
          .info-details {
            width: 100%;
            height: 17%;

            display: flex;
            justify-content: space-between;
            color: $items-color;
            .details {
              width: 48%;
              height: 100%;
              p {
                font-weight: bold;
                font-size: 17px;
                position: relative;
                left: 15px;
              }
              span {
                font-size: 15px;
              }
              .details-1__1 {
                height: 30%;
              }
              .details-1__2 {
                height: 70%;
                width: 80%;
                display: flex;
                flex-direction: column;
              }
              .details-1__3 {
                height: 60%;

                display: flex;
                flex-direction: column;
                justify-content: space-between;
              }
            }
          }
          .list-like {
            width: 100%;
            height: 10%;

            .like-1 {
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
            }
          }
          .question {
            width: 100%;
            height: 37%;

            display: flex;
            flex-direction: column;
            justify-content: space-between;
            color: $items-color;
            border: 0.5px solid grey;
            .questions {
              width: 100%;
              height: 10%;
              background-color: #e4e4e4;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              font-size: 20px;
              font-weight: bold;
              border-bottom: 0.5px solid grey;
              text-indent: 10px;
            }
            .question-container {
              width: 100%;
              height: 90%;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              align-items: center;

              .question-1 {
                width: 90%;
                height: 35%;
                text-indent: 10px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                .ques-1 {
                  width: 100%;
                  height: 20%;
                  border: 0.5px solid grey;
                  display: flex;
                  align-items: center;
                  cursor: pointer;
                  i {
                    position: relative;
                    right: -15px;
                  }
                }
                .ques-2 {
                  width: 100%;
                  height: 90%;
                  border: 0.5px solid grey;
                  border-top: none;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  cursor: pointer;
                  div {
                    width: 95%;
                    display: flex;
                    align-items: center;
                  }
                }
              }
              .question-2 {
                width: 90%;
                height: 55%;
                text-indent: 10px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                cursor: pointer;
                .ques-list {
                  width: 100%;
                  height: 15%;
                  border: 0.5px solid grey;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  i {
                    position: relative;
                    left: -15px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
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
