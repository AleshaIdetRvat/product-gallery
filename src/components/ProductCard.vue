<template>
    <div class="product-card">
        <delete-btn class="product-card__delete" />

        <header class="product-card__header">
            <img class="product-card__image" :src="product.imageLink" />
        </header>

        <div class="product-card__content">
            <h3 class="product-card__title">{{ product.title }}</h3>
            <p
                v-if="product.description !== ''"
                class="product-card__description"
            >
                {{ product.description }}
            </p>
            <span class="product-card__price"
                >{{ product.price.pretty }} руб.</span
            >
        </div>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style lang="scss" scoped>
.product-card {
    width: 332px;
    &__delete {
    }

    &__header {
        height: 200px;
    }

    &__image {
        object-fit: cover;
        height: 100%;
        width: 100%;
    }

    &__content {
        color: var(--text);
    }

    &__title {
        font-weight: 600;
        font-size: 1.25em;
    }

    &__description {
        font-size: 1em;
        line-height: 1.25em;
    }

    &__price {
        font-weight: 600;
        font-size: 1.5em;
        line-height: 1.875em;
    }
}
</style>
