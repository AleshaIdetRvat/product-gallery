<template>
    <div class="product-list">
        <div v-if="products.length > 0" class="product-list__container">
            <transition-group
                class="product-list__grid list"
                name="list-complete"
                tag="div"
            >
                <ProductCard
                    class="product-list__item list-complete-item"
                    v-for="item in products"
                    :product="item"
                    :key="item.id"
                    @delete="$emit('delete', item.id)"
                />
            </transition-group>
        </div>
    </div>
</template>

<script>
import ProductCard from "@/components/ProductCard"
export default {
    components: {
        ProductCard,
    },
    props: {
        products: {
            type: Array,
            required: true,
        },
    },
}
</script>

<style lang="scss" scoped>
.product-list {
    flex: 1 1 auto;
    &__container {
    }

    &__grid {
        transition: 0.5s;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
        gap: 16px;
    }

    &__item {
    }
}

.list-complete-item {
}
.list-complete-move {
    transition: 0.7s;
}
.list-complete-enter-from,
.list-complete-leave-to {
    opacity: 0;
    transform: scale(80%);
}

.list-complete-leave-active {
    transform: scale(10%);
    opacity: 0;
    transition: 0.5s;
    transition: opacity 0.3s, transform 0.5s;
}

.list-complete-leave-active {
    position: absolute;

    left: 30%;
}

.list {
    position: relative;
    width: 100%;
}
</style>
