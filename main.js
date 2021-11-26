"use strict";
Vue.component('task-item', {
    template: '<li><slot></slot></li>',
});
Vue.component('task-ordered', {
    template: '<ol><slot></slot></ol>',
});
Vue.component('task-list', {
    template: "\n            <div>\n                <task-item v-for=\"task in tasks\" :key=\"task.id\">{{ task.task }}</task-item>\n            </div>\n        ",
    data: function () {
        return {
            tasks: [
                { task: 'Pet the dog', completed: false },
                { task: 'Eat rice', completed: true },
                { task: 'Get a job', completed: false },
            ]
        };
    }
});
Vue.component('twitter-hero', {
    name: 'twitter-hero',
    props: ['title', 'message'],
    data: function () {
        return {
            isVisible: true,
        };
    },
    template: "\n            <article class=\"message is-dark\">\n                <h1>{{ title }}</h1>\n                <div class=\"message-header\">\n                    <p>Dark</p>\n                    <button class=\"delete\" aria-label=\"delete\" @click=\"toggleMessage\"></button>\n                </div>\n                <div class=\"message-body\" v-show=\"isVisible\">\n                    {{ message }}\n                </div>\n                </article>\n        ",
    methods: {
        toggleMessage: function () {
            this.isVisible = !this.isVisible;
        }
    }
});
new Vue({
    el: '#root',
});
//# sourceMappingURL=main.js.map