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
    props: [ 'title', 'tagline' ],
    data() {
        return {
            isVisible: true,
        }
    },
    template:
        `
            <div class="hero-unit container">
              <div>
                <h1>{{ title }}
                    <button type="button" @click="hideTagLine">X</button>
                </h1>
              </div>
              <p v-show="isVisible">{{ tagline }}</p>
              <p>
                <a class="btn btn-primary btn-large">
                  Learn more
                </a>
              </p>
            </div>
        `,
    methods: {
        hideTagLine() {
            this.isVisible = !this.isVisible;
        }
    }
})

new Vue({
    el: '#root',
});

