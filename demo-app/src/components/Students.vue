<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3">

      </div>
      <div class="col-md-6">
        <form v-if="!submitted">
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Enter Full Name" v-model.lazy="student.name">
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input type="text" class="form-control" id="age" placeholder="Enter age" v-model.lazy="student.age">
          </div>
          <div class="form-group">
            <label for="grade"> Grade</label>
            <input type="text" class="form-control" id="grade" placeholder="Enter grade" v-model.lazy="student.grade">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model.lazy="student.email">
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-success" v-on:click.prevent = "postData">Submit</button>
          </div>
        </form>
        <div v-if="submitted">
          <h4>Successfully updated</h4>
        </div>
        <div id="preview">
          <h3>Preview Details</h3>
          <p>Name: {{student.name}}</p>
          <p>Age: {{student.age}}</p>
          <p>Grade: {{student.grade}}</p>
          <p>Email: {{student.email}}</p>
        </div>
        <div class="text-center">
          <button class="btn btn-primary" v-on:click="displayForm" v-if="submitted" id="frmDsp">Add another Student</button>
        </div>
      </div>
    </div>
    <div class="col-md-3">

    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        student: {
          name : "",
          age: "",
          grade : "",
          email: ""
        },
        submitted: false
      }
    },
       methods: {
         postData: function () { 
           this.$http.post('http://localhost:8081/api/students',{
             name: this.student.name,
             age: this.student.age,
             grade:this.student.grade,
             email: this.student.email
           }).then(function (response) { 
              this.submitted = true;
              console.log(response);
            })
          },
          displayForm: function () { 
            this.submitted = false;
           }
        }
  }

</script>

<style scoped>
  #preview {
    border: 1px solid gray;
    margin-top: 40px;
    padding: 15px;
  }

  #frmDsp{
    margin: 10px;
  }

</style>
