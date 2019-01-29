<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col bg-dark text-white">
                <a class="navbar-brand">SPORTS STORE</a>
                <CartSummary/>
            </div>
        </div>
        <div class="row">
            <div class="col-3 bg-info p-2">
                <CategoryControls/>
            </div>
            <div class="col-9 p-2">
                <Search/>
                <ProductList/>
            </div>
        </div>
    </div>
</template>

<script>

import ProductList from "./ProductList.vue";
import CategoryControls from "./CategoryControls.vue";
import CartSummary from "./CartSummary.vue";

import { mapMutations } from "vuex";
import Search from "./Search";

export default {
    components:{
        ProductList,
        CategoryControls,
        CartSummary,
        Search
    },
    methods: {
        ...mapMutations(["setShowSearch"])
    },
}
</script>