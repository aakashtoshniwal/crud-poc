<template>
  <div class="divclass">
    <b-form @submit="onSubmit" @reset="onReset" novalidate="true">
      <b-card :title="title">
        <b-card-text>
          <b-list-group v-if="errors.length">
            <b-list-group-item
              variant="danger"
              v-for="error in errors"
              v-bind:key="error"
              style="color: red"
              >{{ error }}</b-list-group-item
            >
          </b-list-group>
          <b-form-group
            id="input-group-1"
            label="First Name:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.first_name"
              type="text"
              placeholder="Enter First Name"
              name="first_name"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Last Name:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.last_name"
              type="text"
              placeholder="Enter Last Name"
              name="last_name"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Email:" label-for="input-3">
            <b-form-input
              id="input-3"
              v-model="form.emailId"
              type="email"
              placeholder="Enter Email"
              name="emailId"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-4"
            label="Phone Number:"
            label-for="input-4"
          >
            <b-form-input
              id="input-4"
              v-model="form.phone_number"
              type="tel"
              name="phone_number"
              placeholder="942-315-3356"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-5"
            label="Year of Passing:"
            label-for="input-5"
          >
            <b-form-input
              id="input-5"
              v-model="form.year_of_passing"
              type="number"
              placeholder="Enter Year of Passing"
              name="year_of_passing"
              required
            ></b-form-input>
          </b-form-group>
        </b-card-text>

        <b-button type="submit" style="margin: 5px" variant="outline-success">
          <b-icon icon="file-earmark" aria-hidden="true"></b-icon>
          {{ id ? "Update" : "Submit" }}</b-button
        >
        <b-button type="reset" style="margin: 5px" variant="outline-danger">
          <b-icon icon="x-circle" aria-hidden="true"></b-icon> Reset</b-button
        >
        <b-button
          style="margin: 5px"
          variant="outline-info"
          class="mb-2"
          @click="$router.push('/')"
        >
          <b-icon icon="box-arrow-left" aria-hidden="true"></b-icon> Back
        </b-button>
      </b-card>
    </b-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import StudentDataService from "@/services/DataService";
import Student from "@/types/Student";

@Component
export default class AddStudent extends Vue {
  private form: Student = {
    id: 0,
    first_name: "",
    last_name: "",
    emailId: "",
    phone_number: "",
    year_of_passing: "",
  };

  private errors: Array<string> = [];

  data() {
    return {
      form: {
        first_name: "",
        last_name: "",
        emailId: "",
        phone_number: "",
        year_of_passing: "",
      },
      id: this.$route.params.id,
      title: this.$route.params.id ? "Update Student" : "Add Student",
      errors: [],
    };
  }

  created() {
    if (this.$route.params.id) {
      StudentDataService.get(this.$route.params.id).then((data) => {
        this.form = data.data;
      });
    }
  }

  onSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    this.errors = [];

    if (!this.form.first_name) {
      this.errors.push("First Name required.");
    } else if (!this.form.last_name) {
      this.errors.push("Last Name required.");
    } else if (!this.form.emailId) {
      this.errors.push("Email required.");
    } else if (!this.validEmail(this.form.emailId)) {
      this.errors.push("Valid email required.");
    } else if (!this.form.phone_number) {
      this.errors.push("Phone Number required.");
    } else if (!this.validNumber(this.form.phone_number)) {
      this.errors.push("Valid Phone Number required.");
    } else if (!this.form.year_of_passing) {
      this.errors.push("Year of passing required.");
    } else {
      if (this.$route.params.id) {
        this.$store.dispatch("updateStudent", this.form);
      } else {
        this.$store.dispatch("createStudent", this.form);
      }
      this.$router.push("/");
    }
  }
  onReset(event: { preventDefault: () => void }) {
    event.preventDefault();
    // Reset our form values
    this.errors = [];
    this.form.first_name = "";
    this.form.last_name = "";
    this.form.emailId = "";
    this.form.phone_number = "";
    this.form.year_of_passing = "";
  }
  validEmail(email: string) {
    var regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  }
  validNumber(phone_number: string) {
    var regex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    return regex.test(phone_number);
  }
}
</script>


<style>
.divclass {
  position: absolute;
  top: 20%;
  left: 32%;
  width: 40%;
}
</style>