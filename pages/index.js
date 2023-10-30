import About from "@/components/about"
import Contact from "@/components/contact"
import Github from "@/components/github"
import Hero from "@/components/hero"
import Project from "@/components/project"

function index() {
    return (
        <>
            <Hero/>
            <About/>
            <Project />
            <Github />
            <Contact i/>
        </>
    )
}

export default index
