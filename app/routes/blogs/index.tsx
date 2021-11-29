import React from "react";
import { json, useLoaderData, Link } from "remix";
import type { LoaderFunction } from "remix";
import path from "path";
import fs from "fs";

type IndexRoute = {
  message: string;
  files: string[];
};

export let loader: LoaderFunction = async () => {
  const blogsPath = path.join(process.cwd(), "/app/blogs");
  const files = fs.readdirSync(blogsPath);
  return json({
    message: "Home",
    files,
  });
};

export default function blogs() {
  const data = useLoaderData<IndexRoute>();
  return (
    <div>
      <h2>Blogs</h2>
      <ul>
        {data.files.map((fileName) => {
          const f = fileName.substr(0, fileName.length - 3);
          return (
            <li key={f}>
              <Link to={f}>{f}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
