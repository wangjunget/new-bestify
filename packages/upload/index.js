import Upload from './src/main';

/* istanbul ignore next */
Upload.install = function (Vue) {
    Vue.component(Upload.name, Alert);
};

export default Upload;
