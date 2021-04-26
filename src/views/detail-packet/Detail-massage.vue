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
                <router-link to="/massage">Massage</router-link>
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
            <strong>{{ nama_paket = products.name }}</strong>
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
          <p v-if="errors.length">
              <b>Please correct the following error(s):</b>
              <ul>
                   <li v-for="(error, id) in errors" :key="id">{{ error }}</li>
              </ul>
          </p>
          <div class="form-group">
              <label for="tgl_transaksi">Order Date</label>
              <input
                type="date"
                class="form-control"
                v-model="tgl_transaksi"
                required
              />
          </div>
          <input type="hidden" name="nama_paket" id="nama_paket" v-model="nama_paket"> 
          <div class="form-group">
              <label for="jml_order">Order Quantity</label>
              <input
                type="number"
                class="form-control"
                placeholder="Example : 1 (person)"
                v-model="jml_order" required
              />
          </div>
          <div class="form-group">
              <label for="durasi">Duration</label>
              <input
                type="number"
                class="form-control"
                placeholder="Example : 1 (hours)"
                v-model="durasi"
                required
              />
          </div>
          <div class="form-group">
              <label for="nama">Enter Your Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Example : Anggita"
                v-model="nama"
                required
              />
          </div>
          <div class="form-group">
              <label for="no_telp">Phone Number</label>
              <input
                type="number"
                class="form-control"
                placeholder="Example : 08953xxxxxx"
                v-model="no_telp"
                required
              />
          </div>
          <div class="form-group">
              <label for="alamat">Enter Your Adress</label>
              <input
                type="text"
                class="form-control"
                placeholder="Example : Jl.Ry Legian Kuta"
                v-model="alamat"
                required
              />
          </div>
          <div class="form-group">
              <label for="tgl_pelaksanaan">Date</label>
              <input
                type="date"
                class="form-control"
                placeholder="Example : dd-mm-yyyy "
                v-model="tgl_pelaksanaan"
                required
              />
          </div>
          <div class="form-group">
              <label for="jam">Time</label>
              <b-form-timepicker
                class="form-control"
                v-model="jam"
                locale="en"
                required
              ></b-form-timepicker>
            </div>
          <hr />
          <h5 v-if="jml_order === Null && durasi === Null">
              Total Harga : <strong> Rp.0,00</strong>
          </h5>
          <h5 v-else>
              Total Harga :
              <strong>
                Rp.{{
                 total_harga = products.price * jml_order * durasi
                }},00</strong>
          </h5>
          <input type="hidden" name="total_harga" id="total_harga" v-model="total_harga">
          <button v-on:click="pemesanan" type="submit" class="btn btn-success">
              <b-icon-cart></b-icon-cart> Order Now
          </button> 
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
  name: "Detail-massage",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      errors: [],
      products: {},
      people: {},
      id: '',
      tgl_transaksi: new Date().toISOString().substr(0, 10),
      nama_paket: '',
      jml_order: '',
      durasi: '',
      total_harga: '',
      nama: '',
      no_telp: '',
      alamat: '',
      tgl_pelaksanaan: '',
      jam: '',
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
    pemesanan() {
     this.id +=1;

     let pesanan = {
       id: this.id,
       tgl_transaksi: this.tgl_transaksi,
       nama_paket: this.nama_paket,
       jml_order: this.jml_order,
       durasi: this.durasi,
       total_harga: this.total_harga,
       nama: this.nama,
       no_telp: this.no_telp,
       alamat: this.alamat,
       tgl_pelaksanaan: this.tgl_pelaksanaan,
       jam: this.jam
     }
     
     let orderan = {
       data: [
         pesanan
       ]
     }
     this.$confirm("Are you sure?").then(() => {
       if (this.tgl_transaksi && this.jml_order && this.durasi && this.nama  && this.no_telp  && this.alamat  && this.tgl_pelaksanaan  && this.jam ){
          axios.post('https://sheetdb.io/api/v1/j4tgu1s45gqxt', orderan)
          this.$alert("Your Transaction Successfull");
          this.$router.push('/')
       }else {
          this.errors = [];
          this.$alert("Your Transaction Failed");
          if (!this.tgl_pelaksanaan) {
              this.errors.push('Your order date required.');
         }
          if (!this.jml_order) {
              this.errors.push('Your order quantity is required.');
         }
         if (!this.durasi) {
              this.errors.push('Your order duration is required.');
         }
         if (!this.durasi) {
              this.errors.push('Your order duration is required.');
         }
          if (!this.nama) {
              this.errors.push('Your name is required.');
         }
         if (!this.no_telp) {
              this.errors.push('Your phone number is required.');
         }
         if (!this.alamat) {
              this.errors.push('Your address is required.');
         }
          if (!this.tgl_pelaksanaan) {
              this.errors.push('Your date order is required.');
         }
         if (!this.jam) {
              this.errors.push('Your time order is required.');
         }
       } 
     });
    },
  },
  mounted() {
    let _self = this

    axios.get("https://sheetdb.io/api/v1/j4tgu1s45gqxt/count").then((response)=>{
          _self.id = response.data.rows
        })

    axios
      .get(
        "https://my-json-server.typicode.com/anggitaputra13/Hera-Spa/massage/" +
          this.$route.params.id
      )
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>