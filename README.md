# ⬇️ Markdownload

`markdownload` is a Node.js library that allows scraping an arbitrary URL, and turning it into a stripped-down Markdown document. Among other things, this allows retrieving web links for use with LLM-powered applications.

## Getting started

To use the `markdownload` library, follow the instructions below:

1. Install the library:

```bash
npm install markdownload
```

2. Import the library and download a URL:

```typescript
import { download } from "markdownload";

(async () => {
  const { markdown, title } = await download("example.com");

  // Do something with the markdown/title
})();
```
