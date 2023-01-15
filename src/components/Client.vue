<script setup></script>
<template>
  <!-- Clients -->
  <div
    class="container mt-20 mx-auto px-8 md:py-4 md:px-14 lg:px-24 md:w-11/12"
  >
    <section class="w-full">
      <h2 id="clients" class="secondary-title">Clients</h2>
      <p class="section-paragraph">
        I’ve had the pleasure of working with these companies.
      </p>

      <!-- Clients -->
      <div class="relative my-10 h-64 overflow-hidden">
        <div
          v-for="(client, i) in clients"
          :key="client.id"
          :data-index="i"
          class="w-full absolute inset-0 bg-body border border-nav p-16 lg:px-32 lg:py-14 lg:space-x-32 flex justify-center 
		  lg:justify-start lg:items-center flex-wrap lg:flex-nowrap"
        >
          <!-- Client logo -->
          <div class="mb-6 lg:mb-0">
            <img
              v-if="client.img"
              :src="imageUrlFor(client.img)"
              class="w-44 h-auto"
            />
          </div>
          <!-- Client info -->
          <div
            class="flex flex-wrap justify-center text-center lg:text-left lg:block"
          >
            <h3 class="text-white text-3xl font-semibold">{{ client.name }}</h3>
            <div
              class="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8"
            >
              <div class="badge" v-for="(role,i) in client.roles" :key="i">{{ role }}</div>
            </div>

            <p class="text-secondary">
            </p>
          </div>
        </div>
      </div>
      <div class="flex justify-center space-x-5">
        <button class="badge" @click="onPrevious()">
          <i class="fas fa-chevron-left"></i>
          </button>

        <button class="badge" @click="onNext()"> 
           <i class="fas fa-chevron-right"></i>
         </button>
      </div>
    </section>
  </div>
</template>
<script>
import { client, imageUrlFor } from "../client";

export default {
  name: "Client",
  data() {
    return {
      clients: [],
      currentSlideIndex: 0,
    };
  },
  methods: {
    imageUrlFor,
    animate(element, animation, onAnimateEnd) {
      const plainClasslList = Array.prototype.slice.call(element.classList);
      const animationsToRemove = plainClasslList.filter((className) =>
        className.includes("animate__")
      );
      element.classList.remove("hidden", ...animationsToRemove);
      element.classList.add("animate__animated", animation);

      if (onAnimateEnd) {
        element.addEventListener("animationend", onAnimateEnd, { once: true });
      }
    },
    getNextSlideIndex() {
      if (this.currentSlideIndex + 1 < this.clients.length) {
        return this.currentSlideIndex + 1;
      }
      return 0;
    },
    getPrevSlideIndex() {
      if (this.currentSlideIndex > 0) {
        return this.currentSlideIndex - 1;
      }
      return this.clients.length - 1;
    },
    onNext() {
      const element = document.querySelector(
        `[data-index="${this.currentSlideIndex}"]`
      );
      this.animate(element, "animate__fadeOutLeft", () =>
        element.classList.add("hidden")
      );

      const nextSlideIndex = this.getNextSlideIndex();
      const NextElement = document.querySelector(
        `[data-index="${nextSlideIndex}"]`
      );
      this.animate(NextElement, "animate__fadeInRight");
      this.currentSlideIndex = nextSlideIndex;
    },
    onPrevious() {
      const element = document.querySelector(
        `[data-index="${this.currentSlideIndex}"]`
      );
      this.animate(
        element,
        "animate__fadeOutRight",
        element.classList.add("hidden")
      );

      const prevSlideIndex = this.getPrevSlideIndex();
      const prevElement = document.querySelector(
        `[data-index="${prevSlideIndex}"]`
      );
      this.animate(prevElement, "animate__fadeInLeft");
      this.currentSlideIndex = prevSlideIndex;
    },
    fetchData() {
      let QUERY = '*[_type == "client"]';
      client
        .fetch(QUERY)
        .then((clients) => {
          this.clients = clients;
          console.log(clients)
        })
        .then(() => {
          this.clients.forEach((slide, i) => {
            if (i !== this.currentSlideIndex) {
              const element = document.querySelector(`[data-index="${i}"]`);
              element.classList.add("hidden");
            }
          });
        });
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
