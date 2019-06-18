<template>
  <div>
    <app-sort/>
  </div>
</template>

<script>
// @ is an alias to /src
import sort from "@/components/HSort.vue";

export default {
  name: "sort",
  components: {
    sort,
    "app-sort": sort
  }
};
</script>
