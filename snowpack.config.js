// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: { public: { url: "/", static: true, dot: true }, src: "/_dist" },
  plugins: ["@snowpack/plugin-typescript"],
  // site hosted on https://carlo-nomes.github.io/zap
  buildOptions: { baseUrl: "/zap" },
  optimize: { bundle: true, minify: true, target: "es2018" },
};
