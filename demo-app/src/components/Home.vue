<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                   <h4>Student Profiles</h4>
                </div>
                <div class="col-md-6 text-right">
                    <label for="">Search:</label>
                    <input type="text" v-model="search"  placeholder="search">
                </div>
            </div>

            <div v-for="pupil in filteredStudents" class="singleStudent list-group-item">
                <h4> {{pupil.name | to-uppercase}} </h4>
                <p>Age: {{pupil.age}} </p>
                <p>Grade: {{pupil.grade}} </p>
                <p>Contact: {{pupil.email}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      students: [],
      search: ''
    }
  },
  methods: {

  },
  created() {
    this.$http.get('http://localhost:8081/api/students').then(function (res) {
      this.students = res.body;
    });
  },
  computed: {
    filteredStudents: function () {
      return this.students.filter((student) => {
        return student.name.match(this.search);
      });
    }
  },
  watch: {
    filteredStudents: function (val) {
      console.log(val);
    }
  }
}
</script>


<style scoped>
.singleStudent{
    margin: 20px;
    background: #eee;
    border: 0;
}

</style>
