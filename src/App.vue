<template>
    <div id="app">
        <!-- <ArtArea/> -->
        <Pangea/>
    </div>
</template>

<script>
import Pangea from "./components/Pangea.vue";
// import ArtArea from "./components/ArtArea/ArtArea.vue";
export default {
    name: "app",
    components: {
        Pangea,
        // ArtArea
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
@import url('https://fonts.googleapis.com/css?family=Lexend+Deca|Open+Sans&display=swap');
#app {
    font-family: 'Lexend Deca', sans-serif;
    text-align: center;
    color: var(--invertable-text);
    overflow-y: scroll;
    width: 100vw;
    height:100vh;
}
body {
    width:100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
    margin: 0px;
    user-select: none;
    background:#1e2335;
}

</style>
