<template>
  <div>
    <NavBar2/>
    <router-view/>
  </div>
</template>

<script>
import NavBar2 from '../src/components/NavBar2';

export default {
  name: 'App',
  components: { NavBar2 }
}
</script>
