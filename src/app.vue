<script>
import ToolbarComponent from "@/public/component/toolbar.component.vue";

export default {
  name:"app",
  components: {ToolbarComponent},
  title:"GYM RAT FRONTEND",
}
</script>

<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped>

</style>
