<template>
  <div>
    <Navbar />

    <div class="container">
      <div class="row mt-4">
        <div class="col d-none d-md-block">
          <div>
            <b-nav tabs fill>
              <router-link class="nav-link" style="color: black" to="/packet"
                >All Packet</router-link
              >
              <router-link class="nav-link" style="color: black" to="/massage"
                >Massage</router-link
              >
              <router-link class="nav-link" style="color: black" to="/facials"
                >Facials</router-link
              >
              <router-link class="nav-link" style="color: black" to="/fullbody"
                >Fullbody Massage</router-link
              >
              <router-link class="nav-link" style="color: black" to="/nails"
                >Nails</router-link
              >
            </b-nav>
          </div>
        </div>
        <div class="col d-sm-block d-md-none">
          <b-dropdown
            text="Packet Massage Category"
            block
            variant="success"
            class="m-2"
            menu-class="w-100"
          >
            <router-link class="nav-link" style="color: black" to="/packet"
              >All Packet</router-link
            >
            <router-link class="nav-link" style="color: black" to="/facials"
              >Facials</router-link
            >
            <router-link class="nav-link" style="color: black" to="/fullbody"
              >Fullbody Massage</router-link
            >
            <router-link class="nav-link" style="color: black" to="/massage"
              >Massage</router-link
            >
            <router-link class="nav-link" style="color: black" to="/nails"
              >Nails</router-link
            >
          </b-dropdown>
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
            <span class="input-group-text" id="basic-addon2"
              ><b-icon-search></b-icon-search
            ></span>
          </div>
        </div>
      </div>
      <div class="row mb-4">
        <div
          class="col-md-4 mt-4"
          v-for="product in products"
          :key="product.id"
        >
          <Cardproductmassage :product="product" />
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
import Cardproductmassage from "@/components/Cardproductmassage.vue";

export default {
  name: "Massage",
  components: {
    Navbar,
    Cardproductmassage,
    Footer,
  },
  data() {
    return {
      products: [],
      search: "",
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
          "https://my-json-server.typicode.com/anggitaputra13/Hera-Spa/massage?q=" +
            this.search
        )
        .then((response) => this.setProduct(response.data))
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    axios
      .get(
        "https://my-json-server.typicode.com/anggitaputra13/Hera-Spa/massage"
      )
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>