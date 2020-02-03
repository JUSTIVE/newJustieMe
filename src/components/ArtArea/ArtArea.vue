<template>
  <div class="Artarea">
    <div class="liner"/>
  </div>
</template>

<script>
export default {
    name:"ArtArea"
}
</script>

<style>
.Artarea{
  position: absolute;
  /* background:#efeeee; */
}
.liner{
  width:300px;
  height:100px;
  background:#efeeee;
  border-radius: 50px;
  transform: translate(50px,50px) rotateZ(135deg);
  opacity: 0.5;
}
</style>