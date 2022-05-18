import {MainLayout} from "../components/layouts/MainLayout";
import Link from 'next/link'

export default function Home() {
  return (
    <MainLayout>
      <h1 className={"title"}>
        Welcome to <Link href="./About">Home</Link>
      </h1>

      <p className="description">
        Get started by editing{" "}
        <code className="code">pages/index.js</code>
      </p>
    </MainLayout>
  );
}
