module.exports = {
    publicPath:'/',//基本路径
    outputDir:'dist',//构建输出目录
    assetsDir:'static',//静态资源目录
    indexPath:'index.html',//html输出路径
    productionSourceMap:false,//生产环境SourceMap
    devServer: {
        open: true,
    },
    configureWebpack: {
        
    }
}