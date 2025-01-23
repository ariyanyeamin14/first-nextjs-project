import Link from "next/link";

export default async function Home() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const blogs = await data.json();

  return (
    <div className="my-20">
      <h1 className="text-5xl text-center font-bold">Explore Captivating Blog Titles</h1>
      <div className="w-[30%] mx-auto my-10 ">
        <ul className="space-y-3">
          {
            blogs.map((blog, index) =>
              <li key={blog.id}>
                <Link href={`/blog/${blog.id}`}> {index + 1}.  {blog.title} </Link>
              </li>
            )
          }
        </ul>
      </div>
    </div>
  );
}
