<template>
    <div class="app">
        <Sidebar />
    </div>
</template>

<script>
import Sidebar from "@/components/Sidebar"
import "@/assets/style.scss"

export default {
    components: {
        Sidebar,
    },
    data() {
        return {
            posts: [],
        }
    },
}
</script>

<style lang="scss">
.app {
    color: var(--text);
}
</style>
