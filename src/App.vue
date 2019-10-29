<template>
    <div id="app">
      <Profile/>
      <Contents/>
    </div>
</template>

<script>
// import Pangea from "./components/Pangea.vue";
import Profile from './components/Profile/Profile.vue';
import Contents from './components/Contents.vue';
export default {
    name: "app",
    components: {
        Profile,
    Contents
    }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,800&display=swap");
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap");
#app {
    font-family: "Open Sans", "Noto Sans KR", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--invertable-text);
    
}
body {
    margin: 0px;
    width: 100vw;
    height: 100vh;
    // background-image: repeating-linear-gradient(
    //     45deg,
    //     #6bdfb366,
    //     #6bdfb366 2px,
    //     white 4px,
    //     white 8px
    // );
    padding:10vh 10vw;
    overflow: hidden;
    user-select: none;
}
</style>
