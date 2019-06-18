<template>
  <div>
    <app-search/>
    <app-hbanner/>
    <app-hcontent/>
  </div>
</template>

<script>
// @ is an alias to /src
import search from "@/components/HSearch.vue";
import hcontent from "@/components/HContent.vue";
import hbanner from "@/components/HBanner.vue"

export default {
  name: "home",
  components: {
    search,
    hcontent,
    hbanner,
    "app-search": search,
    "app-hcontent": hcontent,
    "app-hbanner": hbanner
  }
};
</script>
