var app = new Vue({
  el: '#app',
  data: {
    product: 'Vue Socks',
    activeVariant: 0,
    variants: [
      { // this is weird.. why is this not an array?
        color: 'green',
        stockCount: 13,
        image: './assets/greenSocks.png'
      }, {
        color: 'blue',
        stockCount: 2,
        image: './assets/blueSocks.png'
      }
    ],
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    customerCart: 0
  },
  methods: {
    addToCart() {
      this.customerCart++;
      this.variants[this.activeVariant].stockCount--
    },
    setActiveVariant(variantIndex) {
      this.activeVariant = variantIndex;
    }
  }
});
