Vue.component('money-coupon', {
    template:
    `
        <div id="money-input">
            <input id="money-coupon-input" placeholder="Whom do you serve?" :value="master" @blur="onMasterChosen">
            <button id="money-coupon-button">Tell Master</button>
        </div>
    `,
    methods: {
        onMasterChosen() {
            alert(this.master + ': You are now my master');
            this.$emit('tell-the-world', this.master);
        },
    },
    data() {
        return {
            master: 'Saruman',
        }
    },
    // props: {},
    // methods: {},
});

new Vue({
    el: '#root',
    data() {
        return {
            masterTold: false,
        }
    },
    methods: {
        onCouponApplied(master) {
            alert('I am applying, I AM applying: ' + master);
            this.masterTold = true;
        },
        tellAnotherMaster() {
            this.masterTold = false;
        }
    },
});