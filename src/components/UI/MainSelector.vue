<template>
    <select class="select" :value="modelValue" @change="changeHandler">
        <option class="select__option" selected value="">По умолчанию</option>

        <option v-for="item in options" :key="item.value" :value="item.value">
            {{ item.name }}
        </option>
    </select>
</template>

<script>
export default {
    name: "main-select",
    props: {
        modelValue: {
            type: String,
        },
        options: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        changeHandler(event) {
            this.$emit("update:modelValue", event.target.value)
        },
    },
}
</script>

<style lang="scss" scoped>
.select {
    transition: 0.2s;
    cursor: pointer;
    width: 100%;
    height: 36px;
    padding: 10px 0px 11px 14px;
    border-radius: 4px;
    background: var(--white);
    border: none;
    outline: 2px solid transparent;
    font-size: 0.75em;
    color: var(--grey-text);

    &:hover {
        outline-color: var(--green);
    }
    &:focus {
        outline-color: var(--grey-text);
        color: var(--dark);
    }
}
</style>
