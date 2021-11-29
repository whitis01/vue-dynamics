window.Event = new class {
    constructor() {
        this.vue = new Vue();
    }

    fire(event, data = null) {
        this.vue.$emit(event,data);
    }

    listen(event, callback) {
        this.vue.$on(event, callback);
    }
}

Vue.component('money-coupon', {
    template:
    `
        <div id="money-input">
            <input id="money-coupon-input" placeholder="Whom do you serve?" :value="master" @blur="onMasterChosen">
            <button id="money-coupon-button">Tell Master</button>
            <input id="money-coupon-input" placeholder="Whom do you serve?" :value="master" @blur="onMasterChosenByEvent">
            <button id="money-coupon-event">Tell Master</button>
        </div>
    `,
    methods: {
        onMasterChosen() {
            alert(this.master + ': You are now my master');
            this.$emit('tell-the-world', this.master);
        },
        onMasterChosenByEvent() {
            alert(this.master + ': By decree of the event, you are now my master.');
            Event.fire('event-to-tell-the-world', this.master);
        }
    },
    data() {
        return {
            master: 'Saruman',
        }
    },
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
    created() {
        Event.listen('event-to-tell-the-world', (master) => {
            alert('I am applying, I AM applying: ' + master);
            this.masterTold = true;
        });
    }
});