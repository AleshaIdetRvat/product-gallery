<template>
    <div class="app">
        <div class="app__row">
            <Sidebar @addNewProduct="handleAddNewPost" />
            <ProductList @delete="handleDelete" :products="products" />
        </div>
    </div>
</template>

<script>
import Sidebar from "@/components/Sidebar"
import ProductList from "@/components/ProductList"
import "@/assets/style/style.scss"

export default {
    components: {
        Sidebar,
        ProductList,
    },
    data() {
        return {
            products: [],
        }
    },
    methods: {
        handleAddNewPost(newProduct) {
            this.products = [newProduct, ...this.products]
            console.log("newProduct", newProduct)
        },

        handleDelete(id) {
            this.products = this.products.filter((item) => item.id !== id)
        },
    },
    mounted() {
        const testProduct = {
            title: "Наименование товара",
            description:
                "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
            imageLink:
                "https://i.scdn.co/image/ab67616d00001e0278f71c0d2fe34592a3c18f80",
            price: { pretty: "10 000", number: 10000 },
            id: 1638477282016,
        }

        const testDataArray = []

        for (let i = 0; i < 20; i++) {
            testDataArray.push({
                ...testProduct,
                id: testProduct.id + i,
            })
        }

        this.products = testDataArray
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

    @media (max-width: 768px) {
        padding: 16px;
    }

    &__row {
        display: flex;
        gap: 16px;
    }
}
</style>
