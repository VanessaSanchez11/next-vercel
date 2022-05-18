import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";
import DarkLayout from "../components/layouts/DarkLayout";

const About = () => {
  return (
    <>
      <h1 className={'title'}>
        Welcome to <Link href="./contact">About</Link>
      </h1>

      <p className="description">
        Get started by editing <code className="code">pages/index.js</code>
      </p>
    </>
  );
};

About.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};

export default About;
