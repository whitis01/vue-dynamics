<template>
  <div id="app">
    <div :amount="5"></div>
    <Moneymessage>Hello My Minions</Moneymessage>
    <div>{{ amount }}</div>
  </div>
</template>

<script>
import Moneymessage from './components/MoneyMessage.vue';

export default {
  name: 'app',
  components: { Moneymessage },
  data () {
    return {
      amount: 0,
    }
  }
}
</script>

<style lang="scss">

</style>
