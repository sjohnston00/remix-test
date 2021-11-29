import path from "path";
import fs from "fs";
import { redirect } from "remix";
import showdown from "showdown";

export function getBlogs() {
  const blogsPath = path.join(process.cwd(), "/app/blogs");
  const files = fs.readdirSync(blogsPath);
  return files;
}

export function getBlog(name: string) {
  const filePath = path.join(process.cwd(), "/app/blogs", `${name}.md`);
  let markdown;
  try {
    markdown = fs.readFileSync(filePath, { encoding: "utf-8" });
  } catch (error) {
    return redirect("/");
  }

  const converter = new showdown.Converter();
  return converter.makeHtml(markdown);
}
