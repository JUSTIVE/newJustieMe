<template>
<div class="Careers">
  <div class="heading">Footsteps where I left</div>
  <div class="CareerList">
    <Career v-for="(item, index) in CareerData" :key="index" :item="item" />
  </div>
</div>
</template>

<script>
import CareerData from "./Career.json";
import Career from "./Career.vue";
export default {
  CareerData: Object,
  name: "Careers",
  components: {
    Career
  },
  created() {
    this.CareerData = CareerData.CareerData;
    this.description = CareerData.description;
    console.log(this.CareerData);
  }
};
</script>

<style lang="scss" scoped>
.Careers{
  display: flex;
  flex-direction: column;
  padding:48px;
  
}
.CareerList {
  border-radius:var(--global-radius);
  display: flex;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
}
.heading{
  padding:32px;
  padding-left:0px;
  font-size:28px;
  line-height:30px;
  font-weight: bold;
  text-align: start;
  color:var(--subtle-white);
  align-self: flex-start;
}
</style>