import { BlogFactoryNextJS } from "@blogfactory/nextjs";
import Link from "next/link";

const blogFactory = new BlogFactoryNextJS(
  process.env.NEXT_PUBLIC_BLOGFACTORY_PROJECT_ID
);
const { getStaticPaths, getStaticProps, PostPage } = blogFactory.pages;

export { getStaticPaths, getStaticProps };

function BlogPostPage(props) {
  return (
    <div>
      <div style={{ margin: "0.5rem" }}>
        <Link href="/blog">{"< Blog"}</Link>
      </div>
      <div style={{ margin: "2rem" }}>
        <PostPage {...props} />
      </div>
    </div>
  );
}

export default BlogPostPage;
