<template>
  <div>
    <h3>{{ name }} - {{ get().length }}</h3>
    <span v-if="!get().length"
      ><b
        >Data not available. Please add students.<router-link to="/addStudent"
          >Go to Add Student</router-link
        ></b
      ></span
    >
    <b-table
      v-if="get().length"
      striped
      hover
      :items="get()"
      :fields="fields"
      responsive="sm"
    >
      <template #cell(edit)="row">
        <b-icon icon="pencil" variant="info" @click="info(row.item)"></b-icon>
      </template>

      <template #cell(delete)="row">
        <b-icon
          icon="x-circle"
          variant="danger"
          @click="deleteStudent(row.item, row.index)"
        ></b-icon>
      </template>
    </b-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Student from "@/types/Student";

@Component
export default class StudentDetails extends Vue {

  data()  {
    return {
      name: "Student List",
      sortDesc: false,
      fields: [
        {
          key: "id",
          label: "Student ID",
          sortable: true
        },
        {
          key: "first_name",
        },
        {
          key: "last_name",
        },
        {
          key: "emailId",
        },
        {
          key: "phone_number",
        },
        {
          key: "year_of_passing",
        },
        { key: "edit", label: "Edit" },
        { key: "delete", label: "Delete" },
      ],
    };
  }

  get(): string {
    return this.$store.state.studentList.student;
  }

  created() :void{
    this.$store.dispatch("fetchData");
  }

  info(item: Student) : void{
    this.$router.push("/addStudent/" + item.id);
  }

  deleteStudent(item: Student, index: number): void {
    console.log(item.id);
    if (confirm("Do you really want to delete " + item.first_name + " ?")) {
      this.$store.dispatch("removeData", {
        id: item.id,
        index: index,
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>


