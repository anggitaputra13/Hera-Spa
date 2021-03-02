<template>
  <div>
    <Navbar />

    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2>Packet <strong>Massage</strong></h2>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Find a Packet Massage"
              aria-label="Find a Packet Massage"
              aria-describedby="basic-addon2"
              @keydown="searchProduct"
            />
            <span class="input-group-text" id="basic-addon2"><b-icon-search></b-icon-search></span>
          </div>
        </div>
      </div>
      <div class="row mb-4">
        <div
          class="col-md-4 mt-4"
          v-for="product in products"
          :key="product.id"
        >
          <Cardproduct :product="product" />
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";
import Cardproduct from "@/components/Cardproduct.vue";

export default {
  name: "Packet",
  components: {
    Navbar,
    Cardproduct,
    Footer,
  },
  data() {
    return {
      products: [],
      search: '',
    };
  },
  // get data from backend
  methods: {
    setProduct(data) {
      this.products = data;
    },
    searchProduct() {
    axios
      .get(
        "https://my-json-server.typicode.com/anggitaputra13/Hera-Spa/products?q="+this.search
      )
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  }
  },
  mounted() {
    axios
      .get(
        "https://my-json-server.typicode.com/anggitaputra13/Hera-Spa/products"
      )
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>