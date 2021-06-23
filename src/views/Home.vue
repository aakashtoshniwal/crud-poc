<template>
  <div class="home">
    <StudentDetails/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import StudentDetails from '@/components/StudentDetails.vue'; // @ is an alias to /src

@Component({
  components: {
    StudentDetails,
  },
})
export default class Home extends Vue {}
</script>
