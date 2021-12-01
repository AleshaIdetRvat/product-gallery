<template>
    <form class="new-product-form">
        <form-fieldset
            legend="Наименование товара"
            placeholder="Введите наименование товара"
            :isInvalid="false"
            :isRequired="true"
        />
        <form-fieldset
            legend="Описание товара"
            placeholder="Введите описание товара"
            :isInvalid="false"
            :isRequired="false"
        />
        <form-fieldset
            legend="Ссылка на изображение товара"
            placeholder="Введите ссылку"
            :isInvalid="false"
        />
        <form-fieldset
            legend="Цена товара"
            placeholder="Введите цену"
            :isInvalid="false"
        />
    </form>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
