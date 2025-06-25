import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Mountain } from "lucide-react";

const Header: React.FC = () => {
  console.log('Header loaded');

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `transition-colors hover:text-foreground/80 ${
      isActive ? 'text-foreground' : 'text-foreground/60'
    }`;

  const navLinks = (
    <>
      <NavLink to="/" className={navLinkClasses}>Home</NavLink>
      <NavLink to="/blog" className={navLinkClasses}>Blog</NavLink>
      <NavLink to="/projects" className={navLinkClasses}>Projects</NavLink>
      <NavLink to="/uses" className={navLinkClasses}>Uses</NavLink>
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <Mountain className="h-6 w-6" />
            <span className="font-bold">Your Name</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks}
        </nav>

        {/* Mobile Navigation */}
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <Link to="/" className="mr-6 flex items-center space-x-2 mb-6">
                <Mountain className="h-6 w-6" />
                <span className="font-bold">Your Name</span>
              </Link>
              <nav className="flex flex-col space-y-4 text-lg">
                {navLinks}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;