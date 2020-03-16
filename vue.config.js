module.exports = {
    configureWebpack: {
        resolve: {
            extensions: [],
            alias: {
                '@': 'src',
                'views': '@/views',
                'component': '@/components',
                'assets': '@/assets'
            }
        }
    }
}