import { BlogFactoryNextJS } from "@blogfactory/nextjs";
import Link from "next/link";
import { useState, useEffect } from "react";

const blogFactory = new BlogFactoryNextJS("[INSERT_API_KEY_HERE]").pages;

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await blogFactory.listPosts();

        setPosts(data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  return (
    <div style={{ margin: "2rem" }}>
      <h2>Blog</h2>
      {posts.map((p) => (
        <Link
          href={`/blog/${p.urlSlug}`}
          key={p.id}
          style={{ textDecoration: "underline" }}
        >
          {p.title}
        </Link>
      ))}
    </div>
  );
}
