<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item ">
            <router-link to="/" class="nav-link" exact>Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Students" class="nav-link" exact> Students </router-link>
          </li>
          <li class="nav-item">
              <router-link to="/Sponsers" class="nav-link" exact> Sponser </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.navbar{
    margin-bottom: 2%;
}
</style>


