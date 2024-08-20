import {
  AboutSection,
  CompetitionDetails,
  CompetitionSection,
  FaqSection,
  Footer,
  HeroSection,
  SkemaSection,
} from "@/components";
import Head from "next/head";
import { useState } from "react";

import GetCompetitionsApi from "@/api/homepage/GetCompetitionsApi";
import Timeline from "@/components/organisms/home/Timeline";
import SupportSection from "@/components/organisms/home/SupportSection";
import MediaPartner from "@/components/organisms/home/MediaPartner";
import MarqueeSection from "@/components/organisms/home/MarqueeSection";

export async function getServerSideProps() {
  const competitionsDumy = [
    {
      categories: ["a", "b", "c"],
      cover: "/images/bannerIitc.png",
      maxMembers: 3,
      name: "IITC 2024",
      slug: "dummy"
    },
    {
      categories: ["a", "b", "c"],
      cover: "/images/bannerIitc.png",
      maxMembers: 3,
      name: "IITC 2024",
      slug: "dummy"
    },
    {
      categories: ["a", "b", "c"],
      cover: "/images/bannerIitc.png",
      maxMembers: 3,
      name: "IITC 2024",
      slug: "dummy"
    }
  ]
  try {
    const res = await GetCompetitionsApi();
    console.log(res);
    
    if (res.status == 1) {
      const competitions = res.data?.competitions || [];
      return {
        props: {
          competitions: competitions.length? competitions:competitionsDumy,
        },
      };
    } else if (res.status == 0) {
      return {
        props: {
          competitions: [],
        },
      };
    }
  } catch (error) {
    console.error(error);
    return {
      props: {
        competitions: competitionsDumy,
      },
    };
  }
}

export default function Home({ competitions }) {
  const [isCompetitionDetail, setIsCompetitionDetail] = useState(false);
  const [competitionName, setCompetitionName] = useState("");
  return isCompetitionDetail ? (
    <CompetitionDetails
      competitionSlug={competitionName}
      setIsCompetitionDetail={setIsCompetitionDetail}
    />
  ) : (
    <main>
      <Head>
        <title>IITC</title>
        <meta name="title" content="IITC" />
      </Head>
      <HeroSection />
      <SupportSection />
      {/* <MarqueeSection /> */}
      <AboutSection />
      <SkemaSection />
      <CompetitionSection
        competitions={competitions}
        setCompetitionName={setCompetitionName}
        setIsCompetitionDetails={setIsCompetitionDetail}
      />
      <Timeline />
      <FaqSection />
      <MediaPartner />
      <Footer />
    </main>
  );
}
