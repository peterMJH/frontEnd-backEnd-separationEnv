module.exports = {
    /* entry: '../dist/index.html',
    output: {
        path:__dirname + '/dist',
    },*/
    outputDir: '../backend/public',
    assetsDir: '',
    chainWebpack: config => {
        config.plugin('html')
            .tap(args => {
                args[0].filename = 'index.html'
                return args
            })
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true
            }
        },
        port: 8081
    }
}