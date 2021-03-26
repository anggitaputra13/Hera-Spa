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
              <li class="breadcrumb-item">
                <router-link to="/facials">Facials</router-link>
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
          <img :src="'../images/' + products.image" class="img-fluid shadow" />
        </div>
        <div class="col-md-6">
          <h2>
            <strong>{{ products.name }}</strong>
          </h2>
          <hr />
          <h5>
            Price    : <strong> Rp.{{ products.price }},00</strong>
          </h5>
          <br>
          <h5>
            Duration : <strong>{{ products.duration }} Hours</strong>
          </h5>
          <br>
          <h5>
            Person   : <strong>{{ products.person }} Person</strong>
          </h5>
          <br />
          <form v-on:submit.prevent>
            <!-- <div class="form-group">
              <label for="jml_pesanan">Order Quantity</label>
              <input
                type="number"
                class="form-control"
                placeholder="Example : 1 (person)"
                v-model="pesan.jml_pesanan"
              />
            </div>
            <div class="form-group">
              <label for="jml_waktu">Duration</label>
              <input
                type="number"
                class="form-control"
                placeholder="Example : 1 (hours)"
                v-model="pesan.jml_waktu"
              />
            </div>
            <div class="form-group">
              <label for="nama_pemesan">Enter Your Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Example : John"
                v-model="pesan.nama_pemesana"
              />
            </div>
            <div class="form-group">
              <label for="alamat_pemesan">Enter Your Adress</label>
              <input
                type="text"
                class="form-control"
                placeholder="Example : Jl.Ry Legian Kuta"
                v-model="pesan.alamat_pemesan"
              />
            </div>
            <div class="form-group">
              <label for="tgl_pemesan">Date</label>
              <input
                type="text"
                class="form-control"
                placeholder="Example : dd-mm-yyyy  "
                v-model="pesan.tgl_pemesan"
              />
            </div>
            <div class="form-group">
              <label for="jam_pemesan">Time</label>
              <input
                type="text"
                class="form-control"
                placeholder="Example : 14.00  "
                v-model="pesan.jam_pemesan"
              />
            </div>
            <hr />
            <h5 v-if="pesan.jml_pesanan === Null && pesan.jml_pesanan === Null">
              Total Harga : <strong> Rp.0,00</strong>
            </h5>
            <h5 v-else>
              Total Harga :
              <strong>
                Rp.{{
                  products.price * pesan.jml_pesanan * pesan.jml_waktu
                }},00</strong
              >
            </h5> -->
            <button type="submit" class="btn btn-success" @click="pemesanan">
              <b-icon-cart></b-icon-cart> Order Now
            </button>
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
  name: "Detail-facials",
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
        .post(
          "https://my-json-server.typicode.com/anggitaputra13/Hera-Spa/keranjang",
          this.pesan
        )
        .then(() => {
          console.log("Berhasil");
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    axios
      .get(
        "https://my-json-server.typicode.com/anggitaputra13/Hera-Spa/facials/" +
          this.$route.params.id
      )
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>