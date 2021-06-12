<template lang="pug">
#app
  Header
  router-view
  Footer(copyright='2021 ToDo List by Annalia Hsiao')
</template>
<script>
// @ is an alias to /src
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
