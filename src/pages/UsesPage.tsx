import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import UsesCategory from '@/components/UsesCategory';
import { Separator } from '@/components/ui/separator';

const codingTools = [
  {
    name: "Visual Studio Code",
    description: "My primary text editor for everything from web development to scripting. The extension ecosystem is unbeatable.",
    link: "https://code.visualstudio.com/",
  },
  {
    name: "iTerm2",
    description: "A replacement for the default terminal on macOS. I use it with Oh My Zsh for a better command-line experience.",
    link: "https://iterm2.com/",
  },
  {
    name: "Docker",
    description: "Essential for creating consistent development environments and deploying applications.",
    link: "https://www.docker.com/",
  },
  {
    name: "TablePlus",
    description: "A modern, native tool with elegant UI that allows you to simultaneously manage multiple databases.",
    link: "https://tableplus.com/",
  },
];

const hardware = [
  {
    name: "14-inch MacBook Pro (M1 Pro)",
    description: "The perfect balance of power and portability. Handles everything I throw at it without breaking a sweat.",
  },
  {
    name: "LG 34-inch UltraWide Monitor",
    description: "The extra screen real estate is a game-changer for productivity, especially when working with multiple windows.",
  },
  {
    name: "Keychron K2 Mechanical Keyboard",
    description: "A great wireless mechanical keyboard that works well with macOS. I love the tactile feel of the brown switches.",
    link: "https://www.keychron.com/products/keychron-k2-wireless-mechanical-keyboard",
  },
  {
    name: "Logitech MX Master 3S Mouse",
    description: "Ergonomic, precise, and packed with features. The silent clicks and MagSpeed scroll wheel are fantastic.",
    link: "https://www.logitech.com/en-us/products/mice/mx-master-3s.html",
  },
];

const productivityApps = [
  {
    name: "Notion",
    description: "My second brain. I use it for project management, note-taking, and organizing my personal and professional life.",
    link: "https://www.notion.so/",
  },
  {
    name: "Raycast",
    description: "A blazingly fast, totally extendable launcher. It has replaced Spotlight and Alfred for me completely.",
    link: "https://www.raycast.com/",
  },
  {
    name: "Figma",
    description: "My go-to tool for UI/UX design, wireframing, and creating prototypes.",
    link: "https://www.figma.com/",
  },
];

const UsesPage = () => {
  console.log('UsesPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <div className="container max-w-4xl mx-auto px-4 py-16 md:py-24">
          <header className="mb-12 md:mb-16">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">What I Use</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A curated list of the tech, tools, and software I use daily to get things done.
            </p>
          </header>

          <div className="space-y-8 md:space-y-12">
            <UsesCategory title="Coding Tools" items={codingTools} />
            <Separator />
            <UsesCategory title="Hardware" items={hardware} />
            <Separator />
            <UsesCategory title="Productivity" items={productivityApps} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UsesPage;