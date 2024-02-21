const bundlerPlugin = require("@11ty/eleventy-plugin-bundle");
const pluginImg = require("@11ty/eleventy-plugin-img");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it"); // need to configute markdown

const { DateTime } = require("luxon");

// Plugin Module Configuration
module.exports = function(eleventyConfig) {
	eleventyConfig.addPlugin(bundlerPlugin);

  eleventyConfig.addPlugin(pluginImg);

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.setServerOptions({
    // Default values are shown:

    // Whether the live reload snippet is used
    liveReload: true,

    // Whether DOM diffing updates are applied where possible instead of page reloads
    domDiff: true,

    // The starting port number
    // Will increment up to (configurable) 10 times if a port is already in use.
    port: 8080,

    // Additional files to watch that will trigger server updates
    // Accepts an Array of file paths or globs (passed to `chokidar.watch`).
    // Works great with a separate bundler writing files to your output folder.
    // e.g. `watch: ["_site/**/*.css"]`
    watch: [],

    // Show local network IP addresses for device testing
    showAllHosts: false,

    // Use a local key/certificate to opt-in to local HTTP/2 with https
    https: {
      // key: "./localhost.key",
      // cert: "./localhost.cert",
    },

    // Change the default file encoding for reading/serving files
    encoding: "utf-8",

    // Show the dev server version number on the command line
    showVersion: false,
  });
};

