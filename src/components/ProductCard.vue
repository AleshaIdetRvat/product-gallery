<template>
    <div class="product-card">
        <delete-btn @click="handleClick" class="product-card__delete-btn" />

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
    methods: {
        handleClick() {
            this.$emit("delete", this.product.id)
        },
    },
}
</script>

<style lang="scss" scoped>
.product-card {
    transition: 0.2s;
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 450px;
    width: 100%;
    margin: 0 auto;
    border-radius: 4px;
    background-color: var(--white);
    box-shadow: var(--big-shadow);

    &:hover {
        box-shadow: var(--big-shadow), var(--big-shadow);

        .product-card__delete-btn {
            opacity: 1;
            pointer-events: all;
            transform: scale(100%);

            &:hover {
                transform: scale(95%);
                opacity: 0.8;
            }
        }
    }

    &__delete-btn {
        position: absolute;
        right: -8px;
        top: -8px;
        opacity: 0;
        pointer-events: none;
        cursor: pointer;
        transform: scale(60%);
        &:focus {
            opacity: 1;
        }

        @media (max-width: 768px) {
            opacity: 1;
            transform: scale(100%);
        }
    }

    &__header {
        height: 200px;
    }

    &__image {
        border-radius: 4px 4px 0 0;

        object-fit: cover;
        height: 100%;
        width: 100%;
    }

    &__content {
        height: 100%;
        display: grid;
        grid-template-rows: auto 1fr auto;

        gap: 16px;
        padding: 16px;
        padding-bottom: 24px;
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
        margin-top: 16px;
        font-weight: 600;
        font-size: 1.5em;
    }
}
</style>
