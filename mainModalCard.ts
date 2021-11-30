Vue.component('money-modal-card', {
    template:
    `
        <div>
            <div class="modal is-active" v-show="isVisible">
                <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                        <h1 class="modal-card-title">
                            <slot name="header"></slot>
                        </h1>
                        <button class="delete" aria-label="close" @click="hideModal"></button>
                    </header>
                    <section class="modal-card-body">
                         <p>
                            <slot name="body"></slot>
                         </p>
                    </section>
                    <footer class="modal-card-foot">
                        <h1><slot name="footer"></slot></h1>
                        <button class="button is-success">Save changes</button>
                        <button class="button">Cancel</button>
                    </footer>
                </div>
                <button class="modal-close is-large" aria-label="close" @click="hideModal"></button>
            </div>
            <button @click="showModal">Show Modal</button>
        </div>
    `,
    data() {
        return {
            isVisible: true,
        };
    },
    methods: {
        showModal() {
            this.isVisible = true;
        },
        hideModal() {
            this.isVisible = false;
        },
    }
})

new Vue({
    el: '#root',
});