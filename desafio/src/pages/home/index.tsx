import { Header } from "../../components/header";
import { HomeMain } from "../../components/HomeMain";
import { SectionFilter } from "../../components/sectionFiltros";

export const Home = () => {
  return (
    <>
      <Header />
      <SectionFilter />
      <HomeMain />
    </>
  );
};
