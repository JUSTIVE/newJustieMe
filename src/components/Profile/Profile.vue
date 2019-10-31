<template>
  <div class="Profile">
    <div class="ProfileContainer">
      <div class="ProfileContainerUpper">
        
        <div class="Slogan">
          Familiar
          <br />with
          <br />Novelty
        </div>
        <br />
        <div class="Name">김민상 / KIM MIN SANG</div>  
      </div>
      
      <div class="CareerList">
        <Career
          v-for="(item, index) in CareerData"
          :key="index"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CareerData from "./Career.json";
import Career from "./Career.vue";
export default {
  name: "Profile",
  components: {
    Career
  },
  data() {
    return {
      CareerData: Object
    };
  },
  created() {
    this.CareerData = CareerData.CareerData;
    console.log(this.CareerData);
  }
};
</script>

<style lang="scss">
.Profile {
  @include initializer;
  position:absolute;
  display: flex;
  height: 80vh;
  text-align: left;
  min-width: 400px;
}
.ProfileContainer {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.ProfileContainerUpper{
  padding:48px;
}
.Slogan {
  font-weight: 800;
  font-size: 64px;
  color: var(--accent);
  line-height:64px;
}
.Name {
  margin-bottom: 8px;
  font-weight: bold;
  opacity: 0.9;
  font-size: 14px; 
}
.CareerList {
  padding:48px;
  border-radius:var(--global-radius);
  display: flex;
  flex-direction: column;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
}

</style>