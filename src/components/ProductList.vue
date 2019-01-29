<template>
    <div>
        <div v-for="p in products" v-bind:key="p.id" class="card m-1 p-1 bg-light">
            <h4>
                {{p.name}}
                <span class="badge badge-pill badge-primary float-right">
                    {{ p.price*69 | currency }}
                </span>
            </h4>
            <div class="card-text bg-white p-1">{{ p.description }}
                <button class="btn btn-success btn-sm float-right"
                        v-on:click="handleProductAdd(p)">
                    Add To Cart
                </button>
            </div>
        </div>
        <PageControls/>
    </div>
</template>

<script>

import {mapGetters, mapMutations} from "vuex";
import PageControls from "./PageControls.vue"; 

export default {
    components: {PageControls},
    computed: {
        ...mapGetters({ products: "processedProducts"})
    },
    filters: {
        currency(value) {
            return new Intl.NumberFormat("en-US",
                { style: "currency", currency: "INR" }).format(value);
        }
    },
    methods: {
        ...mapMutations({addProducts:"cart/addProduct"}), //cart is a namespace to separate and avoid confusion from main store
        handleProductAdd(product){
            this.addProducts(product);
            this.$router.push("/cart"); //after product added, this line navigates user to /cart URL
        }
    },
}
</script>