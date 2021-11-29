import React from "react";
import { useLoaderData, Link, redirect } from "remix";
import type { LoaderFunction } from "remix";
import showdown from "showdown";
import path from "path";
import fs from "fs";

export let loader: LoaderFunction = ({ params }) => {
  let slug = params.id;
  const filePath = path.join(process.cwd(), "/app/blogs", `${slug}.md`);
  let markdown;
  try {
    markdown = fs.readFileSync(filePath, { encoding: "utf-8" });
  } catch (error) {
    return redirect("/");
  }
  const converter = new showdown.Converter();
  return converter.makeHtml(markdown);
};

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error.message);

  return <div>Hmm there seems to have been an error...</div>;
}

export default function ID() {
  const slug = useLoaderData();
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: slug }} />
      <Link to="/blogs">Home</Link>
    </>
  );
}
