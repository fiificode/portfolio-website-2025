"use client";

import type React from "react";

import { useState } from "react";
import PageTransition from "@/components/page-transition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import clsx from "clsx";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/SocialIcons";
import { MailIcon } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to your backend
    console.log("Form submitted:", formState);
    setFormState({ name: "", email: "", message: "" });
    window.location.href = "mailto:fiificode@gmail.com";
    setIsSubmitted(true);
  };

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

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-6xl font-black mb-8">
          LET&apos;S TALK
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="mb-6">
              I'm always open to new opportunities, collaborations, and
              conversations. Whether you have a project in mind or just want to
              say hello, feel free to reach out!
            </p>

            <div className="space-y-4">
              <p>
                <strong>Email:</strong> fiificode@gmail.com
              </p>
              <p>
                <strong>Location:</strong> Accra, Ghana
              </p>
              <div className="">
                <p>
                  <strong>Socials:</strong>
                </p>
                <ul
                  role="list"
                  className="flex flex-col md:flex-row py-2 md:items-center"
                >
                  <SocialLink
                    href="https://www.linkedin.com/in/franklin-mensah-774191225/"
                    icon={LinkedInIcon}
                  >
                    Follow on LinkedIn
                  </SocialLink>

                  <SocialLink
                    href="https://github.com/fiificode"
                    icon={GitHubIcon}
                    // className="mt-4"
                  >
                    Follow on GitHub
                  </SocialLink>
                  <SocialLink
                    href="https://x.com/blessedfm"
                    icon={XIcon}
                    // className="mt-4"
                  >
                    Follow on X
                  </SocialLink>
                </ul>
                <SocialLink
                  href="mailto:fiificode@gmail.com"
                  icon={MailIcon}
                  className="border-t border-zinc-100 py-2 dark:border-zinc-700/40"
                >
                  fiificode@gmail.com
                </SocialLink>
              </div>
            </div>
          </div>

          <div>
            {isSubmitted ? (
              <div className="bg-green-50 dark:bg-green-950 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-green-800 dark:text-green-300 mb-2">
                  Message Sent!
                </h3>
                <p className="text-green-700 dark:text-green-400">
                  Thank you for reaching out. I'll get back to you as soon as
                  possible.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="button" onClick={handleSubmit} className="w-full mt-4">
                  Send Message
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
