import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, json, Link } from "remix";

export let loader: LoaderFunction = () => {
  return json({
    message: "Hello"
  });
};

export let meta: MetaFunction = () => {
  return {
    title: "Remix",
    description: "Home page"
  };
};

export default function Index() {
  let data = useLoaderData();

  return (
    <div>
      <h1>{data.message}</h1>
    </div>
  );
}
