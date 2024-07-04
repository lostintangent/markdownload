# markdownload

`markdownload` is a Node.js library that exports a single method called `download`. The `download` function accepts an HTTP URL, fetches the contents of the URL, parses it into a DOM using the `jsdom` package, and then uses the `readability` package to parse the document and convert the `textContent` property (which is HTML) into the equivalent markdown.

## Usage

To use the `markdownload` library, follow the instructions below:

1. Install the library and its dependencies:

```bash
npm install axios jsdom readability
```

2. Create a file named `index.js` and add the following code:

```javascript
const { download } = require('./markdownload');

(async () => {
  const url = 'https://example.com';
  const markdown = await download(url);
  console.log(markdown);
})();
```

3. Run the script:

```bash
node index.js
```

## Example

Here is an example of how to use the `download` function:

```javascript
const { download } = require('./markdownload');

(async () => {
  const url = 'https://example.com';
  const markdown = await download(url);
  console.log(markdown);
})();
```
