import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CodeBlock from '@/components/CodeBlock';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { CalendarDays, UserCircle } from 'lucide-react';

// Placeholder content for a single article
const article = {
  title: "Building a Modern UI with React and shadcn/ui",
  author: "Your Name",
  publicationDate: "October 26, 2023",
  content: [
    { type: 'paragraph', text: "In the world of web development, creating a user interface that is both beautiful and functional can be a challenging task. Frameworks like React provide the foundation, but the components themselves often require significant styling and logic. This is where component libraries like shadcn/ui come into play, offering a unique approach to building UIs." },
    { type: 'paragraph', text: "Unlike traditional component libraries such as Material-UI or Ant Design, shadcn/ui is not a package you install. Instead, you use its CLI to add individual, unstyled components directly into your project. This gives you full control over the code, styling, and functionality, making it incredibly flexible and adaptable." },
    { type: 'image', src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "A dashboard with various charts and graphs representing data." },
    { type: 'paragraph', text: "Let's look at an example of how to add a button component and use it in our application. First, you run the CLI command:" },
    { type: 'code', language: 'bash', code: `npx shadcn-ui@latest add button` },
    { type: 'paragraph', text: "This command copies the `button.tsx` file into your `src/components/ui` directory. Now, you can import and use it like any other component in your project. This approach avoids dependency bloat and keeps your codebase clean and maintainable." },
    { type: 'code', language: 'tsx', code: `import { Button } from "@/components/ui/button";\n\nconst MyComponent = () => {\n  return (\n    <Button onClick={() => alert("Button clicked!")}>\n      Click Me\n    </Button>\n  );\n};` },
    { type: 'paragraph', text: "This level of control, combined with excellent accessibility and full TypeScript support, makes shadcn/ui a powerful choice for modern web applications. It empowers developers to build bespoke interfaces without being locked into a specific design system's opinions." }
  ]
};

const codeSnippetForBlock = `import { Button } from "@/components/ui/button";

const MyAwesomeComponent = () => {
  return (
    <div>
      <h1 className="text-2xl">Welcome</h1>
      <Button variant="destructive">Delete</Button>
    </div>
  )
}

export default MyAwesomeComponent;`;


const ArticlePage = () => {
  console.log('ArticlePage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/blog">Blog</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="truncate">{article.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-primary">
              {article.title}
            </h1>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <UserCircle className="mr-2 h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center">
                <CalendarDays className="mr-2 h-4 w-4" />
                <time dateTime={article.publicationDate}>{article.publicationDate}</time>
              </div>
            </div>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none prose-p:text-foreground/80 prose-headings:text-foreground prose-a:text-primary prose-strong:text-foreground">
            <p>
              This is the introductory paragraph of a fascinating article. It's designed to grab your attention and pull you into the detailed content that follows. We'll explore various concepts and showcase practical examples.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="A laptop showing code on the screen"
              className="rounded-lg border"
            />
            <p>
              The body of the article continues here, delving deeper into the subject matter. It uses clear and concise language to explain complex topics. The typography is optimized for readability, ensuring a comfortable reading experience for everyone.
            </p>
            
            <h3>A Code Example</h3>
            <p>
              To illustrate a point, here is a block of code. Note how it is presented clearly, with syntax highlighting and a convenient copy button. This is made possible by our custom `CodeBlock` component.
            </p>
            
            <CodeBlock code={codeSnippetForBlock} language="tsx" />

            <p>
              In conclusion, this article has provided a comprehensive overview of the topic. We hope you found it insightful and that it helps you in your future projects. Thank you for reading.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ArticlePage;