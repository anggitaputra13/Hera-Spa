<template>
  <div>
    <div class="card shadow card-prodect">
      <img :src="'images/'+product.image" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">
            Rp.{{ product.price }},00
        </p>
        <router-link class="btn btn-success" :to="'/packet/'+product.id"><b-icon-cart></b-icon-cart> Book Now</router-link>
      </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Cardproduct',
    props: ['product']
}
</script>

<style>

</style>