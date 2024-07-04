 const axios = require('axios');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { Readability } = require('@mozilla/readability');
const TurndownService = require('turndown');

const download = async (url) => {
  try {
    const response = await axios.get(url);
    const dom = new JSDOM(response.data);
    const reader = new Readability(dom.window.document);
    const article = reader.parse();
    const turndownService = new TurndownService();
    const markdown = turndownService.turndown(article.content);
    return { html: article.content, markdown, title: article.title };
  } catch (error) {
    console.error('Error downloading content:', error);
    throw error;
  }
};

module.exports = { download };
