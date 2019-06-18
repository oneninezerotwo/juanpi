<template>
  <div>
    <app-dhaeder/>
    <app-hfiex/>
    <app-goods/>
  </div>
</template>

<script>
// @ is an alias to /src
import hfiex from "@/components/Hhfiex.vue";
import dhaeder from "@/components/HDheader.vue";
import goods from "@/components/HGoods.vue";

export default {
  name: "datails",
  components: {
    dhaeder,
    hfiex,
    goods,
    "app-dhaeder": dhaeder,
    "app-hfiex": hfiex,
    "app-goods": goods
  }
};
</script>
