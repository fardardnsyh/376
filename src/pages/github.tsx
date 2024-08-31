import Head from "next/head";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { GitHubRepo } from "@/types";
import { ImGithub } from "react-icons/im";
import { FaStar, FaCodeFork } from "react-icons/fa6";
// import { IoMenu } from "react-icons/io5";
// import { IoMdGrid } from "react-icons/io";
import Tags from "@/components/GitHub/Tags";
import LanguageBar from "@/components/GitHub/LanguageBar";

const boxAnim = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    },
};

const boxItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: "easeInOut",
        },
    },
};

enum Dropdown {
    Grid,
    List,
}

type TagGlow = {
    [key: string]: string;
};

export const boxGlows: TagGlow[] = [
    // Languages
    { Python: "hover:shadow-blue-500" },
    { CSS: "hover:shadow-purple-500" },
    { "C++": "hover:shadow-yellow-400" },
    { GDScript: "hover:shadow-slate-800" },
    { Svelte: "hover:shadow-[#ff3e00]" },
    { C: "hover:shadow-gray-500" },
    { Java: "hover:shadow-red-500" },
    { Rust: "hover:shadow-[#CE412B]" },
    { TypeScript: "hover:shadow-[#007acc]" },
    { HTML: "hover:shadow-emerald-500" },
    { JavaScript: "hover:shadow-[#f0db4f]" },
    // Frameworks/Misc
    { React: "hover:shadow-[#61dafb]" },
    { "Next.js": "hover:shadow-[#000000]" },
    { MongoDB: "hover:shadow-[#00ed64]" },
    { "Node.js": "hover:shadow-[#68a063]" },
    { Redis: "hover:shadow-[#dc382d]" },
    { TailwindCSS: "hover:shadow-[#0ea5e9]" },
    { MySQL: "hover:shadow-[#00758f]" },
    { SQLite: "hover:shadow-[#003b57]" },
    { PostgreSQL: "hover:shadow-[#336791]" },
    { Firebase: "hover:shadow-[#ffca28]" },
    { Vercel: "hover:shadow-[#000000]" },
];

function getGlowClass(language: string): string {
    const glow = boxGlows.find((glow) => glow[language]);
    return (
        (glow ? glow[language] : "hover:shadow-white") +
        " hover:shadow-xl duration-500 ease-in-out"
    );
}

export default function Projects() {
    const [repoData, setRepoData] = useState<GitHubRepo[]>([]);
    const [isLoading, setLoading] = useState(true);
    const [dropdown, setDropdown] = useState(Dropdown.Grid);

    useEffect(() => {
        fetch("https://api.github.com/users/leg3ndary/repos")
            .then((response) => response.json())
            .then((repoData) => {
                const filteredData = repoData.filter(
                    (repo: GitHubRepo) =>
                        repo.name != "Leg3ndary" &&
                        repo.name.indexOf("experiments") == -1 &&
                        repo.name.indexOf("learning") == -1
                );
                setRepoData(filteredData);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <Head>
                <title>Ben&apos;s GitHub</title>
                <meta name="theme-color" content="#339ccd" />
                <meta property="og:title" content="Ben's GitHub" />
                <meta
                    property="og:description"
                    content="Ben's Projects Page."
                />
                <meta property="description" content="Ben's GitHub Page." />
                <meta
                    property="og:image"
                    content="https://i.imgur.com/6KdqAaf.png"
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://bzhou.ca/github" />
                <meta
                    name="description"
                    content="Ben's GitHub page, view some of my current projects in progress!"
                />
            </Head>
            <div className="relative top-0 flex justify-center w-full h-[550px] bg-rainbow-gradient animate-breathing-gradient">
                <motion.div
                    className="relative flex h-[370px] lg:h-[300px] bg-white dark:text-[#ececec] dark:bg-[#121212] border-black w-11/12 lg:w-[1000px] drop-shadow-2xl mt-32 lg:mt-40 rounded-3xl duration-1000 ease-in-out transition-all"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="flex flex-col justify-center w-full h-full p-12">
                        <h2 className="p-2 text-lg text-center">
                            TAKE A PEEK AT MY REPOSITORIES
                        </h2>
                        <h1 className="p-2 text-4xl font-black text-center lg:text-6xl">
                            GITHUB
                        </h1>
                        <p className="p-2 py-5 font-light">
                            View some of my current projects in progress, and
                            some of my past projects that I have worked on. This
                            is all autogenerated so people can see what I am
                            working on without me having to manually update the
                            projects page.
                        </p>
                    </div>
                </motion.div>
            </div>
            <div className="flex flex-col flex-wrap content-center justify-center w-full min-h-screen pt-12 pb-16 lg:pb-20 lg:pt-24 3xl:pt-12">
                {isLoading && (
                    <div className="flex flex-col items-center justify-center w-full h-full ">
                        <AiOutlineLoading className="w-24 h-24 text-black animate-spin" />
                    </div>
                )}
                {/* <div className="flex justify-center p-6 ml-auto">
                    <IoMdGrid
                        className={`w-6 h-6 my-auto ${dropdown == Dropdown.Grid ? "text-gray-600 bg-gray-300 rounded-lg" : "text-gray-300"}`}
                        title="Grid"
                    />
                    <IoMenu
                        className="w-6 h-6 my-auto ml-4 text-gray-300"
                        title="List"
                    />  
                </div> */}
                <motion.div
                    className="grid gap-y-12 lg:gap-y-10 w-11/12 md:w-[600px] xl:w-[1300px] 3xl:w-[1850px] py-5 pt-0 grid-flow-row grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-x-5 md:gap-x-7 lg:gap-x-16"
                    variants={boxAnim}
                    initial="hidden"
                    animate="visible"
                >
                    {!isLoading &&
                        repoData.map((repo, index) => (
                            <motion.div
                                className={`flex flex-col justify-center w-full h-full px-5 py-4 bg-white dark:bg-[#121212] dark:text-[#ececec] border-black rounded-xl drop-shadow-xl ${getGlowClass(
                                    repo.language
                                )}`}
                                key={repo.id}
                                variants={boxItem}
                            >
                                <h1 className="text-2xl font-bold">
                                    {repo.name}
                                </h1>
                                <p className="py-3 text-sm font-light">
                                    {repo.description}
                                </p>
                                <div className="flex items-center py-1 mt-auto">
                                    <a
                                        className="flex justify-center items-center px-2.5 py-1.5 text-sm font-normal text-white transition-all duration-200 ease-in-out bg-black rounded-lg hover:bg-[#6e5494] hover:text-white"
                                        href={repo.html_url}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <ImGithub className="w-5 h-5 my-auto mr-1.5" />
                                        GitHub
                                    </a>
                                    {repo.stargazers_count > 0 && (
                                        <p className="flex items-center mx-1.5 text-sm font-base">
                                            <FaStar className="w-4 h-4 mx-1 my-auto text-yellow-300" />
                                            {repo.stargazers_count}
                                        </p>
                                    )}
                                    {repo.forks > 0 && (
                                        <p className="flex items-center justify-center mx-1.5 mr-auto text-sm font-base">
                                            <FaCodeFork className="w-4 h-4 mx-1 my-auto" />
                                            {repo.forks_count}
                                        </p>
                                    )}
                                    <div className="ml-auto">
                                        <Tags rawTags={[repo.language]} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                </motion.div>
            </div>
        </>
    );
}
