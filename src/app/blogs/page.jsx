"use client";

import { Blogs } from "@/components/Blogs/blogs";
import { getBlogs } from "@/redux/slices/blogSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
function BlogsPage() {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(getBlogs());
  }, []);

  return (
    <main>
      <Blogs blogs={blogs} />
    </main>
  );
}

export default BlogsPage;
