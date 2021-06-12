<template lang="pug">
  section.home
    //- img(alt='Vue logo' src='@/assets/logo.png')
    ToDo(todo_msg="工作待辦清單",done_msg="工作完成清單")
</template>

<script>
// @ is an alias to /src
import ToDo from '@/components/ToDo.vue'

export default {
  name: 'Home',
  components: {
    ToDo
  }
}
</script>
