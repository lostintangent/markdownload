import axios from "axios";
import { JSDOM } from "jsdom";
import { Readability } from "@mozilla/readability";
import TurndownService from "turndown";

interface DownloadResult {
  html?: string;
  markdown: string;
  title?: string;
}

const removeBreadcrumbs = (document: Document) => {
  const breadcrumbs = document.querySelectorAll('[itemtype="https://schema.org/BreadcrumbList"]');
  breadcrumbs.forEach((breadcrumb) => {
    breadcrumb.remove();
  });
};

const download = async (url: string): Promise<DownloadResult> => {
  try {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = `https://${url}`;
    }

    const response = await axios.get(url);

    const contentType = response.headers["content-type"];
    if (contentType.startsWith("text/markdown") || contentType.startsWith("text/plain")) {
      return { markdown: response.data };
    }

    const dom = new JSDOM(response.data);
    removeBreadcrumbs(dom.window.document);
    const reader = new Readability(dom.window.document);
    const article = reader.parse();
    if (!article) {
      throw new Error("Unable to parse article");
    }

    const turndownService = new TurndownService();
    const markdown = turndownService.turndown(article.content);
    return { html: article.content, markdown, title: article.title };
  } catch (error) {
    console.error("Error downloading content:", error);
    throw error;
  }
};

export { download };
