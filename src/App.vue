<template>
    <div id="app">
      <Pangea/>
    </div>
</template>

<script>
import Pangea from "./components/Pangea.vue";

export default {
    name: "app",
    components: {
        Pangea
    },
    data(){
        return{
            isDarkMode:false
        }
    },
    created(){
        this.changeColor();
    },
    methods:{
        changeColor(){
            document.documentElement.setAttribute(
                'data-theme',
                this.isDarkMode?"dark":"light",
            )    
        }
    }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Google+Sans:100,300,400,500,700,900,100i,300i,400i,500i,700i,900i");
// @import url("https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap");
#app {
    font-family: "Google Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--invertable-text);
    overflow: hidden;
    width: 100%;
    height: 100%;
}
body {
    margin: 0px;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    user-select: none;
    background:var(--paper-background);
}

</style>
