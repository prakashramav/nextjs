import Link from 'next/link'
import Post from './post/page';

export default function Home() {
  return (
    <>
      <h1>Technical Pages</h1>
      <div>
        <p>
        <Link href='/about'>About</Link> {" "}
        </p>
        <p>
        <Link href='/blogs'>Blogs</Link>
        </p>
        <p>
        <Link href='/services'>Services</Link>
        </p>
        <p>
          <Link href='/files'>Files</Link>
        </p>
      </div>
    </>
  );
}
