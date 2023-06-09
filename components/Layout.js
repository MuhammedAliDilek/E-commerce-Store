import Head from "next/head";
import Navbar from "./Navbar";
import { ToastContainer } from "react-toastify";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + " - The Continental" : "Continental"}</title>
        <meta name="description" content="Generated by createNextApp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer position="bottom-center" limit={1} />

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <Navbar />
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center shadow-inner items-center">
          <p>Copyright @ 2023 THE CONTINENTAL</p>
        </footer>
      </div>
    </>
  );
}
