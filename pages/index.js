import About from "@/components/about"
import Contact from "@/components/contact"
import Github from "@/components/github"
import Hero from "@/components/hero"
import Project from "@/components/project"
import Head from "next/head"

function index() {
    return (
      <>
        <Head>
          <title>Jyoti KM — ReactJS | Next JS developer</title>
          <meta name="title" content="Jyoti KM — ReactJS | Next JS developer" />
          <meta
            name="description"
            content="Hi, Iam
Jyoti KM from India.
I build things for the web.
I’m a full-stack developer proficient in React and Next.js, I specialize in crafting captivating websites with stunning animations using GSAP. I craft flawless, captivating websites that uniquely showcase your brand, irresistibly drawing in your target audience."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://jyoti-km.vercel.app/" />
          <meta
            property="og:title"
            content="Jyoti KM — ReactJS | Next JS developer"
          />
          <meta
            property="og:description"
            content="Hi, Iam
Jyoti KM from India.
I build things for the web.
I’m a full-stack developer proficient in React and Next.js, I specialize in crafting captivating websites with stunning animations using GSAP. I craft flawless, captivating websites that uniquely showcase your brand, irresistibly drawing in your target audience."
          />
          <meta
            property="og:image"
            content="https://metatags.io/images/meta-tags.png"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://jyoti-km.vercel.app/" />
          <meta
            property="twitter:title"
            content="Jyoti KM — ReactJS | Next JS developer"
          />
          <meta
            property="twitter:description"
            content="Hi, Iam
Jyoti KM from India.
I build things for the web.
I’m a full-stack developer proficient in React and Next.js, I specialize in crafting captivating websites with stunning animations using GSAP. I craft flawless, captivating websites that uniquely showcase your brand, irresistibly drawing in your target audience."
          />
          <meta
            property="twitter:image"
            content="https://raw.githubusercontent.com/SurajjBhardwaj/Portfolio2023/new/public/3.jpg"
          />
                
        </Head>

        <Hero />
        <About />
        <Project />
        <Github />
        <Contact i />
      </>
    );
}

export default index
