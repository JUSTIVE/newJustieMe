<template>
  <div class="Career">
    <div class="Duration">
        {{Duration}}
    </div>
    <div class="Description">
        {{Description}}
    </div>
  </div>
</template>

<script>
export default {
    name:"Career",
    props:{
        Duration:String,
        Description:String
    }
}
</script>

<style lang="scss">
.Career{
    font-size:12px;
    margin-bottom:10px;
    color:var(--invertable-text-negative);
}
.Duration{
    font-weight:bold;
    color:var(--accent);
}
</style>