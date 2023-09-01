/** @type { import("gatsby").GatsbyNode["onCreateWebpackConfig"] } */
module.exports.onCreateWebpackConfig = async ({
  actions,
  getConfig,
  plugins,
  loaders,
  stage,
}) => {
  const config = getConfig()
  config.module.rules = [
    ...config.module.rules,
    {
      test: /\.(mov)$/i,
      use: [
        {
          loader: "file-loader",
        },
      ],
    },
  ]

  actions.replaceWebpackConfig(config)
}
