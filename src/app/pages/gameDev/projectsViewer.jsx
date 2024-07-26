'use client';

import GameElement from "./gameElement";
import Styles from "./page.module.css";
import ProjectDetailsOverlay from "./projectDetailsOverlay";
import { Suspense } from 'react'

// Data
import { GamesData } from "../../../Projects/Projects";
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation'

// https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
export default function PageWrapper() {
  return (
    <Suspense>
      <Page />
    </Suspense>
  )
}

function Page() {
  const [selectedProjectName, setProject] = useState("undefined");
  const [oldScroll, setOldScroll] = useState(0);
  const searchParams = useSearchParams();

  let isProjectSelected = false;
  let projectData = GamesData[0];

  // Search in querry params to open a particular project 
  const result = searchParams.get("project");
  if(selectedProjectName === "undefined" && result != "undefined"){
    GamesData.forEach(element => {
      if(element.queryId === result){
        console.log("Set title");
        setProject(element.title);
      }
    });
  }

  if(selectedProjectName != "" && selectedProjectName != "undefined"){
    // find project
    isProjectSelected = true;

    GamesData.forEach(element => {
      if(element.title === selectedProjectName){
        projectData = element; 
      }
    });
    
  }

  return (
    <>
       <div className={Styles.body}>
        <div className={Styles.textContainer} style={{ marginLeft: '80px', marginTop: '40px', marginBottom: '40px'}}>
            <h2>My Projects</h2>
            <label>Projects for the last 3 years are missing. Coming soon...</label>
        </div>
        

        <div className={Styles.gridContainer}>

          {GamesData.map((element, i) =>{
            return (
              <GameElement key={i} title={element.title} imageUrl={element.imageURL} additionalClassName={Styles.gridElement} tags={element.tags}
              onClick={(data) => {
                setProject(data);
                setOldScroll(window.scrollY);
                window.scrollTo(0, 0);
              }}/>
            );
          })}

        </div>
      </div>

      {isProjectSelected && <ProjectDetailsOverlay onClose={() => {
        setProject("");
        window.scrollTo(0, oldScroll);
      }} title={projectData.title} innerJSX={projectData.innerHTML} tags={projectData.tags}/>}
    </>

  );
}