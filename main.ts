// import Vue from "vue";

Vue.component('task-item', {
    template: '<li><slot></slot></li>',
});

Vue.component('task-ordered', {
    template: '<ol><slot></slot></ol>',
});

Vue.component('task-list', {
    template:
        `
            <div>
                <task-item v-for="task in tasks" :key="task.id">{{ task.task }}</task-item>
            </div>
        `,
    data() {
        return {
            tasks: [
                { task: 'Pet the dog', completed: false },
                { task: 'Eat rice', completed: true },
                { task: 'Get a job', completed: false },
            ]
        }
    }

});

Vue.component('twitter-hero', {
    name: 'twitter-hero',
    props: { 'title': { required: true}, 'message': { required: true } },
    data() {
        return {
            isVisible: true,
        }
    },
    template:
        `
            <article class="message is-dark">
                <h1>{{ title }}</h1>
                <div class="message-header">
                    <p>Dark</p>
                    <button class="delete" aria-label="delete" @click="toggleMessage"></button>
                </div>
                <div class="message-body" v-show="isVisible">
                    {{ message }}
                </div>
                </article>
        `,
    methods: {
        toggleMessage() {
            this.isVisible = !this.isVisible;
        }
    }
});

Vue.component('bulma-modal', {
    template:
    `
        <div>
            <div class="modal is-active" v-show="showModal">
                <div class="modal-background"></div>
                <div class="modal-content">
                    <div class="box">
                        <h1>Hello World!!"</h1>
                        <p><slot></slot></p>
                    </div>
                </div>
                <button class="modal-close is-large" aria-label="close" @click="hideModal"></button>
            </div>
            <button @click="displayModal">Show Modal</button>
        </div>
    `
    ,
    data() {
        return {
            showModal: false,
        }
    },
    methods: {
        displayModal() {
            this.showModal = true;
        },
        hideModal() {
            this.showModal = false;
        },
    }

});

Vue.component('bulma-tabs', {
    template:
    `
        <div>
            <div class="tabs is-centered">
                <ul>
                    <li v-for="tab in bulmaTabs"><a href="#">{{ tab.name }}</a></li>
                </ul>
            </div>
            <div class="bulma-tabs-details">
                <slot></slot>
            </div>
        </div>
    `,
    data() {
        return {
            bulmaTabs: [],
        };
    },
    mounted() {
        console.log(this.$children[0].$el.innerHTML);
        console.log(this.bulmaTabs);
    },
    created() {
        this.bulmaTabs = this.$children;
    },
});

Vue.component('bulma-tab', {
    template:
    `
        <div><slot></slot></div>
    `,
    props: {
        name: { required: true },
    }

});

new Vue({
    el: '#root',
});

