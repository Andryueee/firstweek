let app = new Vue({
    el: '#app',
    methods: {
        updateProduct(variantImage) {
            this.image = variantImage
        },

        addToCart() {
            this.cart += 1
        },
        deleteFromCart() {
            if (this.cart > 0) {
                this.cart -= 1;
            }
        }
    },

    data: {
        product: "Socks",
        image: "./assets/vmSocks-green-onWhite.jpg",
        altText: "A pair of socks",
        cart: 0,
        inStock: true,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: "./assets/vmSocks-green-onWhite.jpg",
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: "./assets/vmSocks-blue-onWhite.jpg",
            }
        ],

    }
})

 