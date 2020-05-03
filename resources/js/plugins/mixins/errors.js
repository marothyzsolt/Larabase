import Vue from 'vue';

export default {
    data: {
        global: {},
    },

    methods: {
        handle(module, errors) {
            if (errors === undefined) {
                errors = module;
                module = 'global';
            }
            this.data[module] = errors;

            // THIS IS MUST BECAUSE IF NOT CALL THIS EVENT, THE CHANGE WILL NOT BE A REACTIVE EVENT, AND NOT REFRESH
            // THE ERRORS IN COMPONENTS !!!!!
            Vue.set(this.data, 'reactive', Math.random());
            Vue.delete(this.data, 'reactive');
        },
        check(module, name) {
            if (name === undefined) {
                name = module;
                module = 'global';
            }
            if (this.data[module] === undefined) {
                this.clear(module);
            }

            return this.data[module][name];
        },
        clear(module, name) {
            if (module === undefined) {
                module = 'global';
            }
            if (name === undefined) {
                this.data[module] = {};
            } else {
                if (this.data[module][name] !== undefined) {
                    this.data[module][name] = '';
                }
            }

            Vue.set(this.data, 'reactive', Math.random());
            Vue.delete(this.data, 'reactive');
        }
    }
}