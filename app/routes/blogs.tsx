import React from "react";
import { Outlet } from "remix";

export default function Blogs() {
  return (
    <>
      <h1>Blogs</h1>
      <Outlet />
    </>
  );
}
