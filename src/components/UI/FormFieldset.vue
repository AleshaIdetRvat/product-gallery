<template>
    <div class="fieldset" :class="{ '--invalid': isInvalid }">
        <div class="fieldset__body">
            <h4 class="fieldset__legend" :class="{ '--required': isRequired }">
                {{ legend }}
            </h4>

            <textarea
                v-if="isTextarea"
                :value="modelValue"
                :placeholder="placeholder"
                class="fieldset__text-field main-input"
                @input="inputHandler"
            />

            <input
                v-else
                :value="modelValue"
                :placeholder="placeholder"
                class="fieldset__text-field main-input"
                @input="inputHandler"
            />
        </div>

        <span class="fieldset__error-message">{{ errorMessage }}</span>
    </div>
</template>

<script>
import { prettyPrice } from "@/utils/prettyPrice"

export default {
    name: "form-fieldset",
    props: {
        modelValue: [String, Number],
        errorMessage: String,
        type: { type: String, default: "text" },
        legend: { type: String, required: true },
        placeholder: String,
        isInvalid: { type: Boolean, default: false },
        isRequired: { type: Boolean, default: true },
        isTextarea: { type: Boolean, default: false },
    },
    methods: {
        inputHandler(event) {
            if (this.type !== "number")
                this.$emit("update:modelValue", event.target.value)
            else {
                const price = prettyPrice(event.target.value).trim()
                event.target.value = price
                this.$emit("update:modelValue", price)
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.fieldset {
    position: relative;

    &.--invalid {
        .fieldset__text-field {
            outline-color: var(--error);
        }

        .fieldset__error-message {
            bottom: -1.75em;
            opacity: 1;
        }
    }

    &__body {
        height: 100%;
        position: relative;
        z-index: 2;

        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    &__error-message {
        transition: 0.3s;
        z-index: 1;
        opacity: 0;
        color: var(--error);
        font-size: 0.5em;
        position: absolute;
        bottom: 0em;
    }

    &__legend {
        align-self: flex-start;
        position: relative;
        font-size: 0.625em;
        font-weight: 400;

        color: var(--dark);

        &.--required {
            &::after {
                content: "";
                display: block;
                position: absolute;
                top: 0;
                right: -4px;
                width: 4px;
                height: 4px;
                border-radius: 50%;
                background-color: var(--error);
            }
        }
    }

    &__text-field {
        flex: 1 1 auto;
    }
}
</style>
