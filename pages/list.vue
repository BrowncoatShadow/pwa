<template lang='pug'>
  div
    v-progress-linear.mt-0(
      indeterminate
      color='accent'
      v-if='loading'
      )
    v-container(fluid grid-list-md)
      v-data-iterator(
        content-tag='v-layout'
        row wrap
        :items='list'
        hide-actions
        :rows-per-page-items='[-1]'
        )
        v-flex(
          slot='item'
          slot-scope='props'
          xs12 sm6 md4 lg3
          )
          v-card
            v-card-title.title {{ props.item.title }}
            v-divider
            v-card-text.body-1 {{ props.item.body }}
    v-btn(fab fixed bottom right color='accent' @click='fetchData')
      v-icon refresh
</template>

<script>
export default {
  data () {
    return {
      loading: true,
      list: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      this.loading = true
      const data = await this.$axios.$get('http://www.filltext.com?rows=12&title={lorem}&body={lorem|100}')
      // Simulate unreliable response times
      setTimeout(() => {
        this.list = data
        this.loading = false
      }, Math.floor((Math.random() * 10) + 1) * 500)
    }
  }
}
</script>
