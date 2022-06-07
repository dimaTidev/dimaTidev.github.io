<template>
  <div>
   <div>Drawing list --------</div>
   <div>{{header}}</div>

  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend(
{
  name: "HeaderList",
  props: {
    header: String,
    list: Array,
  },
}
);
</script>

.skill-name {
  float: left;
  width: 200px;
}
