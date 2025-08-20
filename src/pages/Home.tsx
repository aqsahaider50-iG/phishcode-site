import { Box } from "@chakra-ui/react";
import Hero from "../sections/Hero";
import TabsBar from "../sections/TabsBar";
import Overview from "../sections/overview";
import ThreeFeatureRow from "../sections/ThreeFeatureRow";
import ImpactBand from "../sections/ImpactBand";
import ApproachCard from "../sections/ApproachCard";
import ResourcesGrid from "../sections/ResourcesGrid";
import CTASplit from "../sections/CTASplit";
import ContactCards from "../sections/ContactCards";

export default function Home() {
  return (
    <Box>
      <Hero />
      <TabsBar />
      <Overview />
      <ThreeFeatureRow />
      <ImpactBand />
      <ApproachCard />
      <ResourcesGrid />
      <CTASplit />
      <ContactCards />
    </Box>
  );
}
