import { Divider } from "@/components/choose/divider";

import TaglineBar from "@/components/home/service/title";
import Main from "@/components/service/main";
;import title from '@/public/title.png'
import divider from '@/public/divider.jpg'
import FeatureGrid from "@/components/choose/grid";
import {CoreValues} from "@/components/core/try";
import { Tech } from "@/components/tech";
import  FAQSection  from "@/components/FAQ";
import HeroCarousel from "@/components/home/carousel";
import core from "@/public/core.jpeg"
import { CoreDivider } from "@/components/core/coredivider";
import { Try } from "@/components/choose/try/choose";

import { Resend } from "resend";
import { PageProgressIndicator } from "./about/_components/page-progress-indicator";
export default function Home() {
  const sections = [
    { id: "main", title: "Main" },

    { id: "services", title: "Services" },
    { id: "Features", title: "Features" },

    { id: "Core", title: "Our Core" },
    { id: "tech", title: "Tech" },
    { id: "faq", title: "FAQ" },
  ]
  
  return (
    <div className="min-h-screen h-full">
      <PageProgressIndicator sections={sections} />
      <section id="main">
      <HeroCarousel />
      </section>

      <TaglineBar  />
      <section id="services">
      <Main/>
      </section>
      <Divider image={divider}/>
      <section id="Features">
      <Try/>
      </section>
      <CoreDivider core={core}/>
      <section id="Core">
      <CoreValues/>
</section>
<section id="tech">
      <Tech />
      </section>
      <section id="faq" >
      <FAQSection/>
      </section>
    </div>
  );


}
