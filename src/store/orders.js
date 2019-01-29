import Axios from "axios";
const ORDERS_URL = "http://localhost:3500/orders";
export default {
    actions: {
        async storeOrder(context, order) {
            order.cartLines = context.rootState.cart.lines; //rootState property of action context is used to access cart modules's lines property
            return (await Axios.post(ORDERS_URL, order)).data.id;
        }
    }
} 
//we didn't do namespacing here, just for fun's sake...names will now be merged with those in main store.