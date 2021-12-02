<template>
  <div class="box is-info">
    <p>
      <slot>I am default. Nothing gets passed me, it can only overrule me.</slot>
    </p>
  </div>

</template>

<script>
  export default {

  }
</script>

<style>
  .box {
    background-color: aquamarine;
    padding: 34px;
    border: 5px solid blue;
  }
</style>
