<script setup>
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
</script>

<template>
  <section id="hero" class="d-flex align-items-center pt-lg-5 pb-lg-5 mb-lg-5">
    <div class="container pt-lg-5">
      <div class="row">
        <div
          class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
        >
          <h1>Better Solutions For Your Bulu</h1>
          <h2>We are team of talented designers making websites with Bootstrap</h2>
          <div class="d-flex justify-content-center justify-content-lg-start pt-5">
            <RouterLink to="/about" class="btn-get-started scrollto btn btn-primary"
              >Get Started</RouterLink
            >
          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2 hero-img">
          <DotLottieVue
            autoplay
            loop
            src="https://lottie.host/03f3d3af-bbd4-4e5c-b3b2-868f3ea03152/GC4gEXsNTs.json"
          ></DotLottieVue>
        </div>
      </div>
    </div>
  </section>
</template>