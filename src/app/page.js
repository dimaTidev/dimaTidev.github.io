import Image from "next/image";
import styles from "./page.module.css";

// Blocks
import Header from "./Blocks/header";
import MainBlock from "./Blocks/MainBlock/mainPageBlock";
import TechStack from "./Blocks/techStack";
import ContentBlock from "./Blocks/ContentBlock/contentBlock";
import Footer from "./Blocks/footer";
import ProjectsViewer from "./pages/gameDev/projectsViewer";

// Data
import { CategoryData } from "./Blocks/ContentBlock/contentData"

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <MainBlock/>
      <TechStack/>
      {/* {CategoryData.map((element, i) =>{
        return (
          <ContentBlock isReverced={i % 2 == 0} title={element.Title} description={element.Description} href={element.Href} key={i}/>
        );
      })} */}

      <ProjectsViewer/>
      <Footer/>
    </main>
  );
}
