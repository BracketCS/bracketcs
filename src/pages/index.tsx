import Link from "next/link";
import Logo from "../../public/static/logo";
import { motion } from 'framer-motion';


export default function BracketCSHome() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-black">
      <div className="mt-24 flex flex-col">
        <motion.h1
          initial={{ translateY: -200 }}
          animate={{ translateY: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className="lg:text-8xl flex flex-row justify-center md:text-7xl sm:text-6xl text-5xl">
          &#123;
          <motion.div
            initial={{ opacity: 0, maxWidth: 0, width: 0 }}
            animate={{ opacity: 1, maxWidth: "max-content", width: "100%" }}
            transition={{ duration: 3, delay: 0.5, type: "spring", }}
            className="inline-block overflow-hidden"
          >
            BracketCS
          </motion.div>
          &#125;
        </motion.h1>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.5, staggerChildren: 0.5 }}
        className="mt-24 mx-12 flex flex-row gap-x-10">
        <div className="flex flex-col">
          <Link className="lg:text-2xl text-lg underline" href="https://www.cerealcodes.org">
            CerealCodes &rarr;
          </Link>
          <p>Coming in Summer 2023!</p>
        </div>
        <div className="flex flex-col">
          <Link className="lg:text-2xl text-lg underline hover:text-" href="https://www.cerealcodes.org/about">
            Bracket Team &rarr;
          </Link>
          <p>The minds behind BracketCS</p>
        </div>
      </motion.div>
    </main>
  );
}
