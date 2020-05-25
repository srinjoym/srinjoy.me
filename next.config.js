const withPlugins = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withOptimizedImages = require('next-optimized-images')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

const nextConfig = {
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
}

module.exports = withPlugins([withCSS, withSass, withOptimizedImages, withMDX, {
  pageExtensions: ['js', 'jsx', 'mdx', 'md', 'tsx'],
}], nextConfig)
