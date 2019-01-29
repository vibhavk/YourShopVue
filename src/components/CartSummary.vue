<template>
    <div class="float-right">
        <small>
            Your cart:
            <span v-if="itemCount > 0">
                {{ itemCount }} item(s) {{ totalPrice*69 | currency }}
            </span>
            <span v-else>
                (empty)
            </span>
        </small>
        <router-link to="/cart" class="btn btn-sm bg-dark text-white"
                v-bind:disabled="itemCount == 0">
            <i class="fa fa-shopping-cart"></i>
        </router-link>
    </div>
</template>

<script>
//router-link has an i element which can be styled using FontAwesome library
    import { mapGetters } from 'vuex';
    export default {
        computed: {
            ...mapGetters({
                itemCount: "cart/itemCount",
                totalPrice: "cart/totalPrice"
            })
        }
    }
</script>