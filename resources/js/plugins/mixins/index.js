const requireContext = require.context('./', false, /.*\.js$/)

var modules = (store, vue) => {
    vue.nextTick();
    return requireContext.keys()
        .map(file =>
            [file.replace(/(^.\/)|(\.js$)/g, ''), requireContext(file)]
        )
        .reduce((modules, [name, module]) => {
            if (name !== 'index') {
                let curr = {
                    ...module.default.methods,
                    data: module.default.data,
                    $store: store,
                    $vue: vue,
                };
                return {...modules, [name]: curr}
            }
            return modules;
        }, {})
}


export default modules;