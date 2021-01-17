<template>
  <div>
    <Button @save="onCustom" />
    <p v-if="emitted">Emitted!</p>
  </div>
</template>

<script>
import Button from './Button'

export default {
  name: 'ParentComponent',
  components: { Button },
  data() {
    return {
      emitted: false,
      user: {},
    }
  },
  methods: {
    onCustom(value) {
      this.user = value
      this.emitted = true
    },
  },
}
</script>
