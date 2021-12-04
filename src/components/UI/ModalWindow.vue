<template>
    <div v-if="isShow" class="modal" @click="hideModal">
        <div @click.stop class="modal__container">
            <div class="modal__column">
                <button
                    class="modal__close-btn"
                    @click="hideModal"
                    aria-label="close modal window"
                >
                    ×
                </button>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "modal-window",
    props: {
        isShow: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        hideModal() {
            this.$emit("update:isShow", false)
        },
    },
}
</script>

<style scoped>
@keyframes showing-animation {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
@keyframes showing-translate-animation {
    0% {
        transform: scale(80%);
    }

    100% {
        transform: scale(130%);
    }
}
.modal {
    animation: showing-animation 0.3s ease forwards;

    opacity: 0;
    position: fixed;
    z-index: 10;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #00000070;
}

.modal__container {
    animation: showing-translate-animation 0.3s ease forwards;

    min-width: 70vw;
    transform: scale(120%);
    padding: 20px;
    border-radius: 8px;

    background-color: var(--black);
}
.modal__close-btn {
    align-self: flex-end;
    background-color: var(--error);
    border: none;
    border-radius: 5px;
    padding: 1px 14px 0px 14px;
    /* color: white; */
    font-weight: 600;
    font-size: 1.5em;
}
.modal__column {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
</style>
