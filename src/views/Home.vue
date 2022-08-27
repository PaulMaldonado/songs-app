<template>
  <div class="home">
    <Songs />
  </div>
</template>

<script>
// @ is an alias to /src
import Songs from '@/components/Songs.vue'

export default {
  name: 'Home',
  components: {
    Songs
  }
}
</script>
