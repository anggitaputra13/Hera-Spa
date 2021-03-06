<template>
  <div class="container">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      
      img-width="1024"
      img-height="480"
      style="text-shadow: 2px 2px 4px #1C1C1C; "
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="HERA SPA BALI"
        text="Enjoy And Relax With Us"
        img-src="/images/s1.JPG"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="HERA SPA BALI"
        text="Enjoy And Relax With Us"
        img-src="/images/s2.JPG" 
      ></b-carousel-slide>
      <b-carousel-slide
        caption="HERA SPA BALI"
        text="Enjoy And Relax With Us"
        img-src="/images/s3.JPG" 
      ></b-carousel-slide>
       <b-carousel-slide
      caption="HERA SPA BALI"
        text="Enjoy And Relax With Us"
        img-src="/images/s4.JPG" 
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>

  export default {
    Name: "Hero",
    data() {
      return {
        slide: 0,
        sliding: null
      }
    }
  }
</script>