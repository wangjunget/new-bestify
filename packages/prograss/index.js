import Prograss from './src/main';

/* istanbul ignore next */
Prograss.install = function (Vue) {
  Vue.component(Prograss.name, Prograss);
};

export default Prograss;
