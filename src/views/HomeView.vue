<script setup>
import { ref } from 'vue'
import HeroComponent from '@/components/HeroComponent.vue'
import FeaturedComponent from '@/components/FeaturedComponent.vue'
import CartComponent from '@/components/CartComponent.vue'
import BookListing from '@/components/BookListing.vue'

import { useBooksStore } from '@/stores/books';
import { useCartStore } from '@/stores/cart';
const booksStore = useBooksStore();
const cartStore = useCartStore();

</script>

<template>
     <main v-if="showCart">
    <CartComponent 
       v-if="cartStore.showCart"
    :cart="cartStore.cart"
    @hide-cart="cartStore.showCart = false"
    @increment-book="cartStore.incrementBookToCart"
    @decrement-book="decrementBookToCart"
    />
  </main>
  <main v-else>
    <button @click="showCart = true ">ir para carrinho</button>
    <HeroComponent />
    <FeaturedComponent />
    <BookListing  :books="booksStore.books"
      @add-to-cart="cartStore.addToCart"/>
  </main>
  <footer-component />
</template>