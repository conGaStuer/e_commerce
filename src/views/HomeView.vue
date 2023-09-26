<template>
  <nav>
    <div class="container">
      <div class="label">
        <span class="text1">Hae</span>
        <span class="text2">rin's</span>
      </div>
      <input
        type="text"
        name=""
        id=""
        placeholder="Search for clothings , watch..."
        class="search"
      />
      <div class="nav-bar">
        <router-link to="/" class="component">Home</router-link>
        <router-link to="/about" class="component">About</router-link>
        <router-link to="/contact" class="component">Contact</router-link>
        <router-link to="/collection" class="component">Collection</router-link>
      </div>
      <router-link to="/cart" class="component">
        <i class="fa fa-shopping-cart cart"></i>
      </router-link>

      <!-- <button class="login" @click="handleLogin" v-if="isLogin"> -->
      <button class="login">
        <router-link to="/login" class="login-router"
          >Login / Sign up</router-link
        >
      </button>
    </div>
  </nav>
  <div class="introduce">
    <div class="introduce-text">
      <div class="intro-text--1">Why Haerin's</div>
      <div class="intro-text--2">
        I'm super shy, super shy But wait a minute while I make you mine make
        you mine 떨리는 지금도 you're on my mind all the time I wanna tell
      </div>
      <button class="intro-text--3">Explore our Packages</button>
    </div>
  </div>
  <div class="service-container">
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

  <!-- =>>>>>>>>>>>>>> Rating of users
  <vueper-slides fractions progress>
    <vueper-slide v-for="i in 10" :key="i" :title="i.toString()" />
  </vueper-slides> -->
  <div class="list-container">
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
                    Rating: {{ itemm.rating }} <i class="fa-solid fa-star"></i>
                  </div>
                  <div class="items-information items-price">
                    {{ itemm.price }}/month
                  </div>
                </div>
              </div>
            </div>
          </template>
        </vueper-slide>
      </vueper-slides>
    </div>
  </div>
  <div class="list-container">
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
                    Rating: {{ vieww.rating }} <i class="fa-solid fa-star"></i>
                  </div>
                  <div class="items-information items-price">
                    {{ vieww.price }}/month
                  </div>
                </div>
              </div>
            </div>
          </template>
        </vueper-slide>
      </vueper-slides>
    </div>
  </div>
  <div class="list-container comment">
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
import { ref } from "vue";
// @ is an alias to /src
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  name: "HomeView",
  components: { VueperSlides, VueperSlide },

  setup() {
    const isLogin = ref(true);
    const handleLogin = () => {
      isLogin.value = false;
    };
    //slide
    // const slides = [
    //   {
    //     title: "El Teide Volcano, Spain",
    //     content: "Photo by Max Rive",
    //     // You can also provide a URL for the image.
    //     image: require("@/assets/b3.jpg"),
    //     link: "https://www.maxrivephotography.com/index/C0000rU1RKCHdqwI/G0000X57AtIzuRX0/I0000Gvr9HqdtyXk",
    //   },
    //   {
    //     title: "El Teide Volcano, Spain",
    //     content: "Photo by Max Rive",
    //     // You can also provide a URL for the image.
    //     image: require("@/assets/b3.jpg"),
    //     link: "https://www.maxrivephotography.com/index/C0000rU1RKCHdqwI/G0000X57AtIzuRX0/I0000Gvr9HqdtyXk",
    //   },
    //   {
    //     title: "El Teide Volcano, Spain",
    //     content: "Photo by Max Rive",
    //     // You can also provide a URL for the image.
    //     image: require("@/assets/b3.jpg"),
    //     link: "https://www.maxrivephotography.com/index/C0000rU1RKCHdqwI/G0000X57AtIzuRX0/I0000Gvr9HqdtyXk",
    //   },
    //   {
    //     title: "El Teide Volcano, Spain",
    //     content: "Photo by Max Rive",
    //     // You can also provide a URL for the image.
    //     image: require("@/assets/b3.jpg"),
    //     link: "https://www.maxrivephotography.com/index/C0000rU1RKCHdqwI/G0000X57AtIzuRX0/I0000Gvr9HqdtyXk",
    //   },
    //   {
    //     title: "El Teide Volcano, Spain",
    //     content: "Photo by Max Rive",
    //     // You can also provide a URL for the image.
    //     image: require("@/assets/b3.jpg"),
    //     link: "https://www.maxrivephotography.com/index/C0000rU1RKCHdqwI/G0000X57AtIzuRX0/I0000Gvr9HqdtyXk",
    //   },
    //   {
    //     title: "El Teide Volcano, Spain",
    //     content: "Photo by Max Rive",
    //     // You can also provide a URL for the image.
    //     image: require("@/assets/b3.jpg"),
    //     link: "https://www.maxrivephotography.com/index/C0000rU1RKCHdqwI/G0000X57AtIzuRX0/I0000Gvr9HqdtyXk",
    //   },
    //   {
    //     title: "El Teide Volcano, Spain",
    //     content: "Photo by Max Rive",
    //     // You can also provide a URL for the image.
    //     image: require("@/assets/b3.jpg"),
    //     link: "https://www.maxrivephotography.com/index/C0000rU1RKCHdqwI/G0000X57AtIzuRX0/I0000Gvr9HqdtyXk",
    //   },
    //   {
    //     title: "El Teide Volcano, Spain",
    //     content: "Photo by Max Rive",
    //     // You can also provide a URL for the image.
    //     image: require("@/assets/b3.jpg"),
    //     link: "https://www.maxrivephotography.com/index/C0000rU1RKCHdqwI/G0000X57AtIzuRX0/I0000Gvr9HqdtyXk",
    //   },
    // ];
    const items = ref([]);
    const views = ref([]);
    const comments = ref([]);
    const error = ref(null);
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
    return {
      isLogin,
      handleLogin,
      items,
      views,
      comments,
      error,
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
///////////products

body {
  padding: 0;
  margin: 0;
  font-family: "Bricolage Grotesque", sans-serif;
  font-family: "Cabin", sans-serif;
  font-family: "Montserrat", sans-serif;
  font-family: "Odibee Sans", cursive;
  letter-spacing: 0.5px;
}
nav {
  width: 100%;
  height: 80px;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 5px 1px rgb(118, 117, 117);

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
      font-size: 45px;
      font-weight: bold;
      @include center-item();
      .text1 {
        color: $content-color2;
      }
      .text2 {
        color: $content-color;
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
        font-size: 16px;
        color: $text-color;
        font-family: "Bricolage Grotesque", sans-serif;
        font-family: "Cabin", sans-serif;
        font-family: "Montserrat", sans-serif;
        font-family: "Odibee Sans", cursive;
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
        font-size: 20px;
      }
      .router-link-active {
        background-color: rgba($text-color, 0.2);
        border-radius: 5px;
      }
    }

    .fa-shopping-cart {
      font-size: 30px;
      color: $text-color;
      cursor: pointer;
    }
    .login {
      font-family: "Bricolage Grotesque", sans-serif;
      font-family: "Cabin", sans-serif;
      font-family: "Montserrat", sans-serif;
      font-family: "Odibee Sans", cursive;
      font-size: 17px;
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
  z-index: 0;
  .introduce-text {
    width: 340px;
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
      position: relative;
      left: -110.5px;
      border-top-left-radius: 5px;
      border-bottom-right-radius: 10px;
      @include center-item();
      color: whitesmoke;
    }
    .intro-text--2 {
      width: 80%;
      height: 67%;
      font-size: 20px;
      color: rgb(71, 70, 70);
      @include center-item();
    }
    .intro-text--3 {
      font-family: "Bricolage Grotesque", sans-serif;
      font-family: "Cabin", sans-serif;
      font-family: "Montserrat", sans-serif;
      font-family: "Odibee Sans", cursive;
      font-size: 17px;
      width: 50%;
      height: 17%;
      position: relative;
      left: -61px;
      top: -10px;
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
      font-size: 19px;
      text-align: center;
      color: $text-color;
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
      left: -545px;
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
              font-size: 20px;
              color: $items-color;
            }
            .items-icon {
              font-size: 22.8px;
              color: $text-color;
              width: 50%;
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
            .items-rating {
              color: $text-color;
              display: flex;
              align-items: center;
              justify-content: flex-start;
              width: 40%;
              font-size: 18px;
              i {
                margin-left: 5px;
                color: $content-color;
                font-size: 13.1px;
              }
            }
            .items-price {
              color: $items-color;
              font-size: 16px;
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
      font-size: 22px;
      text-align: center;
    }
    .info-comment {
      width: 80%;
      height: 10%;
      position: relative;

      top: -10px;
      flex-direction: column;
      font-size: 17.6px;
      .info-com1 {
        color: $content-color;
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
      font-size: 17.1px;
      @include center-item();
      justify-content: flex-start;
      letter-spacing: 1.2px;
    }
    .infor-text2 {
      width: 40%;
      height: 90%;
      font-size: 17.1px;
      letter-spacing: 1.2px;
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
      font-size: 17.1px;
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
  font-size: 14px;
}
</style>
