// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: "/zap/", static: true, dot: true },
    src: "/zap/_dist/",
  },
  plugins: ["@snowpack/plugin-typescript"],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    baseUrl: "/zap",
    metaUrlPath: "/zap/_snowpack/",
  },
};
