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
export default function Home() {
  
  return (
    <div className="min-h-screen h-full">
      <HeroCarousel />
      <TaglineBar  />
      <Main/>
      <Divider image={divider}/>
      <Try/>
      <CoreDivider core={core}/>
      <CoreValues/>
      <Tech />
      <FAQSection/>
    </div>
  );
}
