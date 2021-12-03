<template>
    <div class="app">
        <div class="app__row">
            <Sidebar @addNewProduct="handleAddNewPost" />
            <div class="app__product-list">
                <main-select
                    v-model="selectedSortOption"
                    :options="sortOptions"
                />
            </div>

            <ProductList @delete="handleDelete" :products="sortedProducts" />
        </div>
    </div>
</template>

<script>
import Sidebar from "@/components/Sidebar"
import ProductList from "@/components/ProductList"
import testPhoto from "@/assets/image/testPhoto.png"
import { prettyPrice } from "@/utils/prettyPrice"
import "@/assets/style/style.scss"

export default {
    components: {
        Sidebar,
        ProductList,
    },
    computed: {
        sortedProducts() {
            let sortFunction
            switch (this.selectedSortOption) {
                case "title":
                    sortFunction = (product1, product2) =>
                        product1[this.selectedSortOption].localeCompare(
                            product2[this.selectedSortOption]
                        )
                    break
                case "date":
                    sortFunction = (product1, product2) =>
                        product1.id - product2.id
                    break
                default:
                    return [...this.products]
            }
            return [...this.products].sort(sortFunction)
        },
    },
    data() {
        return {
            products: [],
            isModalShow: false,
            sortOptions: [
                { value: "title", name: "По наименованию" },
                { value: "max", name: "По возрастанию цены" },
                { value: "min", name: "По убыванию цены" },
            ],
            selectedSortOption: "",
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
            imageLink: testPhoto,
            price: { pretty: "10 000", number: 10000 },
            id: 1638477282016,
        }

        const testDataArray = []

        for (let i = 0; i < 20; i++) {
            const randomPrice = Math.floor(Math.random() * 10000)

            testDataArray.push({
                ...testProduct,
                price: {
                    number: randomPrice,
                    pretty: prettyPrice(randomPrice),
                },
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

    &__product-list {
    }
}
</style>
