"use client";
import TopMenu from "@/components/ui/profile-page/topMenu";
import TabContextProvider from "@/components/hooks/TabContextProvider";
import Filter from "@/components/ui/profile-page/filter";
import OptionsSection from "@/components/ui/profile-page/options-section";
import ChartsSection from "@/components/ui/profile-page/charts-section";

const vanArsdel = () => {
  return (
    <>
      <TabContextProvider>
        <div className="md:w-[calc(100vw-90px)] w-full  relative h-full md:px-4 ">
          <TopMenu />
          <Filter />
          <div className="flex gap-2 relative w-full mt-4 ">
            <OptionsSection />
            <ChartsSection />
          </div>
        </div>
      </TabContextProvider>
    </>
  );
};

export default vanArsdel;
