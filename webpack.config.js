// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//   .BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const tsImportPluginFactory = require("ts-import-plugin");
const slash = require("slash2");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: `${__dirname}/dist`
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    },
    // Add '.js','.jsx','.ts' and '.tsx' as resolvable extensions.
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "awesome-typescript-loader",
        options: {
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: "antd",
                libraryDirectory: "lib",
                style: true
              })
            ]
          })
        }
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
            options: {
              modules: {
                getLocalIdent: (context, _, localName) => {
                  if (
                    context.resourcePath.includes("node_modules") ||
                    context.resourcePath.includes("ant.design.pro.less") ||
                    context.resourcePath.includes("App.less")
                  ) {
                    return localName;
                  }

                  const match = context.resourcePath.match(/src(.*)/);

                  if (match && match[1]) {
                    const path = match[1].replace(".less", "");
                    const arr = slash(path)
                      .split("/")
                      .map(a => a.replace(/([A-Z])/g, "-$1"))
                      .map(a => a.toLowerCase());
                    return `react-typescript-boilerplate${arr.join(
                      "-"
                    )}-${localName}`.replace(/--/g, "-");
                  }
                  return localName;
                }
              }
            }
          },
          {
            loader: "less-loader", // compiles Less to CSS
            options: {
              // modifyVars: {
              //   'primary-color': '#1DA57A'
              // },
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: "file-loader"
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      favicon: "./src/assets/favicon.png",
      template: path.resolve(__dirname, "src", "assets", "index.html")
    })
    // new BundleAnalyzerPlugin()
  ]
};
