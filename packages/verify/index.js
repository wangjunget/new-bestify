import Verify from './src/main';

/* istanbul ignore next */
Verify.install = function (Vue) {
    Vue.component(Verify.name, Verify);
};

export default Verify;