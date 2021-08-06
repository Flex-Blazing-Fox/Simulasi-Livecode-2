<template>
  <div class=" container">
          <h1>Content</h1>
        <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
        <div class="row justify-content-start">
            <ProductList v-for="item in inventory" :key="item.id" :items="item"/>
        </div>
        
      </div>
</template>

<script>
import ProductList from '../components/ProductLIst.vue'

export default {
    name: 'Product',
    components: { ProductList },
    computed: {
        inventory(){
            return this.$store.state.inventories
        }
    },
    created(){
        this.$store.dispatch('fetchInventories')
    }
}
</script>

<style>

</style>