const { i18n } = require("./next-i18next.config");


const nextConfig = {
    reactStrictMode: true,
    i18n,
    images: {
      domains: ["fakestoreapi.com"],
    },
  };
  
  module.exports = nextConfig;
  