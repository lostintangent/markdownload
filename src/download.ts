#!/usr/bin/env node

import { download } from './index';

const url: string = process.argv[2];

(async () => {
  try {
    const result = await download(url);
    console.log(result);
  } catch (error) {
    console.error('Error:', error);
  }
})();
