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

new Vue({
    el: '#root',
});

