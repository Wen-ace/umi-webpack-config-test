
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: false,
      dynamicImport: false,
      title: 'react-static-url-test',
      dll: false,

      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
  // runtimePublicPath: true,                                                   // 
  // exportStatic: {                                                            // 输出所有router 文件 ，好像可以使用browser router 模式了
  //   dynamicRoot: 'app'
  // },
  publicPath: 'http://localhost:8000/',                                         // 配置 静态资源路径  css js img 等等
  urlLoaderExcludes: [/\.(png|jpe?g|gif|svg)$/],                                // 不使用webpack图片的默认配置
  chainWebpack: (config, { webpack }) => {                                      // 重新配置webpack规则 rule ,这里以修改图片file-loader为例（取消小图片转换base64配置）。
    config.module.rule('assets')
      .test(/\.(png|jpe?g|gif|svg)$/)
      .use('file')
      .loader('file-loader')
      .options({ limit: 0 })
      ;
  }
}
