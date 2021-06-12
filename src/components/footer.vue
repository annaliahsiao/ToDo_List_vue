<template lang="pug">
footer
    span {{copyright}}
</template>
<script>
export default {
    name: 'footer',
    props: {
        copyright: String
    }
}
</script>

<style scoped lang="stylus">
</style>