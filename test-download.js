const { download } = require('./index');

const url = process.argv[2];

(async () => {
  try {
    const result = await download(url);
    console.log(result);
  } catch (error) {
    console.error('Error:', error);
  }
})();
