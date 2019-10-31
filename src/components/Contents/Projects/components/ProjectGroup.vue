<template>
  <div class="ProjectGroup">
      <div class="categoryTitle">{{data.category}}</div>
      
  </div>
</template>

<script>
export default {
    name:"ProjectGroup",
    props:{
        data:Object
    }
}
</script>

<style lang="scss">
.ProjectGroup{
    padding:16px;
}
.categoryTitle{
    font-weight: bold;
    color:var(--accent);
}
</style>