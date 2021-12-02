<template>
    <aside class="sidebar">
        <div class="sidebar__column">
            <h2 class="sidebar__title">Добавление товара</h2>
            <div class="sidebar__body">
                <NewProductForm @addNewProduct="handleAddNewPost" />
            </div>
        </div>
    </aside>
</template>

<script>
import NewProductForm from "@/components/NewProductForm"

export default {
    components: { NewProductForm },
    props: {},
    methods: {
        handleAddNewPost(newProduct) {
            this.$emit("addNewProduct", newProduct)
        },
    },
}
</script>

<style lang="scss">
.sidebar {
    max-width: 332px;

    &__column {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    &__title {
        font-weight: 600;
        font-size: 28px;
        color: var(--text);
    }

    &__body {
    }
}
</style>
