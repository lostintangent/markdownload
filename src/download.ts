#!/usr/bin/env node

import { download } from "./index";

const url: string = process.argv[2];
const onlyMarkdown: boolean = process.argv.includes("--md");

(async () => {
  try {
    const result = await download(url);
    if (onlyMarkdown) {
      console.log(result.markdown);
    } else {
      console.log(result);
    }
  } catch (error) {
    console.error("Error:", error);
  }
})();
