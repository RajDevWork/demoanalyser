const {join} = require('path');

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
  // Changes the cache location for Puppeteer.
  cacheDirectory: join(__dirname+"../tmp/rajdevwork-demoanalyser/.cache/puppeteer/chrome/linux-114.0.5735.133", '.cache', 'puppeteer'),
};