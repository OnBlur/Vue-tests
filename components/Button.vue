<template>
  <!-- BUTTON -->
  <button
    :class="`status--${color}`"
    :disabled="isDisabled"
    @click="$emit('save', user)"
  >
    {{ isSaving ? 'Saving...' : text }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'red',
      validator: (type) => ['green', 'red', 'orange'].includes(type),
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isSaving: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      user: {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@snakeware.nl',
        isActive: false,
      },
    }
  },
}
</script>

<style lang="postcss" scoped>
.status--green {
  background: #289735;
}

.status--red {
  background: #b1342f;
}

.status--orange {
  background: #e96f3a;
}
</style>
