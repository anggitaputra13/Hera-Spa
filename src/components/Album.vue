<template> 
  <div class="album py-5 bg-light ">
    <div class="container">
      <div class="col d-none d-md-block">
        <div class="row mt-2">
      <div class="col">
        <h2 style="text-align: center">
          <strong>Album Galery</strong>
        </h2>
        <hr>
        <br />
      </div>
      </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-4 g-4 ">
        <div class="col mb-3">
          <div class="card shadow-sm">
           <img :src="'images/foot-massage.jpg'" alt="">
          </div>
        </div>
        <div class="col mb-3">
          <div class="card shadow-sm">
           <img :src="'images/back-massage.jpg'" alt="">
          </div>
        </div>
        <div class="col mb-3">
          <div class="card shadow-sm">
           <img :src="'images/stone-massage.jpg'" alt="">
          </div>
        </div>
        <div class="col mb-3">
          <div class="card shadow-sm">
           <img :src="'images/herbal-massage.jpg'" alt="">
          </div>
        </div>
        <div class="col mb-3">
          <div class="card shadow-sm">
           <img :src="'images/scrub-massage.jpg'" alt="">
          </div>
        </div>
        <div class="col mb-3">
          <div class="card shadow-sm">
           <img :src="'images/foot-massage.jpg'" alt="">
          </div>
        </div>
        <div class="col mb-3">
          <div class="card shadow-sm">
           <img :src="'images/balinese-massage.jpg'" alt="">
          </div>
        </div>
        <div class="col mb-3">
          <div class="card shadow-sm">
           <img :src="'images/facial.jpg'" alt="">
          </div>
        </div>
      </div>
      </div>
      <!-- Versi Mobile -->
      <div class="col d-sm-block d-md-none">
        <div class="row mt-2 col d-sm-block d-md-none">
      <div class="col">
        <h4 style="text-align: center">
          <strong>Album Galery</strong>
        </h4>
        <hr>
      </div>
      </div>
      <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 2px 2px 4px #1C1C1C; "
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        img-src="/images/foot-massage.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        img-src="/images/back-massage.jpg" 
      ></b-carousel-slide>
      <b-carousel-slide
        img-src="/images/stone-massage.jpg" 
      ></b-carousel-slide>
       <b-carousel-slide
        img-src="/images/herbal-massage.jpg" 
      ></b-carousel-slide>
      <b-carousel-slide
        img-src="/images/scrub-massage.jfif"
      ></b-carousel-slide>
      <b-carousel-slide
        img-src="images/balinese-massage.jpg" 
      ></b-carousel-slide>
      <b-carousel-slide
        img-src="/images/facial.jfif" 
      ></b-carousel-slide>
       <b-carousel-slide
        img-src="/images/herbal-massage.jpg" 
      ></b-carousel-slide>
    </b-carousel>
      </div>
      
    </div>
  </div>
  
</template>

<script>
export default {
    name: "Album",
}
</script>

<style>

</style>