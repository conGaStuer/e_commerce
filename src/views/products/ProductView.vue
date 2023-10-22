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
      if (pages === "cart") {
        isView.value = !isView.value;
      } else {
        isView.value = false;
      }
    };
    const cart = ref([]);

    const items = ref();
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
    const filteredItems = ref([]);
    const list = ref([
      {
        id: 1,
        name: "1 BHK Royal Package for Bachelors",
        image_link:
          "https://img.freepik.com/free-photo/gray-sofa-brown-living-room-with-copy-space_43614-954.jpg?w=900&t=st=1695216791~exp=1695217391~hmac=b498a4acec3c6c910ec306ff56afc5cb685daf332b6b1c98fa7f764fcecaf723",
        rating: 2132,
        price: 564,
        discount: "20% OFF",
        tag: "package",
        quantity: 1,
        unitPrice: 564,
      },
      {
        id: 2,
        name: "1 BHK Royal Package for Partners",
        image_link:
          "https://img.freepik.com/free-photo/picture-frame-wall-with-scandinavian-home-interior_53876-139779.jpg?w=996&t=st=1695216905~exp=1695217505~hmac=93fcaa1ca4e8c915de3afd301bc7c3bbbf1a97ea0f4f6c578f195d6c58cdce55",
        rating: 1152,
        price: 5111,
        discount: "20% OFF",
        tag: "package",
        quantity: 1,
        unitPrice: 5111,
      },
      {
        id: 3,
        name: "1 BHK Royal Package for Family",
        image_link:
          "https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129803.jpg?w=996&t=st=1695217528~exp=1695218128~hmac=eaf10f9a817c0b4f49144b2a01b66e10c228e499e48772885125943f879af64e",
        rating: 315,
        price: 1615,
        discount: "30% OFF",
        tag: "package",
        quantity: 1,
        unitPrice: 1615,
      },
      {
        id: 4,
        name: "Minimal Chair",
        image_link:
          "https://img.freepik.com/free-photo/green-sofa-white-living-room-with-free-space_43614-834.jpg?w=900&t=st=1695217558~exp=1695218158~hmac=6b8e8c5035617eacdd8655ac34a0d53f560e503b8058f106b06cf4e1eefe303c",
        rating: 157,
        price: 851,
        discount: "20% OFF",
        tag: "chair",
        quantity: 1,
        unitPrice: 851,
      },
      {
        id: 5,
        name: "1 BHK Royal Package for Family",
        image_link:
          "https://img.freepik.com/free-photo/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg_1258-152155.jpg?w=1380&t=st=1695217600~exp=1695218200~hmac=82c630ab2515c3afb39d8ad650f209b371e0ff446a784f06f45c2b8adeda2540",
        rating: 644,
        price: 9111,
        discount: "10% OFF",
        tag: "package",
        quantity: 1,
        unitPrice: 9111,
      },
      {
        id: 6,
        name: "2 Seater Sofa",
        image_link:
          "https://img.freepik.com/free-photo/gray-sofa-white-living-room-interior-with-copy-space-3d-rendering_43614-802.jpg?w=1060&t=st=1695217641~exp=1695218241~hmac=e38892dc8d83b861caf53ff7103dade6c12d03891b2da3f3302a5ebfde1d639a",
        rating: 665,
        price: 561,
        discount: "20% OFF",
        tag: "sofa",
        quantity: 1,
        unitPrice: 561,
      },
      {
        id: 7,
        name: "Velvet Armchair",
        image_link:
          "https://img.freepik.com/free-photo/picture-frame-by-velvet-armchair_53876-132788.jpg?w=360&t=st=1695217691~exp=1695218291~hmac=cea71c1c1db963f3752e36dd1fa50b3d7f382a76a6981d9d72043274f3e57bad",
        rating: 1152,
        price: 313,
        discount: "40% OFF",
        tag: "chair",
        quantity: 1,
        unitPrice: 313,
      },
      {
        id: 8,
        name: "1 BHK Royal Package for Partners",
        image_link:
          "https://img.freepik.com/free-photo/living-room-mid-century-style-with-warm-colors-ai-generative_123827-23931.jpg?w=996&t=st=1695217743~exp=1695218343~hmac=b3f6606ab513a878181322b0c6155fbc12c20c86428bfddee9209a3086940080",
        rating: 622,
        price: 6111,
        discount: "20% OFF",
        tag: "package",
        quantity: 1,
        unitPrice: 6111,
      },
    ]);
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
.viewproduct {
  width: 950px;
  font-size: 20px;
  cursor: pointer;
  position: relative;
  top: 20px;
  left: 35.2px;
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
