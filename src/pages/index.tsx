import { type NextPage } from "next";
import React from "react";
import logo from "~/images/logo.png";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center ">
      <header className="mb-8 flex flex-col gap-4">
        <Image src={logo} alt="Food Delivery App" width={300} height={300} />
        <h1 className="text-4xl font-bold text-gray-800">Food Delivery App</h1>
      </header>

      <p className="mb-8 text-lg text-gray-600">
        Order your favorite food from local restaurants and get it delivered to
        your doorstep.
      </p>

      <Link href="/pedidos">
        <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600">
          Get Started
        </button>
      </Link>

      <footer className="mt-8 text-gray-600">
        &copy; 2023 Food Delivery App. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
