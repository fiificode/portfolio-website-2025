"use client";

import PageTransition from "@/components/page-transition";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/SocialIcons";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  function SocialLink({
    className,
    href,
    children,
    icon: Icon,
  }: {
    className?: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
    children: React.ReactNode;
  }) {
    return (
      <li className={clsx(className, "flex")}>
        <Link
          href={href}
          target="_blank"
          className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
        >
          <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
          <span className="ml-4">{children}</span>
        </Link>
      </li>
    );
  }

  function MailIcon(props: React.ComponentPropsWithoutRef<"svg">) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
        <path
          fillRule="evenodd"
          d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
        />
      </svg>
    );
  }
  return (
    <PageTransition>
      <div className="container items-center mx-auto px-4 py-12 w-full">
        <h1 className="text-4xl md:text-6xl font-black mb-8">ABOUT</h1>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="mb-4">
              I’m Franklin Mensah, a Frontend Developer from Ghana with a
              passion for crafting dynamic, user-centered digital experiences.
            </p>
            <p className="mb-4">
              My journey in tech began with a curiosity for design and
              problem-solving, driving me to blend creativity with code to build
              interfaces that are both visually appealing and highly functional.
            </p>
            <p>
              With a strong foundation in HTML, CSS, JavaScript, and modern
              frameworks like React, I’ve developed a keen eye for detail and a
              focus on responsive, accessible design. I thrive in collaborative
              environments, transforming ideas into intuitive and engaging user
              experiences.
            </p>
          </div>

          <div>
            <p className="mb-4">
              I’ve had the opportunity to work on diverse projects, from complex
              dashboards to e-commerce platforms, always aiming to create
              seamless interactions that resonate with users.
            </p>
            <p className="mb-4">
              When I’m not coding, you’ll find me exploring design trends,
              experimenting with new technologies, or finding inspiration in art
              and nature.
            </p>
            <p>
              I believe that great frontend development is more than just code —
              it’s about understanding users, telling stories through design,
              and delivering meaningful experiences.
            </p>
          </div>
        </div> */}

        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] w-full lg:gap-y-12">
          <div className="lg:pl-[120px]">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={"/myProfilePic.jpeg"}
                width={320}
                height={320}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-3 items-center w-full lg:w-auto">
            <h3 className="text-normal font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-teal-500">
              I’m Franklin Mensah, I live in Ghana where I craft dynamic,
              user-centered digital experiences.
            </h3>
            <div className="mt-6 space-y-4 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                My journey in tech began with a curiosity for design and
                problem-solving, driving me to blend creativity with code to
                build interfaces that are both visually appealing and highly
                functional.
              </p>
              <p>
                With a strong foundation in HTML, CSS, JavaScript, and modern
                frameworks like React, I’ve developed a keen eye for detail and
                a focus on responsive, accessible design. I thrive in
                collaborative environments, transforming ideas into intuitive
                and engaging user experiences.
              </p>
              <p>
                I’ve had the opportunity to work with companies in Germany and
                Africa on diverse projects, from complex dashboards to
                e-commerce platforms, always aiming to create seamless
                interactions that resonate with users.
              </p>
              <p>
                I believe that great frontend development is more than just code
                — it’s about understanding users, telling stories through
                design, and delivering meaningful experiences.
              </p>
            </div>
          </div>
          <div className="lg:pl-[120px]">
            <ul role="list">
              <SocialLink
                href="https://www.linkedin.com/in/franklin-mensah-774191225/"
                icon={LinkedInIcon}
              >
                Follow on LinkedIn
              </SocialLink>

              <SocialLink
                href="https://github.com/fiificode"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://x.com/blessedfm"
                icon={XIcon}
                className="mt-4"
              >
                Follow on X
              </SocialLink>

              <SocialLink
                href="fiificode@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                fiificode@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
