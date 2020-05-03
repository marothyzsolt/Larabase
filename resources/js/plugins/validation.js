const requireContext = require.context('../rules', false, /.*\.js$/)


const ruleList = requireContext.keys()
    .map(file =>
        [file.replace(/(^.\/)|(\.js$)/g, ''), requireContext(file)]
    )
    .reduce((modules, [name, module]) => {
        return { ...modules, [name]: module }
    }, {});


const Validator = {
    install(Vue, options) {
        Vue.prototype.$rules = ruleList;

        Vue.prototype.$rule = (name, value, data) => {
            let pcs = name.split('.');
            let sector = '';
            let validator = '';

            if (pcs.length === 1) {
                sector = 'general';
                validator = pcs[0];
            } else {
                sector = pcs[0];
                validator = pcs[1];
            }

            let response = ruleList[sector].default[validator](value, data);
            if (typeof response !== 'string' && typeof response !== 'boolean') {
                return false;
            } 
            return response;
        }
    }
};

export default Validator;