import Badge from "./src/main.vue"

//安装
Badge.install = function(Vue) {
    Vue.component(Badge.name, Badge);
};

export default Badge