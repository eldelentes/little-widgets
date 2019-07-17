<template>
  <section class="panel">
    <a href="#" class="panel__toggle"  @click.prevent="active = !active">
      {{ title }}
      <span class="down-Arrow" v-show="!active">&#9660;</span>
      <span class="up-Arrow" v-show="active">&#9650;</span>
    </a>
    <div class="panel__content" v-show="active">
      <slot />
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Panel',
    props: [
      'title'
    ],
    data() {
      return {
        active: false,
      }
    },
  }
</script>


<style lang="scss" scoped>
.panel {
  border-top: 1px solid #2d3748;
  border-bottom: 1px solid #2d3748;
  
  &__toggle {
    color: #fff;
    display: flex;
    justify-content: space-between;
    text-decoration: none;
    font-size: 1em;
    font-weight: 600;
    padding: 1em;
  }

  &__content {
    background: rgba(#000,0.2);
    padding: 1em;
  }
}
</style>
