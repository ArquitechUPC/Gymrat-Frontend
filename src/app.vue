<script>
import ToolbarComponent from "@/public/component/toolbar.component.vue";
import SidebarComponent from "@/public/component/sidebar.component.vue";
import ListClientComponent from "@/admin/components/list-client.component.vue";
import ListTrainerComponent from "@/admin/components/list-trainer.component.vue";

export default {
  name:"app",
  components: {ToolbarComponent,SidebarComponent,ListClientComponent,ListTrainerComponent},
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
