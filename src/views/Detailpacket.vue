<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row mt-5">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/packet">Packet Massage</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Order Packet
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-6">
          <img :src="'../images/' + products.image" class="img-fluid shadow"/>
        </div>
        <div class="col-md-6">
          <h2>
            <strong>{{ products.name }}</strong>
          </h2>
          <hr />
          <h5> Harga : <strong> Rp.{{ products.price }},00/Hours/Person</strong></h5>
          <br>
          <form v-on:submit.prevent>
            <div class="form-group">
              <label for="jml_pesanan">Order Quantity</label>
              <input type="number" class="form-control" placeholder="Example : 1 (person)" v-model="pesan.jml_pesanan"/>
            </div>
            <div class="form-group">
              <label for="jml_waktu">Duration</label>
              <input type="number" class="form-control" placeholder="Example : 1 (hours)" v-model="pesan.jml_waktu" />
            </div>
            <button type="submit" class="btn btn-success" @click="pemesanan"><b-icon-cart></b-icon-cart> Order</button>
          </form>
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

export default {
  name: "Detailpacket",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      products: {},
      pesan: {},
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
    pemesanan() {
        this.pesan.products = this.products;
        axios
            .post("https://my-json-server.typicode.com/anggitaputra13/Hera-Spa/keranjang", this.pesan)
            .then(() =>{
                console.log("Berhasil");
            })
            .catch((err) => console.log(err))
    } 
  },
  mounted() {
    axios
      .get(
        "https://my-json-server.typicode.com/anggitaputra13/Hera-Spa/products/" +
          this.$route.params.id
      )
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>