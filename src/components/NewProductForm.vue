<template>
    <form @submit="handleSubmit" class="new-product-form">
        <form-fieldset
            class="new-product-form__field"
            @input="handleInput(v$.title)"
            v-model="state.title"
            legend="Наименование товара"
            placeholder="Введите наименование товара"
            :isRequired="true"
            :isInvalid="v$.title.$error && v$.title.$dirty"
            :errorMessage="getErrorMessage(v$.title.$errors[0]?.$validator)"
        />
        <form-fieldset
            class="new-product-form__field description-field"
            v-model="state.description"
            legend="Описание товара"
            placeholder="Введите описание товара"
            :isRequired="false"
            :isTextarea="true"
        />
        <form-fieldset
            class="new-product-form__field"
            @input="handleInput(v$.imageLink)"
            v-model="state.imageLink"
            legend="Ссылка на изображение товара"
            placeholder="Введите ссылку"
            :isInvalid="v$.imageLink.$error && v$.imageLink.$dirty"
            :errorMessage="getErrorMessage(v$.imageLink.$errors[0]?.$validator)"
        />
        <form-fieldset
            class="new-product-form__field"
            @input="handleInput(v$.price)"
            v-model="state.price"
            type="number"
            legend="Цена товара"
            placeholder="Введите цену"
            :isInvalid="v$.price.$error && v$.price.$dirty"
            :errorMessage="getErrorMessage(v$.price.$errors[0]?.$validator)"
        />
        <button
            :disabled="v$.$error"
            class="new-product-form__btn main-button"
            type="submit"
        >
            Добавить товар
        </button>
    </form>
</template>

<script>
import useValidate from "@vuelidate/core"
import { required, url, integer, minValue } from "@vuelidate/validators"
import { computed, reactive } from "vue"

export default {
    setup() {
        const state = reactive({
            title: "",
            description: "",
            imageLink: "",
            price: "",
        })
        const rules = computed(() => {
            return {
                title: { required },
                description: {},
                imageLink: { required, url },
                price: { required, integer, minValue: minValue(0) },
            }
        })

        const v$ = useValidate(rules, state)

        return { state, v$ }
    },

    methods: {
        getErrorMessage(validatorType) {
            console.log("validatorType", validatorType)

            switch (validatorType) {
                case "required":
                    return "Поле является обязательным"
                case "minValue":
                    return "Минимальная цена товара 0 руб."
                case "url":
                    return "Некорректная ссылка"

                default:
                    return "Поле является обязательным"
            }
        },
        handleInput($v) {
            $v.$validate()
        },

        handleSubmit(e) {
            e.preventDefault()

            this.v$.$validate()

            if (!this.v$.$error) {
                // alert("Form submit")
                // create new product
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.new-product-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px;
    border-radius: 4px;
    background-color: var(--white);
    box-shadow: var(--big-shadow);

    &__field {
    }

    &__btn {
        margin-top: 8px;
    }
}
.description-field {
    height: 108px;
}
</style>
