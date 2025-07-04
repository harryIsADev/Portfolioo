import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { remark } from "remark";
// import html from "remark-html";
import remarkParse from "remark-parse";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";

export async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype) // convert Markdown AST to HTML AST
    .use(rehypeHighlight) // safe, lightweight syntax highlighter
    .use(rehypeStringify) // convert HTML AST to string
    .process(markdown);
  return result.toString();
}
