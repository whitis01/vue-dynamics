Vue.component('task-item', {
    template: '<li><slot></slot></li>',
});

Vue.component('task-ordered', {
    template: '<ol><slot></slot></ol>',
});

Vue.component('task-list', {
    template: '<ul><slot></slot></ul>',
});

new Vue({
    el: '#root',
});

