<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 800 600"
    width="800"
    height="600"
    @mouseup="$emit('mouseup', $event)"
    @mousedown="$emit('mousedown', $event)"
    @mousemove="$emit('mousemove', $event)"
    @mouseenter="$emit('mouseenter', $event)"
    @mouseleave="$emit('mouseleave', $event)"
  >
    <slot></slot>
  </svg>
</template>

<script>
export default {};
</script>
