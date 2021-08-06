<template>
    <div class="col-4">
        <div class="card mx-auto my-2" style="width: 12rem;">
        <img src="https://ecs7.tokopedia.net/img/cache/700/product-1/2019/9/27/64681733/64681733_2ff55480-4c52-4d1c-9989-59884d391b14_450_450" class="card-img-top" alt="...">
        <div class="card-body card-body ">
            <h5 class="card-title">{{ items.name }}</h5>
            <p class="card-text">Quantity: {{ items.quantity }}</p>
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'ProductList',
    props: ['items']
}
</script>

<style>

</style>