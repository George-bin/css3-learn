import Vue from "vue";
import Router from "vue-router";
import ToolTips from "@/components/ToolTips.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "ToolTips",
      component: ToolTips
    }
  ]
});
