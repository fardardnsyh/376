import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({ children }) => (
            <h1 className="py-2 text-3xl font-black lg:text-5xl">{children}</h1>
        ),
        h2: ({ children }) => (
            <h2 className="py-2 text-lg font-black lg:text-2xl">{children}</h2>
        ),
        h3: ({ children }) => (
            <h3 className="py-2 font-black text-md lg:text-xl">{children}</h3>
        ),
        p: ({ children }) => (
            <p className="my-3 text-sm font-light lg:text-lg">{children}</p>
        ),
        a: ({ children, href }) => (
            <a
                className="text-blue-500 underline"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        ),
        strong: ({ children }) => (
            <strong className="font-bold animate-breathing-gradient bg-rainbow-gradient bg-clip-text">
                {children}
            </strong>
        ),
        img: (props) => (
            <Image
                className="w-full h-auto rounded-lg shadow-lg"
                {...(props as ImageProps)}
                width={2500}
                height={2500}
                alt={{ ...props }.alt as string}
            />
        ),
        ol: ({ children }) => <ol className="list-decimal">{children}</ol>,
        ul: ({ children }) => <ul className="list-disc">{children}</ul>,
        li: ({ children }) => (
            <li className="my-2 text-sm font-light lg:text-lg">{children}</li>
        ),
        ...components,
    };
}
