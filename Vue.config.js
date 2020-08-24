module.exports = {
    devServer: {
        proxy: {
            //配置跨域
            '/ajax': {
                target: 'https://m.maoyan.com',
                ws:true,
                changOrigin:true
            }
        }
    }
  }