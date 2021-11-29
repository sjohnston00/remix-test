import { useLoaderData, Link } from "remix";
import type { LoaderFunction } from "remix";
import { getBlogs } from "../../utils/functions.server";

type IndexRoute = {
  message: string;
  files: string[];
};

export let loader: LoaderFunction = () => {
  console.log(process.env.NODE_ENV);

  return {
    message: "Home",
    files: getBlogs(),
  };
};

export default function blogs() {
  const data = useLoaderData<IndexRoute>();
  console.log(process.env.NODE_ENV);

  return (
    <div>
      <h1>Blogs</h1>
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
      <Link to="/">Home</Link>
    </div>
  );
}
