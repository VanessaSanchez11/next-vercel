import React from "react";
import { MainLayout } from "../components/layouts/MainLayout";
import Link from 'next/link';
const contact = () => {
  return (
   <MainLayout>
      <h1 className={'title'}>
        Welcome to <Link href="./">Contact</Link>
      </h1>

      <p className="description">
        Get started by editing{" "}
        <code className="code">pages/index.js</code>
      </p>
   </MainLayout>
  );
};

export default contact;
