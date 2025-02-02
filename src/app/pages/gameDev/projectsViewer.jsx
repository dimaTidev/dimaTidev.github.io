'use client';

import GameElement from "./gameElement";
import Styles from "./page.module.css";
import ProjectDetailsOverlay from "./projectDetailsOverlay";
import { Suspense } from 'react'

// Data
import { GamesData } from "../../../Projects/Projects";
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation'
import classNames from "classnames";

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
       <div className={classNames(Styles.body, "section-content-container")}>
        <div className={Styles.textContainer} style={{ marginTop: '40px', marginBottom: '40px'}}>
            <h2>Projects</h2>
            <label>Latest projects are coming soon</label>
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