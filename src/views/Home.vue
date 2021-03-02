<template>
  <div class="home">
    <Navbar />
    <Hero />
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
          <Cardproduct :product="product"/>
        </div>
      </div>
    </div>
    <About />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import Cardproduct from "@/components/Cardproduct.vue";
import About from "@/views/About.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    Cardproduct,
    About,
    Footer,
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
      .get("https://my-json-server.typicode.com/anggitaputra13/Hera-Spa/best-products")
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
};
</script>
