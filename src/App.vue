<template>
    <div class="app">
        <div class="app__row">
            <Sidebar @addNewProduct="handleAddNewPost" />
            <ProductCard :product="products[0]" />
        </div>
    </div>
</template>

<script>
import Sidebar from "@/components/Sidebar"
import ProductCard from "@/components/ProductCard"
import "@/assets/style.scss"

export default {
    components: {
        Sidebar,
        ProductCard,
    },
    data() {
        return {
            products: [
                {
                    title: "Наименование товара",
                    description:
                        "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
                    imageLink:
                        "https://i.scdn.co/image/ab67616d00001e0278f71c0d2fe34592a3c18f80",
                    price: { pretty: "10 000", number: 10000 },
                    id: 1638477282016,
                },
            ],
        }
    },
    methods: {
        handleAddNewPost(newProduct) {
            this.products = [newProduct, ...this.products]
            console.log("newProduct", newProduct)
        },
    },
}
</script>

<style lang="scss">
.app {
    max-width: 1440px;
    margin: 0 auto;
    padding: 32px;
    padding-bottom: 0;
    color: var(--text);

    &__row {
        display: flex;
        gap: 16px;
    }
}
</style>
