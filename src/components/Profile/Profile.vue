<template>
  <div class="Profile">
    <div class="ProfileContainer">
      <div class="ProfileContainerUpper">
        
        <div class="Slogan">
          FAMILIAR<br/>WITH<br/>NOVELTY
        </div>
        <br />
        <div class="Name">김민상 / KIM MIN SANG</div>  
        <div class="description">
          {{description}}
        </div>
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
      CareerData: Object,
      description: String
    };
  },
  created() {
    this.CareerData = CareerData.CareerData;
    this.description = CareerData.description;
    console.log(this.CareerData);
  }
};
</script>

<style lang="scss">
.Profile {
  @include initializer;
  position:absolute;
  display: flex;
  
  height: 45vh;
  width:65%;
  text-align: left;
  background:#FF495C;
  // min-width: 400px;
}
.description{
  font-size: 12px;
  color:white;
}
.ProfileContainer {
  flex: 1;
  display: flex;
  // flex-direction: column;
}
.ProfileContainerUpper{
  padding:48px;
  flex:1;
}
.Slogan {
  word-break: keep-all;
  font-weight: 800;
  font-size: 64px;
  color: var(--subtle-white);
  line-height:64px;
}
.Name {
  margin-bottom: 8px;
  font-weight: bold;
  color: var(--subtle-white);
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