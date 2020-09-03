import Verify from './src/main';

Verify.install = function (Vue) {
    Vue.component(Verify.name, Verify);
};

export default Verify;