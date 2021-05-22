module.exports = {
  async redirects() {
    return [
      {
        source: '/qr',
        destination: '/another',
        permanent: false,
      },
    ]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}
