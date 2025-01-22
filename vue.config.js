const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      console.log('HtmlWebpackPlugin Args:', args); // Debugging output
      args[0].title = 'Taskly'; // Set the title
      console.log('HtmlWebpackPlugin Args:', args); // Debugging output
      return args;
    });
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Backend server
        changeOrigin: true,
      },
    },
  },
});
