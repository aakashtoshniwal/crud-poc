<template>
  <div class="home">
    <AddStudent />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AddStudent from '@/components/AddStudent.vue'; // @ is an alias to /src

@Component({
  components: {
    AddStudent,
  },
})
export default class CreateStudent extends Vue {}
</script>
