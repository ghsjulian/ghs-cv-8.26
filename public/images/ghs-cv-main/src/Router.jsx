/* Importing All Routes And Components Here...*/
import Layouts from "./layouts/Layouts";
import Home from "./pages/Home";
import Contact from "./components/Contact";
import AboutSection from "./components/AboutSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Marketing from "./components/Marketing";
import NotFound from "./components/404";

const MyRoutes = [
    {
        path: "/",
        element: <Layouts />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "services",
                element: <Marketing />
            },
            {
                path: "skills",
                element: <Skills />
            },
            {
                path: "projects",
                element: <Projects />
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
];

export default MyRoutes;
