<template>
    <aside class="sidebar">
        <div class="sidebar__column">
            <h2 class="sidebar__title">Добавление товара</h2>
            <div class="sidebar__body">
                <NewProductForm />
            </div>
        </div>
    </aside>
</template>

<script>
import NewProductForm from "@/components/NewProductForm"

export default {
    components: { NewProductForm },
    props: {},
}
</script>

<style lang="scss">
.sidebar {
    &__column {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    &__title {
    }

    &__body {
    }
}
</style>
