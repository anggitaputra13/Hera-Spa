<template>
  <div>
    <div class="card shadow card-prodect">
      <img :src="'images/'+product.image" class="card-img-top" style="width: 100%; height: 100%;">
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">
            Rp.{{ product.price }},00
        </p>
        <router-link class="btn btn-success" :to="'/fullbody/'+product.id"><b-icon-cart></b-icon-cart> Book Now</router-link>
      </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Cardproductfullbody',
    props: ['product']
}
</script>

<style>

</style>