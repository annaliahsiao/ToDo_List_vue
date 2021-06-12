<template lang="pug">
header
    a(href="/")#logo TODO 
    input#menu_flag(type="checkbox")
    label(for="menu_flag")
        i
        o
        u
    #menu_list
        router-link(to='/') ToDo List
        router-link(to='/about') About
</template>
<script>
export default {
    name: 'header',
    // props: {
    //     msg: String
    // }
}
</script>

<style scoped lang="stylus">
</style>