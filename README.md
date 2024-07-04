# markdownload

`markdownload` is a Node.js library that exports a single method called `download`. The `download` function accepts an HTTP URL, fetches the contents of the URL, checks the `Content-Type` header of the response, and if the `Content-Type` is `text/markdown`, returns the response data as markdown without further parsing. If the `Content-Type` is not `text/markdown`, the function parses the content into a DOM using the `jsdom` package, and then uses the `readability` package to parse the document and convert the `textContent` property (which is HTML) into the equivalent markdown.

## Usage

To use the `markdownload` library, follow the instructions below:

1. Install the library and its dependencies:

```bash
npm install axios jsdom readability typescript ts-node
```

2. Create a file named `index.ts` and add the following code:

```typescript
import { download } from './markdownload';

(async () => {
  const url = 'https://example.com';
  const markdown = await download(url);
  console.log(markdown);
})();
```

3. Run the script:

```bash
npx ts-node index.ts
```

## Example

Here is an example of how to use the `download` function:

```typescript
import { download } from './markdownload';

(async () => {
  const url = 'https://example.com';
  const markdown = await download(url);
  console.log(markdown);
})();
```

## Note

The `download` function now checks the `Content-Type` header of the response. If the `Content-Type` is `text/markdown`, the function returns the response data as markdown without further parsing. If the `Content-Type` is not `text/markdown`, the function proceeds with parsing the content into a DOM using `jsdom`, and then uses the `readability` package to parse the document and convert the `textContent` property into markdown.

The `download` function will append `https://` to the beginning of the provided URL if it doesn't already include it.

## Testing the download function from the command line

A new NPM script has been added to make it easy to test the `download` function from the command line. You can use the script as follows:

1. Run the script with a URL:

```bash
npm run download <url>
```

Replace `<url>` with the URL you want to test.

2. The script will fetch the content from the provided URL and log the result to the console.
