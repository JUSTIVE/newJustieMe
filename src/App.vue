<template>
    <div id="app">
        <Pangea />
    </div>
</template>

<script>
import Pangea from "./components/Pangea.vue";

export default {
    name: "app",
    components: {
        Pangea
    }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,800&display=swap");
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap");
@import url("./global.css");
#app {
    font-family: "Open Sans", "Noto Sans KR", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--invertable-text);
}
body {
    margin: 0px;
    background-image: linear-gradient(135deg,#6bdfb366 10%, transparent 10%);
        // linear-gradient(135deg,#6bdfb366 10%, transparent 10%);
    background-color: white;
    background-position: 0 0, 12px 12px;
    background-size: 24px 24px;
    user-select: none;
}
</style>
