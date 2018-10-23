<template>
  <div >
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import header from '@/components/header';
import students from '@/components/Students';
import sponsers from '@/components/Sponsers';
import home from '@/components/Home';

export default {

  components: {
    'app-header': header,
    'app-home': home,
    'app-students': students,
    'app-sponsers': sponsers
  }
}
</script>

<style>

</style>
