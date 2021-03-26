<template>
  <div class="home">
    <Navbar />
    <Hero />
    <Aboutcomp />
    
    <div class="container">
      <div class="d-none d-md-block">
        <div class="row mt-4">
        <div class="col" id="col-1">
          <h2>Best <strong>Packet</strong></h2>
        </div>
        <div class="col" id="col-2">
          <router-link to="/packet" class="btn btn-success float-right"
            ><ib-icon-eye></ib-icon-eye>Lihat Semua</router-link
          >
        </div>
      </div>
      </div>
      <!-- Versi Mobile -->
      <div class="d-sm-block d-md-none">
        <div class="row mt-4 ">
        <div class="col" id="col-1">
          <h4>Best <strong>Packet</strong></h4>
        </div>
        <div class="col" id="col-2">
          <router-link to="/packet" class="btn btn-success float-right"
            ><ib-icon-eye></ib-icon-eye>Lihat Semua</router-link
          >
        </div>
      </div>
      </div>
      <!-- end versi mobile -->
      <div class="row mb-1">
        <div class="col-md-4 mt-4" v-for="product in products" :key="product.id">
          <div v-if="product.id<7">
             <Cardproduct :product="product"/>
          </div>
        </div>
      </div>
    </div>
    <Album />
    <Review />
    <Location />
    <About />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import Cardproduct from "@/components/packet/Cardproduct.vue";
import Aboutcomp from "@/components/Aboutcomp.vue";
import Album from "@/components/Album.vue";
import Location from "@/components/Location.vue";
import About from "@/views/About.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";
import Review from '../components/review.vue';

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    Aboutcomp,
    Cardproduct,
    Album,
    Location,
    About,
    Footer,
    Review,
  },
  data() {
    return {
      products: [],
    };
  },
  // get data from backend
  methods: {
    setProduct(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("https://my-json-server.typicode.com/anggitaputra13/Hera-Spa/bestproducts")
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
};
</script>
