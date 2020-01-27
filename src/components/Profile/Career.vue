<template>
  <div class="Career">
    <div class="lineDecoration"/>
    <div class="Duration">
        {{item.duration}}
    </div>
    <div class="Description">
        {{item.spec}}
    </div>
    <div class="Location">
        {{item.location}}
    </div>
  </div>
</template>

<script>
export default {
    name:"Career",
    props:{
        item:Object
    }
}
</script>

<style lang="scss">
.Career{
    font-weight:bold;
    font-size:12px;
    margin-bottom:14px;
    color: var(--subtle-white);
    border-left: solid 2px var(--subtle-white);
    padding-left:8px;
}
.Duration{
    font-size:13px;
    
    color: var(--subtle-white);
}
.Location{
    font-weight: 400;
}
</style>