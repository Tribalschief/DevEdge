import { Divider } from "@/components/choose/divider";

import { Intro } from "@/components/home/service/title";
import Main from "@/components/service/main";
;import title from '@/public/title.png'
import divider from '@/public/divider.jpg'
import FeatureGrid from "@/components/choose/grid";
import CoreValues from "@/components/core/coreValue";
import { Tech } from "@/components/tech";
import  FAQ  from "@/components/FAQ";
import HeroCarousel from "@/components/home/carousel";

export default function Home() {
  return (
    <div className="min-h-screen h-full">
      <HeroCarousel />
      <Intro image={title} title="Services" />
      <Main/>
      <Divider image={divider}/>
      <FeatureGrid/>
      <CoreValues/>
      <Tech />
    </div>
  );
}
