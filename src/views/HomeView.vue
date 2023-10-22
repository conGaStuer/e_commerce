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
          >
            {{ test.name }}
            <div
              :style="{ backgroundImage: `url(${test.image_link})` }"
              class="proimage"
            ></div>
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
    const isSearch = ref(true);
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

    const items = ref({
      response: [
        {
          id: 1,
          name: "1 BHK Royal Package for Bachelors",
          image_link:
            "https://img.freepik.com/free-photo/gray-sofa-brown-living-room-with-copy-space_43614-954.jpg?w=900&t=st=1695216791~exp=1695217391~hmac=b498a4acec3c6c910ec306ff56afc5cb685daf332b6b1c98fa7f764fcecaf723",
          rating: 2132,
          price: 564,
          unitPrice: 564,
          discount: "20% OFF",
          tag: "package",
          quantity: 1,
        },
        {
          id: 2,
          name: "1 BHK Royal Package for Partners",
          image_link:
            "https://img.freepik.com/free-photo/picture-frame-wall-with-scandinavian-home-interior_53876-139779.jpg?w=996&t=st=1695216905~exp=1695217505~hmac=93fcaa1ca4e8c915de3afd301bc7c3bbbf1a97ea0f4f6c578f195d6c58cdce55",
          rating: 1152,
          price: 5111,
          unitPrice: 5111,
          discount: "20% OFF",
          tag: "package",
          quantity: 1,
        },
        {
          id: 3,
          name: "1 BHK Royal Package for Family",
          image_link:
            "https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129803.jpg?w=996&t=st=1695217528~exp=1695218128~hmac=eaf10f9a817c0b4f49144b2a01b66e10c228e499e48772885125943f879af64e",
          rating: 315,
          price: 1615,
          unitPrice: 1615,
          discount: "30% OFF",
          tag: "package",
          quantity: 1,
        },
        {
          id: 4,
          name: "Minimal Chair",
          image_link:
            "https://img.freepik.com/free-photo/green-sofa-white-living-room-with-free-space_43614-834.jpg?w=900&t=st=1695217558~exp=1695218158~hmac=6b8e8c5035617eacdd8655ac34a0d53f560e503b8058f106b06cf4e1eefe303c",
          rating: 157,
          price: 851,
          unitPrice: 851,
          discount: "20% OFF",
          tag: "chair",
          quantity: 1,
        },
        {
          id: 5,
          name: "1 BHK Royal Package for Family",
          image_link:
            "https://img.freepik.com/free-photo/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg_1258-152155.jpg?w=1380&t=st=1695217600~exp=1695218200~hmac=82c630ab2515c3afb39d8ad650f209b371e0ff446a784f06f45c2b8adeda2540",
          rating: 644,
          price: 9111,
          unitPrice: 9111,
          discount: "10% OFF",
          tag: "package",
          quantity: 1,
        },
        {
          id: 6,
          name: "2 Seater Sofa",
          image_link:
            "https://img.freepik.com/free-photo/gray-sofa-white-living-room-interior-with-copy-space-3d-rendering_43614-802.jpg?w=1060&t=st=1695217641~exp=1695218241~hmac=e38892dc8d83b861caf53ff7103dade6c12d03891b2da3f3302a5ebfde1d639a",
          rating: 665,
          price: 561,
          unitPrice: 561,
          discount: "20% OFF",
          tag: "sofa",
          quantity: 1,
        },
        {
          id: 7,
          name: "Velvet Armchair",
          image_link:
            "https://img.freepik.com/free-photo/picture-frame-by-velvet-armchair_53876-132788.jpg?w=360&t=st=1695217691~exp=1695218291~hmac=cea71c1c1db963f3752e36dd1fa50b3d7f382a76a6981d9d72043274f3e57bad",
          rating: 1152,
          price: 313,
          unitPrice: 313,
          discount: "40% OFF",
          tag: "chair",
          quantity: 1,
        },
        {
          id: 8,
          name: "1 BHK Royal Package for Partners",
          image_link:
            "https://img.freepik.com/free-photo/living-room-mid-century-style-with-warm-colors-ai-generative_123827-23931.jpg?w=996&t=st=1695217743~exp=1695218343~hmac=b3f6606ab513a878181322b0c6155fbc12c20c86428bfddee9209a3086940080",
          rating: 622,
          price: 6111,
          unitPrice: 6111,
          discount: "20% OFF",
          tag: "package",
          quantity: 1,
        },
        {
          id: 9,
          name: "1 BHK Royal Package for Bachelors",
          image_link:
            "https://img.freepik.com/free-photo/mockup-frames-living-room-interior-with-chair-decorscandinavian-style_41470-5148.jpg?w=740&t=st=1695217779~exp=1695218379~hmac=85f749de4e623f0af1e8a20788169bd1a23874ec3b808fa4d2e1408d46750118",
          rating: 321,
          price: 1122,
          unitPrice: 1122,
          discount: "50% OFF",
          tag: "package",
          quantity: 1,
        },
        {
          id: 10,
          name: "1 BHK Royal Package for Partners",
          image_link:
            "https://img.freepik.com/free-photo/interior-design-with-photoframes-couch_23-2149385435.jpg?w=996&t=st=1695217821~exp=1695218421~hmac=1944e4ef4c0e25ce40a97cdf48a817f2a96795f9f2bc10486db3e042131863ae",
          rating: 151,
          price: 125,
          unitPrice: 125,
          discount: "20% OFF",
          tag: "package",
          quantity: 1,
        },
        {
          id: 11,
          name: "Bedroom for Partners",
          image_link:
            "https://img.freepik.com/free-psd/realistic-bright-modern-double-bedroom-with-furniture_176382-456.jpg?w=1060&t=st=1695217879~exp=1695218479~hmac=0d6527225f3e3fc71583552f20ccbe69106afe793acc2ec508d547423e3c2c49",
          rating: 515,
          price: 1120,
          unitPrice: 1120,
          discount: "20% OFF",
          tag: "room",
          quantity: 1,
        },
        {
          id: 12,
          name: "Kitchen Room for Family",
          image_link:
            "https://img.freepik.com/free-photo/minimalist-modern-white-kitchen-with-wooden-floor-natural-light-interior-design-ai-generative_123827-23490.jpg?w=996&t=st=1695217921~exp=1695218521~hmac=00b022cd3704c4fc03cd5c22bd28c2f8d59cba32cfe315761363b06ddbcb12a3",
          rating: 1132,
          price: 1221,
          unitPrice: 1221,
          discount: "20% OFF",
          tag: "room",
          quantity: 1,
        },
        {
          id: 13,
          name: "Computer Table",
          image_link:
            "https://img.freepik.com/free-photo/business-desk-concept-with-laptop_23-2149073032.jpg?w=996&t=st=1695218061~exp=1695218661~hmac=9269cea2e4e4a1d5f92a54198ffaadd1c3ed574fabd54d3254c1adf1e68fa603",
          rating: 5151,
          price: 1000,
          unitPrice: 1000,
          discount: "20% OFF",
          tag: "table",
          quantity: 1,
        },
        {
          id: 14,
          name: "Bed for Partners",
          image_link:
            "https://img.freepik.com/free-photo/beautiful-bed-middle-bedroom_23-2148982015.jpg?size=626&ext=jpg&uid=R116779415&ga=GA1.2.1510566008.1693293482&semt=sph",
          rating: 885,
          price: 552,
          unitPrice: 552,
          discount: "20% OFF",
          tag: "room",
          quantity: 1,
        },
        {
          id: 15,
          name: "Office Shelves",
          image_link:
            "https://img.freepik.com/free-photo/high-angle-desk-arrangement-with-plants_23-2149383630.jpg?w=996&t=st=1695218224~exp=1695218824~hmac=3a418fcc28f54a963f879a7166a7e9af95bd8ca80a78c14a2093771bcb7f1fa2",
          rating: 862,
          price: 125,
          unitPrice: 125,
          discount: "10% OFF",
          tag: "table",
          quantity: 1,
        },
        {
          id: 16,
          name: "Dinning Table for Family",
          image_link:
            "https://img.freepik.com/premium-photo/3d-rendering-modern-living-room-interior-design-inspiration_674881-1711.jpg",
          rating: 523,
          price: 222,
          unitPrice: 222,
          discount: "40% OFF",
          tag: "table",
          quantity: 1,
        },
        {
          id: 17,
          name: "Dinning table for Family",
          image_link:
            "https://img.freepik.com/premium-photo/wooden-table-chair-modern-dinning-room-home-interior-dinning-room-home_73503-912.jpg?w=996",
          rating: 66,
          price: 1210,
          unitPrice: 1210,
          discount: "20% OFF",
          tag: "table",
          quantity: 1,
        },
        {
          id: 18,
          name: "Sofa for Partners",
          image_link:
            "https://img.freepik.com/free-photo/gray-sofa-white-living-room_43614-796.jpg?t=st=1695218486~exp=1695219086~hmac=050a76b39cc7af073c0f9a786d4c3b0033ac5618737c52430701bd70198d1732",
          rating: 12,
          price: 102,
          unitPrice: 102,
          discount: "20% OFF",
          tag: "sofa",
          quantity: 1,
        },
        {
          id: 19,
          name: "Dinning Table for Partners",
          image_link:
            "https://img.freepik.com/free-photo/modern-luxury-authentic-dining-room-interior-design_53876-126791.jpg?t=st=1695218355~exp=1695218955~hmac=42f827ef394a23dd475e7daec30d2aeae7177f5cbd7fb4fdb61c3b80091eb9f4",
          rating: 1205,
          price: 215,
          unitPrice: 215,
          discount: "70% OFF",
          tag: "table",
          quantity: 1,
        },
        {
          id: 20,
          name: "Dinning Table for Family",
          image_link:
            "https://img.freepik.com/free-photo/delicious-breakfast-with-bananas-white-table_23-2148981996.jpg?t=st=1695218355~exp=1695218955~hmac=c6b40c01fd0ce073391985bfd6a6b0d977947658a2796cf19b69ae420b5bc379",
          rating: 1610,
          price: 102,
          unitPrice: 102,
          discount: "90% OFF",
          tag: "table",
          quantity: 1,
        },
      ],
    });
    const views = ref({
      response: [
        {
          id: 1,
          name: "1 BHK Royal Package for Bachelors",
          image_link:
            "https://img.freepik.com/free-photo/gray-sofa-brown-living-room-with-copy-space_43614-954.jpg?w=900&t=st=1695216791~exp=1695217391~hmac=b498a4acec3c6c910ec306ff56afc5cb685daf332b6b1c98fa7f764fcecaf723",
          rating: 2132,
          price: 564,
          unitPrice: 564,
          discount: "20% OFF",
          tag: "package",
          quantity: 1,
        },
        {
          id: 2,
          name: "1 BHK Royal Package for Partners",
          image_link:
            "https://img.freepik.com/free-photo/picture-frame-wall-with-scandinavian-home-interior_53876-139779.jpg?w=996&t=st=1695216905~exp=1695217505~hmac=93fcaa1ca4e8c915de3afd301bc7c3bbbf1a97ea0f4f6c578f195d6c58cdce55",
          rating: 1152,
          price: 5111,
          unitPrice: 5111,
          discount: "20% OFF",
          tag: "package",
          quantity: 1,
        },
        {
          id: 3,
          name: "1 BHK Royal Package for Family",
          image_link:
            "https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129803.jpg?w=996&t=st=1695217528~exp=1695218128~hmac=eaf10f9a817c0b4f49144b2a01b66e10c228e499e48772885125943f879af64e",
          rating: 315,
          price: 1615,
          unitPrice: 1615,
          discount: "30% OFF",
          tag: "package",
          quantity: 1,
        },
        {
          id: 4,
          name: "Minimal Chair",
          image_link:
            "https://img.freepik.com/free-photo/green-sofa-white-living-room-with-free-space_43614-834.jpg?w=900&t=st=1695217558~exp=1695218158~hmac=6b8e8c5035617eacdd8655ac34a0d53f560e503b8058f106b06cf4e1eefe303c",
          rating: 157,
          price: 851,
          unitPrice: 851,
          discount: "20% OFF",
          tag: "chair",
          quantity: 1,
        },
        {
          id: 5,
          name: "1 BHK Royal Package for Family",
          image_link:
            "https://img.freepik.com/free-photo/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg_1258-152155.jpg?w=1380&t=st=1695217600~exp=1695218200~hmac=82c630ab2515c3afb39d8ad650f209b371e0ff446a784f06f45c2b8adeda2540",
          rating: 644,
          price: 9111,
          unitPrice: 9111,
          discount: "10% OFF",
          tag: "package",
          quantity: 1,
        },
        {
          id: 6,
          name: "2 Seater Sofa",
          image_link:
            "https://img.freepik.com/free-photo/gray-sofa-white-living-room-interior-with-copy-space-3d-rendering_43614-802.jpg?w=1060&t=st=1695217641~exp=1695218241~hmac=e38892dc8d83b861caf53ff7103dade6c12d03891b2da3f3302a5ebfde1d639a",
          rating: 665,
          price: 561,
          unitPrice: 561,
          discount: "20% OFF",
          tag: "sofa",
          quantity: 1,
        },
        {
          id: 7,
          name: "Velvet Armchair",
          image_link:
            "https://img.freepik.com/free-photo/picture-frame-by-velvet-armchair_53876-132788.jpg?w=360&t=st=1695217691~exp=1695218291~hmac=cea71c1c1db963f3752e36dd1fa50b3d7f382a76a6981d9d72043274f3e57bad",
          rating: 1152,
          price: 313,
          unitPrice: 313,
          discount: "40% OFF",
          tag: "chair",
          quantity: 1,
        },
        {
          id: 8,
          name: "1 BHK Royal Package for Partners",
          image_link:
            "https://img.freepik.com/free-photo/living-room-mid-century-style-with-warm-colors-ai-generative_123827-23931.jpg?w=996&t=st=1695217743~exp=1695218343~hmac=b3f6606ab513a878181322b0c6155fbc12c20c86428bfddee9209a3086940080",
          rating: 622,
          price: 6111,
          unitPrice: 6111,
          discount: "20% OFF",
          tag: "package",
          quantity: 1,
        },
        {
          id: 9,
          name: "1 BHK Royal Package for Bachelors",
          image_link:
            "https://img.freepik.com/free-photo/mockup-frames-living-room-interior-with-chair-decorscandinavian-style_41470-5148.jpg?w=740&t=st=1695217779~exp=1695218379~hmac=85f749de4e623f0af1e8a20788169bd1a23874ec3b808fa4d2e1408d46750118",
          rating: 321,
          price: 1122,
          unitPrice: 1122,
          discount: "50% OFF",
          tag: "package",
          quantity: 1,
        },
        {
          id: 10,
          name: "1 BHK Royal Package for Partners",
          image_link:
            "https://img.freepik.com/free-photo/interior-design-with-photoframes-couch_23-2149385435.jpg?w=996&t=st=1695217821~exp=1695218421~hmac=1944e4ef4c0e25ce40a97cdf48a817f2a96795f9f2bc10486db3e042131863ae",
          rating: 151,
          price: 125,
          unitPrice: 125,
          discount: "20% OFF",
          tag: "package",
          quantity: 1,
        },
        {
          id: 11,
          name: "Bedroom for Partners",
          image_link:
            "https://img.freepik.com/free-psd/realistic-bright-modern-double-bedroom-with-furniture_176382-456.jpg?w=1060&t=st=1695217879~exp=1695218479~hmac=0d6527225f3e3fc71583552f20ccbe69106afe793acc2ec508d547423e3c2c49",
          rating: 515,
          price: 1120,
          unitPrice: 1120,
          discount: "20% OFF",
          tag: "room",
          quantity: 1,
        },
        {
          id: 12,
          name: "Kitchen Room for Family",
          image_link:
            "https://img.freepik.com/free-photo/minimalist-modern-white-kitchen-with-wooden-floor-natural-light-interior-design-ai-generative_123827-23490.jpg?w=996&t=st=1695217921~exp=1695218521~hmac=00b022cd3704c4fc03cd5c22bd28c2f8d59cba32cfe315761363b06ddbcb12a3",
          rating: 1132,
          price: 1221,
          unitPrice: 1221,
          discount: "20% OFF",
          tag: "room",
          quantity: 1,
        },
        {
          id: 13,
          name: "Computer Table",
          image_link:
            "https://img.freepik.com/free-photo/business-desk-concept-with-laptop_23-2149073032.jpg?w=996&t=st=1695218061~exp=1695218661~hmac=9269cea2e4e4a1d5f92a54198ffaadd1c3ed574fabd54d3254c1adf1e68fa603",
          rating: 5151,
          price: 1000,
          unitPrice: 1000,
          discount: "20% OFF",
          tag: "table",
          quantity: 1,
        },
        {
          id: 14,
          name: "Bed for Partners",
          image_link:
            "https://img.freepik.com/free-photo/beautiful-bed-middle-bedroom_23-2148982015.jpg?size=626&ext=jpg&uid=R116779415&ga=GA1.2.1510566008.1693293482&semt=sph",
          rating: 885,
          price: 552,
          unitPrice: 552,
          discount: "20% OFF",
          tag: "room",
          quantity: 1,
        },
        {
          id: 15,
          name: "Office Shelves",
          image_link:
            "https://img.freepik.com/free-photo/high-angle-desk-arrangement-with-plants_23-2149383630.jpg?w=996&t=st=1695218224~exp=1695218824~hmac=3a418fcc28f54a963f879a7166a7e9af95bd8ca80a78c14a2093771bcb7f1fa2",
          rating: 862,
          price: 125,
          unitPrice: 125,
          discount: "10% OFF",
          tag: "table",
          quantity: 1,
        },
        {
          id: 16,
          name: "Dinning Table for Family",
          image_link:
            "https://img.freepik.com/premium-photo/3d-rendering-modern-living-room-interior-design-inspiration_674881-1711.jpg",
          rating: 523,
          price: 222,
          unitPrice: 222,
          discount: "40% OFF",
          tag: "table",
          quantity: 1,
        },
        {
          id: 17,
          name: "Dinning table for Family",
          image_link:
            "https://img.freepik.com/premium-photo/wooden-table-chair-modern-dinning-room-home-interior-dinning-room-home_73503-912.jpg?w=996",
          rating: 66,
          price: 1210,
          unitPrice: 1210,
          discount: "20% OFF",
          tag: "table",
          quantity: 1,
        },
        {
          id: 18,
          name: "Sofa for Partners",
          image_link:
            "https://img.freepik.com/free-photo/gray-sofa-white-living-room_43614-796.jpg?t=st=1695218486~exp=1695219086~hmac=050a76b39cc7af073c0f9a786d4c3b0033ac5618737c52430701bd70198d1732",
          rating: 12,
          price: 102,
          unitPrice: 102,
          discount: "20% OFF",
          tag: "sofa",
          quantity: 1,
        },
        {
          id: 19,
          name: "Dinning Table for Partners",
          image_link:
            "https://img.freepik.com/free-photo/modern-luxury-authentic-dining-room-interior-design_53876-126791.jpg?t=st=1695218355~exp=1695218955~hmac=42f827ef394a23dd475e7daec30d2aeae7177f5cbd7fb4fdb61c3b80091eb9f4",
          rating: 1205,
          price: 215,
          unitPrice: 215,
          discount: "70% OFF",
          tag: "table",
          quantity: 1,
        },
        {
          id: 20,
          name: "Dinning Table for Family",
          image_link:
            "https://img.freepik.com/free-photo/delicious-breakfast-with-bananas-white-table_23-2148981996.jpg?t=st=1695218355~exp=1695218955~hmac=c6b40c01fd0ce073391985bfd6a6b0d977947658a2796cf19b69ae420b5bc379",
          rating: 1610,
          price: 102,
          unitPrice: 102,
          discount: "90% OFF",
          tag: "table",
          quantity: 1,
        },
      ],
    });

    const comments = ref({
      response: [
        {
          id: 1,
          name: "Phan Tan Trung",
          avatar:
            "https://static2.yan.vn/YanNews/2167221/202011/thay-giao-ba-la-ai-tieu-su-su-nghiep-doi-tu-cua-thay-giao-ba-4011fed7-22176437.png",
          country: "Viet Nam",
          comment:
            "I love the clean and modern design of the Haerin's furniture website. It's easy to navigate and find the products I'm looking for.",
        },
        {
          id: 2,
          name: "Lee Sang Hyuk",
          avatar:
            "https://dug0nmhkbevod.vcdn.cloud/Mam/attach/upload/01122022004832/004834_52479783522_5919c73401_k166971614833.jpg",
          country: "Korea",
          comment:
            "Haerin's furniture has a wide selection of high-quality furniture at affordable prices. I'm always able to find what I'm looking for on their website.",
        },
        {
          id: 3,
          name: "Mr.Beast",
          avatar:
            "https://genk.mediacdn.vn/139269124445442048/2023/9/8/16788134606283-1693971436758-16939714368351799675693-1694144982369-16941449826961202585080.jpg",
          country: "US",
          comment:
            "I'm impressed with the quality of the customer service at Haerin's furniture. The staff is always helpful and friendly, and they go out of their way to make sure I'm happy with my purchase.",
        },
        {
          id: 4,
          name: "Uchiha Sasuke",
          avatar:
            "https://ss-images.saostar.vn/w800/pc/1594356105972/wp3335539.jpg",
          country: "Japan",
          comment:
            "I would definitely recommend Haerin's furniture to anyone looking for high-quality furniture at affordable prices. The selection is wide, the customer service is excellent, and the website is easy to use.",
        },
        {
          id: 5,
          name: "Son Tung MTP",
          avatar:
            "https://photo-zmp3.zmdcdn.me/avatars/8/a/a/b/8aab7a0386dd9c24b90adcc5ef5a7814.jpg",
          country: "Viet Nam",
          comment:
            "I'm so glad I found Haerin's furniture! I was able to find all the furniture I needed for my new apartment at a great price. The quality of the furniture is excellent, and it looks great in my space.",
        },
        {
          id: 6,
          name: "ChiPu",
          avatar:
            "https://images2.thanhnien.vn/528068263637045248/2023/3/19/chipukhongbietthitytydapgioresongmua416-1679270206211670976720.jpg",
          country: "Viet Nam",
          comment:
            "I'm in love with the Haerin's Maya sofa. It's so stylish and comfortable, and it's the perfect addition to my living room.",
        },
        {
          id: 7,
          name: "Eminem",
          avatar:
            "https://vtv1.mediacdn.vn/zoom/640_400/2022/6/24/image-16560440076531844630398.jpg",
          country: "US",
          comment:
            "I'm really impressed with the quality of the Haerin's Olivia bed. It's so sturdy and well-made, and I get a great night's sleep on it.",
        },
        {
          id: 8,
          name: "Zoro",
          avatar:
            "https://contents.pep.ph/images2/images2/2023/09/13/img-4090-1694564813.jpg",
          country: "Ionia",
          comment:
            "I love the Haerin's Lily dining table. It's the perfect size for my family, and it's made of high-quality materials. I'm sure it will last for years to come.",
        },
        {
          id: 9,
          name: "Le Sang Hiec",
          avatar:
            "https://gamek.mediacdn.vn/133514250583805952/2021/10/23/morgan-4-1634927802086353390095.jpg",
          country: "Viet Nam",
          comment:
            "The Haerin's coffee table is the perfect addition to my living room. It's stylish and functional, and it provides me with plenty of storage space.",
        },
      ],
    });
    const tests = ref([
      {
        id: 1,
        name: "1 BHK Royal Package for Bachelors",
        image_link:
          "https://img.freepik.com/free-photo/gray-sofa-brown-living-room-with-copy-space_43614-954.jpg?w=900&t=st=1695216791~exp=1695217391~hmac=b498a4acec3c6c910ec306ff56afc5cb685daf332b6b1c98fa7f764fcecaf723",
        rating: 2132,
        price: 564,
        unitPrice: 564,
        discount: "20% OFF",
        tag: "package",
        quantity: 1,
      },
      {
        id: 2,
        name: "1 BHK Royal Package for Partners",
        image_link:
          "https://img.freepik.com/free-photo/picture-frame-wall-with-scandinavian-home-interior_53876-139779.jpg?w=996&t=st=1695216905~exp=1695217505~hmac=93fcaa1ca4e8c915de3afd301bc7c3bbbf1a97ea0f4f6c578f195d6c58cdce55",
        rating: 1152,
        price: 5111,
        unitPrice: 5111,
        discount: "20% OFF",
        tag: "package",
        quantity: 1,
      },
      {
        id: 3,
        name: "1 BHK Royal Package for Family",
        image_link:
          "https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129803.jpg?w=996&t=st=1695217528~exp=1695218128~hmac=eaf10f9a817c0b4f49144b2a01b66e10c228e499e48772885125943f879af64e",
        rating: 315,
        price: 1615,
        unitPrice: 1615,
        discount: "30% OFF",
        tag: "package",
        quantity: 1,
      },
      {
        id: 4,
        name: "Minimal Chair",
        image_link:
          "https://img.freepik.com/free-photo/green-sofa-white-living-room-with-free-space_43614-834.jpg?w=900&t=st=1695217558~exp=1695218158~hmac=6b8e8c5035617eacdd8655ac34a0d53f560e503b8058f106b06cf4e1eefe303c",
        rating: 157,
        price: 851,
        unitPrice: 851,
        discount: "20% OFF",
        tag: "chair",
        quantity: 1,
      },
      {
        id: 5,
        name: "1 BHK Royal Package for Family",
        image_link:
          "https://img.freepik.com/free-photo/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg_1258-152155.jpg?w=1380&t=st=1695217600~exp=1695218200~hmac=82c630ab2515c3afb39d8ad650f209b371e0ff446a784f06f45c2b8adeda2540",
        rating: 644,
        price: 9111,
        unitPrice: 9111,
        discount: "10% OFF",
        tag: "package",
        quantity: 1,
      },
      {
        id: 6,
        name: "2 Seater Sofa",
        image_link:
          "https://img.freepik.com/free-photo/gray-sofa-white-living-room-interior-with-copy-space-3d-rendering_43614-802.jpg?w=1060&t=st=1695217641~exp=1695218241~hmac=e38892dc8d83b861caf53ff7103dade6c12d03891b2da3f3302a5ebfde1d639a",
        rating: 665,
        price: 561,
        unitPrice: 561,
        discount: "20% OFF",
        tag: "sofa",
        quantity: 1,
      },
      {
        id: 7,
        name: "Velvet Armchair",
        image_link:
          "https://img.freepik.com/free-photo/picture-frame-by-velvet-armchair_53876-132788.jpg?w=360&t=st=1695217691~exp=1695218291~hmac=cea71c1c1db963f3752e36dd1fa50b3d7f382a76a6981d9d72043274f3e57bad",
        rating: 1152,
        price: 313,
        unitPrice: 313,
        discount: "40% OFF",
        tag: "chair",
        quantity: 1,
      },
      {
        id: 8,
        name: "1 BHK Royal Package for Partners",
        image_link:
          "https://img.freepik.com/free-photo/living-room-mid-century-style-with-warm-colors-ai-generative_123827-23931.jpg?w=996&t=st=1695217743~exp=1695218343~hmac=b3f6606ab513a878181322b0c6155fbc12c20c86428bfddee9209a3086940080",
        rating: 622,
        price: 6111,
        unitPrice: 6111,
        discount: "20% OFF",
        tag: "package",
        quantity: 1,
      },
      {
        id: 9,
        name: "1 BHK Royal Package for Bachelors",
        image_link:
          "https://img.freepik.com/free-photo/mockup-frames-living-room-interior-with-chair-decorscandinavian-style_41470-5148.jpg?w=740&t=st=1695217779~exp=1695218379~hmac=85f749de4e623f0af1e8a20788169bd1a23874ec3b808fa4d2e1408d46750118",
        rating: 321,
        price: 1122,
        unitPrice: 1122,
        discount: "50% OFF",
        tag: "package",
        quantity: 1,
      },
      {
        id: 10,
        name: "1 BHK Royal Package for Partners",
        image_link:
          "https://img.freepik.com/free-photo/interior-design-with-photoframes-couch_23-2149385435.jpg?w=996&t=st=1695217821~exp=1695218421~hmac=1944e4ef4c0e25ce40a97cdf48a817f2a96795f9f2bc10486db3e042131863ae",
        rating: 151,
        price: 125,
        unitPrice: 125,
        discount: "20% OFF",
        tag: "package",
        quantity: 1,
      },
      {
        id: 11,
        name: "Bedroom for Partners",
        image_link:
          "https://img.freepik.com/free-psd/realistic-bright-modern-double-bedroom-with-furniture_176382-456.jpg?w=1060&t=st=1695217879~exp=1695218479~hmac=0d6527225f3e3fc71583552f20ccbe69106afe793acc2ec508d547423e3c2c49",
        rating: 515,
        price: 1120,
        unitPrice: 1120,
        discount: "20% OFF",
        tag: "room",
        quantity: 1,
      },
      {
        id: 12,
        name: "Kitchen Room for Family",
        image_link:
          "https://img.freepik.com/free-photo/minimalist-modern-white-kitchen-with-wooden-floor-natural-light-interior-design-ai-generative_123827-23490.jpg?w=996&t=st=1695217921~exp=1695218521~hmac=00b022cd3704c4fc03cd5c22bd28c2f8d59cba32cfe315761363b06ddbcb12a3",
        rating: 1132,
        price: 1221,
        unitPrice: 1221,
        discount: "20% OFF",
        tag: "room",
        quantity: 1,
      },
      {
        id: 13,
        name: "Computer Table",
        image_link:
          "https://img.freepik.com/free-photo/business-desk-concept-with-laptop_23-2149073032.jpg?w=996&t=st=1695218061~exp=1695218661~hmac=9269cea2e4e4a1d5f92a54198ffaadd1c3ed574fabd54d3254c1adf1e68fa603",
        rating: 5151,
        price: 1000,
        unitPrice: 1000,
        discount: "20% OFF",
        tag: "table",
        quantity: 1,
      },
      {
        id: 14,
        name: "Bed for Partners",
        image_link:
          "https://img.freepik.com/free-photo/beautiful-bed-middle-bedroom_23-2148982015.jpg?size=626&ext=jpg&uid=R116779415&ga=GA1.2.1510566008.1693293482&semt=sph",
        rating: 885,
        price: 552,
        unitPrice: 552,
        discount: "20% OFF",
        tag: "room",
        quantity: 1,
      },
      {
        id: 15,
        name: "Office Shelves",
        image_link:
          "https://img.freepik.com/free-photo/high-angle-desk-arrangement-with-plants_23-2149383630.jpg?w=996&t=st=1695218224~exp=1695218824~hmac=3a418fcc28f54a963f879a7166a7e9af95bd8ca80a78c14a2093771bcb7f1fa2",
        rating: 862,
        price: 125,
        unitPrice: 125,
        discount: "10% OFF",
        tag: "table",
        quantity: 1,
      },
      {
        id: 16,
        name: "Dinning Table for Family",
        image_link:
          "https://img.freepik.com/premium-photo/3d-rendering-modern-living-room-interior-design-inspiration_674881-1711.jpg",
        rating: 523,
        price: 222,
        unitPrice: 222,
        discount: "40% OFF",
        tag: "table",
        quantity: 1,
      },
      {
        id: 17,
        name: "Dinning table for Family",
        image_link:
          "https://img.freepik.com/premium-photo/wooden-table-chair-modern-dinning-room-home-interior-dinning-room-home_73503-912.jpg?w=996",
        rating: 66,
        price: 1210,
        unitPrice: 1210,
        discount: "20% OFF",
        tag: "table",
        quantity: 1,
      },
      {
        id: 18,
        name: "Sofa for Partners",
        image_link:
          "https://img.freepik.com/free-photo/gray-sofa-white-living-room_43614-796.jpg?t=st=1695218486~exp=1695219086~hmac=050a76b39cc7af073c0f9a786d4c3b0033ac5618737c52430701bd70198d1732",
        rating: 12,
        price: 102,
        unitPrice: 102,
        discount: "20% OFF",
        tag: "sofa",
        quantity: 1,
      },
      {
        id: 19,
        name: "Dinning Table for Partners",
        image_link:
          "https://img.freepik.com/free-photo/modern-luxury-authentic-dining-room-interior-design_53876-126791.jpg?t=st=1695218355~exp=1695218955~hmac=42f827ef394a23dd475e7daec30d2aeae7177f5cbd7fb4fdb61c3b80091eb9f4",
        rating: 1205,
        price: 215,
        unitPrice: 215,
        discount: "70% OFF",
        tag: "table",
        quantity: 1,
      },
      {
        id: 20,
        name: "Dinning Table for Family",
        image_link:
          "https://img.freepik.com/free-photo/delicious-breakfast-with-bananas-white-table_23-2148981996.jpg?t=st=1695218355~exp=1695218955~hmac=c6b40c01fd0ce073391985bfd6a6b0d977947658a2796cf19b69ae420b5bc379",
        rating: 1610,
        price: 102,
        unitPrice: 102,
        discount: "90% OFF",
        tag: "table",
        quantity: 1,
      },
    ]);
    const error = ref(null);
    const search = ref("");

    const Logout = () => {
      firebase
        .auth()
        .signOut()
        .then(() => console.log("Sign out"))
        .catch((err) => alert(err.message));
    };

    const filteredItems = ref([]);

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
    left: 190px;
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
        .proimage {
          width: 70px;
          height: 50px;
          background-position: center;
          background-size: cover;
        }
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
