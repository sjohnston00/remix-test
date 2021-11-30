import React from "react";
import { useLoaderData, Link, redirect } from "remix";
import type { LoaderFunction } from "remix";
import { getBlog } from "../../utils/functions.server";

export let loader: LoaderFunction = async ({ params }) => {
  return getBlog(params.id || "");
};

export default function id() {
  const blog = useLoaderData();
  return (
    <>
      <article dangerouslySetInnerHTML={{ __html: blog }} />
      <Link to='/blogs'>Back</Link>
    </>
  );
}
