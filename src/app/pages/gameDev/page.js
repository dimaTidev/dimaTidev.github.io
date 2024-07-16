'use client';

import Header from "../../Blocks/header";
import Footer from "../../Blocks/footer";
import ProjectsViewer from "./projectsViewer";

// Data
import React, { useState } from 'react';


export default function Page() {
  return (
    <main>
      <Header/>
        <ProjectsViewer/>
      <Footer/>
    </main>
  );
}