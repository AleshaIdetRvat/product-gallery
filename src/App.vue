<template>
    <div class="app">
        <modal-window v-if="$screen.width < 768" v-model:isShow="isModalShow">
            <NewProductForm @addNewProduct="handleAddNewPost" />
        </modal-window>

        <div class="app__row">
            <Sidebar
                v-if="$screen.width >= 768"
                @addNewProduct="handleAddNewPost"
            />
            <div class="app__product-list">
                <div class="app__head-bar">
                    <button
                        @click="showModalWindow"
                        class="main-button"
                        v-if="$screen.width < 768"
                    >
                        Добавить товар
                    </button>
                    <main-select
                        class="app__product-list-selector"
                        v-model="selectedSortOption"
                        :options="sortOptions"
                    />
                </div>

                <ProductList
                    @delete="handleDelete"
                    :products="sortedProducts"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from "@/components/Sidebar"
import ProductList from "@/components/ProductList"
import testPhoto from "@/assets/image/testPhoto.png"
import NewProductForm from "@/components/NewProductForm.vue"
import { prettyPrice } from "@/utils/prettyPrice"
import "@/assets/style/style.scss"

export default {
    components: {
        Sidebar,
        NewProductForm,
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
                case "max":
                    sortFunction = (product1, product2) =>
                        product1.price.number - product2.price.number
                    break
                case "min":
                    sortFunction = (product1, product2) =>
                        product2.price.number - product1.price.number
                    break
                default:
                    sortFunction = (product1, product2) =>
                        product2.id - product1.id
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
            const newProducts = [newProduct, ...this.products]
            this.products = newProducts

            localStorage.setItem(
                "productsListData",
                JSON.stringify(newProducts)
            )

            this.isModalShow = false
        },

        handleDelete(id) {
            const newProducts = this.products.filter((item) => item.id !== id)

            this.products = newProducts

            localStorage.setItem(
                "productsListData",
                JSON.stringify(newProducts)
            )
        },
        showModalWindow() {
            this.isModalShow = true
        },
    },
    mounted() {
        console.log(this.$screen)

        const localStoragePosts = localStorage.getItem("productsListData")

        let initialProducts = []

        if (localStoragePosts !== null) {
            initialProducts = JSON.parse(localStoragePosts)
        } else {
            const testProduct = {
                title: "Наименование товара",
                description:
                    "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
                imageLink: testPhoto,
                price: { pretty: "10 000", number: 10000 },
                id: 1638477282016,
            }

            for (let i = 0; i < 20; i++) {
                const randomPrice = Math.floor(Math.random() * 10000)

                initialProducts.push({
                    ...testProduct,
                    price: {
                        number: randomPrice,
                        pretty: prettyPrice(randomPrice),
                    },
                    id: testProduct.id + i,
                })
            }

            localStorage.setItem(
                "productsListData",
                JSON.stringify(initialProducts)
            )
        }

        this.products = initialProducts
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
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
    &__head-bar {
        display: flex;
        justify-content: flex-end;
        @media (max-width: 768px) {
            justify-content: space-between;
        }
    }
    &__product-list-selector {
        align-self: flex-end;
    }
}
</style>
