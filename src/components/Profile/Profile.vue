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
          :Duration="item.duration"
          :Description="item.spec"
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
  display: flex;
  height: 100%;
  width: 30%;
  background: white;
  border-radius:var(--global-radius);
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.08), 0 15px 12px rgba(0, 0, 0, 0.12);
  text-align: left;
  min-width: 400px;
}
.ProfileContainer {
  flex: 1;
  justify-content: space-between;
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
}
.Name {
  margin-bottom: 8px;
  font-weight: bold;
  opacity: 0.9;
  font-size: 14px;
}
.CareerList {
  background: var(--dark);
  padding:32px;
  border-radius:var(--global-radius);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>