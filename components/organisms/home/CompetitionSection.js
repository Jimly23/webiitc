import Button from "@/components/atoms/Button";
import CompetitonCard from "@/components/atoms/CompetitonCard";
import Text from "@/components/atoms/Text";
import Container from "@/components/molecules/Container";
import ParagraphSection from "@/components/molecules/ParagraphSection";
import React from "react";
import { motion } from "framer-motion";

const CompetitionSection = ({
  setIsCompetitionDetails,
  setCompetitionName,
  competitions,
}) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full min-h-screen">
      <Container>
        <section id="lomba" className="py-12 flex justify-center">
          <div className="w-11/12 mx-auto">
            <ParagraphSection
              flashValue={"What is relevant to you?"}
              title={"Pilih lomba yang relevant dengan kamu"}
              description={"pilih lomba yang sesuai dengan kemampuan kamu ya.."}
            />
            <motion.div
              className="rounded-xl w-full mt-12 flex items-center justify-center flex-wrap gap-5"
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ staggerChildren: 0.2 }}
            >
              {competitions?.map((competition, index) => (
                <motion.div
                  key={index}
                  whileInView={{ opacity: [0, 1], y: [20, 0] }}
                  transition={{
                    type: "spring",
                    duration: [0.8],
                    delay: [`0.${index}`],
                  }}
                >
                  <CompetitonCard
                    setCompetitionName={setCompetitionName}
                    setIsCompetitionDetail={setIsCompetitionDetails}
                    category={competition?.categories}
                    imgSrc={competition?.cover}
                    maxMembers={competition?.maxMembers}
                    title={competition?.name}
                    slug={competition?.slug}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default CompetitionSection;
