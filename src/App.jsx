import About from "./components/About";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import EditorDemos from "./components/EditorDemos";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-200 selection:bg-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-white dark:bg-[#090f1b]"></div>
      </div>
      <div className="container mx-auto px-8">
        {/* <CustomCursor /> */}
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <EditorDemos/>
        {/* <Experience /> */}
        {/* <Projects /> */}
        <Contact />
      </div>
    </div>
  );
};

export default App;
