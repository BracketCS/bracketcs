import Link from "next/link";
import Logo from "../../public/static/logo";
import { motion } from "framer-motion";
import Image from "next/image";
import { LeftBrace, RightBrace } from "@/components/Braces";
import Head from "next/head";

export default function BracketCSHome() {
  return (
    <>
      <Head>
        <title>BracketCS</title>
        <meta
          name="description"
          content="BracketCS is an organization that hosts high-quality programming contests for students."
        />
        <meta
          name="keywords"
          content="bracketcs, cerealcodes, usaco, competitive programming"
        />
        <meta name="author" content="BracketCS" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="flex flex-1 flex-col items-center bg-black text-white">
        <div className="mt-24 flex flex-col">
          <motion.h1
            initial={{ translateY: -200 }}
            animate={{ translateY: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="flex flex-row items-center justify-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
          >
            {/* &#123; */}
            <LeftBrace />
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100%" }}
              transition={{
                duration: 3,
                delay: 2.75,
                type: "spring",
                ease: "easeInOut",
              }}
              className="mx-4 inline-block overflow-hidden"
            >
              BracketCS
            </motion.div>
            <RightBrace />
            {/* &#125; */}
          </motion.h1>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 3,
            delay: 2.75,
            type: "spring",
            ease: "easeInOut",
          }}
          className="mx-4 inline-block overflow-hidden text-lg sm:text-xl lg:text-2xl"
        >
          Coming soon &trade;
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.5 }}
          className="mx-12 mt-24 flex flex-row gap-x-8"
        >
          <div className="flex flex-col rounded-xl border-2 border-slate-700 p-4 hover:border-slate-400">
            <Link
              className="text-sm hover:underline lg:text-2xl"
              href="https://www.cerealcodes.org"
            >
              CerealCodes &rarr;
            </Link>
            <p className="mt-2 text-sm">Coming in Summer 2023!</p>
          </div>
          <div className="flex flex-col rounded-xl border-2 border-slate-700 p-4 hover:border-slate-400">
            <Link
              className="text-sm hover:underline lg:text-2xl"
              href="https://www.cerealcodes.org/about"
            >
              Bracket Team &rarr;
            </Link>
            <p className="mt-2 text-sm">The minds behind BracketCS</p>
          </div>
        </motion.div>
        {/* <LeftBrace /> */}
        {/* <RightBrace /> */}
      </main>
    </>
  );
}
