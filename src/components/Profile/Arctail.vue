<template>
    <canvas ref="canvas" class="Arctail" id="arctail" width="1000" height="1000">
    
    </canvas>
</template>

<script>
export default {
    name:"ArcTail",
    data(){
        return {
            stars:undefined,
            speed:undefined,
            position:undefined,
            ctx:undefined
        }
    },
    created(){
        this.stars = [];
        this.speed = [];
        this.position = [];
        for(var i=0; i<300; i++){
            this.stars.push((Math.random()*1))
            this.speed.push(Math.random()*0.005)
            this.position.push(0)
        }
    },
    mounted(){
        let self = this;
        this.ctx = self.$refs.canvas.getContext("2d");
        setInterval(()=>{
            this.doRender()
        },7)
    },
    methods:{
        render(canvasContext,index){
            canvasContext.beginPath();
            canvasContext.lineWidth = this.speed[index]*1000;
            canvasContext.strokeStyle = "#ffffff11"
            canvasContext.lineCap = "round";
            canvasContext.arc(1000,1000,
                index*4.5,
                this.position[index]+(Math.PI*0.5), this.stars[index] + this.position[index]+(Math.PI*0.5));
            canvasContext.stroke();

            canvasContext.beginPath();
            canvasContext.strokeStyle = "#ffc107"
            canvasContext.lineCap = "round";
            canvasContext.arc(1000,1000,
                index*4.5,
                this.position[index]+(Math.PI*0.5)+this.stars[index],this.stars[index]+ 0.02 + this.position[index]+(Math.PI*0.5));
            canvasContext.stroke();
            this.position[index] += this.speed[index] 
            this.position[index] = this.position[index]%(Math.PI)
        },
        doRender(){
            this.ctx.clearRect(0,0,this.ctx.canvas.clientWidth*4,this.ctx.canvas.clientHeight*4);
            
            for(var i=0;i<300;i++){
                this.render(this.ctx,i)
            }
        }
    }
}
</script>

<style>
.Arctail{
    position:absolute;
    width:100%;
    height:100%;
    /* opacity: 0.1; */
}
</style>