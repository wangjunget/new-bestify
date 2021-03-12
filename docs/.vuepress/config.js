const path = require('path');

module.exports = {
    title: 'new-bestify',
    base: '/new-bestify/',
    plugins: [
        ['@vuepress/back-to-top'],
        [
            require('./plugins/demo-block'),
            {
                component: 'DemoBlock',
                locales: [{
                        "lang": "zh-CN",
                        "demo-block": {
                            "hide-text": "隐藏",
                            "show-text": "显示",
                            "copy-text": "复制",
                            "copy-success": "成功"
                        }
                    },
                    {
                        "lang": "en-US",
                        "demo-block": {
                            "hide-text": "Hide",
                            "show-text": "Expand",
                            "copy-text": "Copy",
                            "copy-success": "Successful"
                        }
                    }
                ]
            }
        ]
    ],
    themeConfig: {
        nav: [
            { text: '介绍', link: '/' },
            {
                text: '组件',
                link: '/components/',
            },
            {
                text: '关于我们',
                link: '/about/',
            },
        ],
        sidebarDepth: 0,
        sidebar: {
            '/components/': ['alert', 'button', 'upload', 'prograss', 'image', 'verify', 'badge'],
        },
    },
    chainWebpack: (config, isServer) => {
        config.resolve.alias.set('@theme', path.resolve(__dirname, '../../', 'theme')); //TODO alias未生效
    }
}