<template>
  <div class="ContentPanel" :class="{'expand':expand}" >
    <span class="closeButton" @click="shrink" v-show="expand">X</span>
  </div>
</template>

<script>
import {EventBus} from '../../eventbus.js'
export default {
    name:"ContentPanel",
    data(){
        return {
            expand:false
        }
    },
    created(){
        EventBus.$on("expand",()=>{
            this.expand=true
        })
    },
    methods:{
        shrink(){
            this.expand=false;
        }
    }
}
</script>

<style>
.ContentPanel{
    position: absolute;
    width:0%;
    background:hsl(227, 28%, 13%);
    transition: all 3s cubic-bezier(.25,.8,.25,1);
}
.expand{
    width:100%;
    transition: all 1s cubic-bezier(.25,.8,.25,1);
}
.closeButton{
    color:white;
    position:absolute;
    right:16px;
    top:16px;
}
</style>