import type { MetaFunction } from "remix";
import { Link } from "remix";

export let meta: MetaFunction = () => {
  return {
    title: "Remix",
    description: "Home page"
  };
};

export default function Index() {
  return (
    <>
      <h1>Home</h1>
      <Link to='/blogs'>Blogs</Link>
    </>
  );
}
