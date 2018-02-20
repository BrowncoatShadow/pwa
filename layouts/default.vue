<template lang='pug'>
v-app
  v-navigation-drawer(fixed app clipped v-model='drawer')
    v-list
      v-list-tile(v-for='(page, index) in pages' nuxt :href='page.href' :key='index')
        v-list-tile-action: v-icon {{ page.icon }}
        v-list-tile-content: v-list-tile-title {{ page.title }}
  v-toolbar(fixed app clipped-left color='primary' dark)
    v-toolbar-side-icon(@click.stop='drawer = !drawer')
    v-toolbar-title Application
  v-content
    nuxt
  v-footer(fixed app color='primary' dark)
    v-layout(justify-center) &copy; 2018
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    pages: [
      { href: '/', icon: 'home', title: 'Home'},
      { href: '/list', icon: 'list', title: 'List'}
    ]
  })
}
</script>
