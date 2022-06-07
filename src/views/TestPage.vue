<template>
  <div class="centerSpace" style="margin-bottom: 80px;">

    <div style="padding: 10px 30px 0px 30px; text-align: right;">
      <a class="download-link" href="https://www.docs.google.com/document/d/10RB1EKj8RIKA4bNUYqm5dbVqAIHBrLdzX-rF_Go0KH8/export?format=pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF</a>
    </div>

    <div style="padding: 10px 60px 30px 60px;">

      <div class="headerLine" style="margin-bottom: 0px; margin-top: 0px; background-color:#545454;">
        <h2 style="margin-bottom: 20px; margin-left: 20px; float: left;">Dima Tymofiienko</h2>
        <h3 style="margin-bottom: 20px; margin-right: 20px; text-align: right;">
          <a href="https://www.linkedin.com/in/dima-tymofiienko-9aa116184/" target="_blank">
            www.linkedin.com/in/dimatiDev
            <i class="fa fa-linkedin fa-lg fa-fw" style="vertical-align: -5%;"></i>
          </a>
        </h3>
      </div>

      <div class="headerLine" style="margin-top: 0px">
          <div class="des" style="margin: 5px 10px 5px 20px; text-align: left;"> 
            <a href="mailto:timofeenkodima@gmail.com" target="_blank">TimofeenkoDima@gmail.com</a>
            | Toronto, Ontario
          </div>
      </div>


      <h2>Full-Stack mobile game developer | 3d and 2d content developer</h2>
      Game developer specialist, making games from idea to release. Specializing in gameplay, AI, network(Mirror), vfx, procedural generation, optimization, editor development, common systems and services, etc.<br>

      <ul id="example-1" class="des">
          <li v-for="item in items" :key="item.message">
              {{ item.message }}
          </li>
      </ul>


      <div class="headerLine">
          <h2 class="dialog-title">Professional Experience</h2>
      </div>

        <h3 style="margin: 0px 0px 0px 0px;">Full stack mobile game developer</h3>
        <div class="des">
          <div style= "font-style: italic;">Self employed, Warsaw, Poland  (Aug 2019 - Present)</div>
          <div style="padding-top: 10px;">Full game development process from scratch.</div>
            <ul style="margin-block-start: 0;">
              <li>Encapsulated 40+ common systems, editor, extensions to packages for reusing them in other projects</li>
                <div>- My ShaderLibrary, Ads, Iap, GPGS, Gyro wrapers, MobileConsole, Universal MeshCombiner, Pool, UI Extensions, Utils etc</div>
              <li>2 completed projects 2 prototypes</li>
                <div class="tech-stack">- <a @click="showDetails('project-9')">Neon Racer</a> (in progress)</div>
                <div class="tech-stack">- TopDown car battles like PikoTanks (Network, in progress)(Showcase in progress)</div>
                <div class="tech-stack">- 3rd person shooter (Network prototype)(Showcase in progress)</div>
                <div class="tech-stack">- <a @click="showDetails('project-10')">Brawl Carts</a> (prototype)</div>
                <div class="tech-stack">- <a @click="showDetails('project-13')">Big City Life 2</a> (not released)</div>
              <li>Improved graphics Music Hero Racer by creating custom shaders - dissolve, world curve, blur, dirty lens, lut.</li>
              <li>Optimized Big City render on mobile up to 60 fps, by using tricks based on shaders, overdraw control and city partitioning, runtime mesh and skinned Mesh baking, runtime atlas baking.</li>
              <li>Made dynamic lightmap texture blending for smooth day/night effect and top down shadow/light projection by shaders.</li>
              <li>Created cheat detection, funny delayed punishment for users who hack app.</li>
              <li>Made network systems Client-Side Prediction, Lag compensation, Time-based simulation.</li>
              <li>Developed editor tool for fast creating buildings based on shape and parameters, viewer for items and item icon generator etc.</li>
              
            </ul>
        </div>


        <h3 style="margin: 30px 0px 0px 0px;">Mobile game developer</h3>
        <div class="des">
          <div style= "font-style: italic;">Self employed, Odessa, Ukraine  (Aug 2018 - Aug 2019)</div>
          <div style="padding-top: 10px;">Full game development process.</div>
            <ul style="margin-block-start: 0;">
              <li>Supporting last 4 projects</li>
              <div class="tech-stack">- <a @click="showDetails('project-8')">Slime attack</a> (not released)</div>
            </ul>
        </div>

        <h3 style="margin: 30px 0px 0px 0px;">Mobile game developer</h3>
        <div class="des">
          <div style= "font-style: italic;">Self team employed, Odessa, Ukraine  (Aug 2015 - Aug 2018)</div>
          <div style="padding-top: 10px;">Worked in 3-member team. I was doing: UI/UX, Level design, Character customizations and upgrades, 2D & 3D modelling.</div>
            <ul style="margin-block-start: 0;">
              <li>Grew up income to $1200/day</li>
              <li>Made & Published 4 games, completed 2 prototypes</li>
              <div class="tech-stack">- <a @click="showDetails('project-11')">HideIO clone</a> (prototype)</div>
              <div class="tech-stack">- <a @click="showDetails('project-12')">FoesIO clone</a> (prototype)</div>
              <div class="tech-stack">- <a @click="showDetails('project-5')">Big City Life</a> (<a href="https://play.google.com/store/apps/details?id=com.CactusGames.BCL" target="_blank">GooglePlay</a>: installs 10 000 000+, rating 4.5) Revenue: 570$/day</div>
              <div class="tech-stack">- <a @click="showDetails('project-4')">Clash of Zombie</a> (not released)</div>
              <div class="tech-stack">- <a @click="showDetails('project-3')">Clash of Crime 2</a> (<a href="https://play.google.com/store/apps/details?id=com.CactusGames.ClashOfCrime2" target="_blank">GooglePlay</a>: installs 5 000 000+, rating 4.09)</div> 
              <div class="tech-stack">- <a @click="showDetails('project-2')">Clash of Crime</a> (<a href="https://play.google.com/store/apps/details?id=com.CactusGames.ClashOfCrime" target="_blank">GooglePlay</a>: installs 10 000 000+, rating 4.0) Revenue: 1040$/day</div> 
              <div class="tech-stack">- <a @click="showDetails('project-1')">World of derby</a> (<a href="https://play.google.com/store/apps/details?id=com.CactusGames.WOD" target="_blank">GooglePlay</a>: installs 1 000 000+, rating 4.3)</div> 
            </ul>
        </div>


        <h3 style="margin: 30px 0px 0px 0px;">Student-Engineer</h3>
        <div class="des">
          <div style= "font-style: italic;">Self employed, Odessa, Ukraine  (Aug 2012 - Aug 2015)</div>
          <div style="padding-top: 10px;">Developed programs to automate the calculation of metal and reinforced concrete structures. Also, I developed plugin(on Visual Basic) which draws drawings of structures in AutoCAD follows from the calculations.</div>
            <ul style="margin-block-start: 0;">
              <li>Due to automation, I managed to raise income by 8x times</li>
              <li>I managed to reach the figure of 144 design works with 360 drawings in a month and a half</li>
            </ul>
        </div>

        <ProjectDetailsOverlay
          v-on:close="showPopup = false"
          :visible="showPopup"
          :title="popupTitle"
          :htmlContent="popupContent"
          :color="popupColor"
          :oldYScroll="oldYScroll"
        />

      <div class="headerLine">
          <h2 class="dialog-title">Education</h2>
      </div>

      <h3 style="margin: 15px 0px 0px 0px;">Game development</h3>
      <div class="des" style="font-style: italic;">Self Taught, everywhere (Oct 2015 - Present)</div>
      <h3 style="margin: 15px 0px 0px 0px;">Diploma, Odesa State Academy of Civil Engineering and Architecture</h3>
      <div class="des" style="font-style: italic;">Odessa, Ukraine  (Sep 2008 - Jun 2013)</div>


       <div class="headerLine">
          <h2 class="dialog-title">Technical Skills</h2>
      </div>
      <table width="100%">
        <tr>
          <td width="30%">&#8226; Unity3D</td>
          <td width="30%">&#8226; Figma</td>
          <td width="30%">&#8226; C# & ShaderLab</td>
        </tr>
        <tr>
          <td width="30%">&#8226; Photoshop</td>
          <td width="30%">&#8226; Premiere pro</td>
          <td width="30%">&#8226; Git</td>
        </tr>
        <tr>
          <td width="30%">&#8226; Blender</td>
          <td width="30%">&#8226; Fusion360</td>
          <td width="30%">&#8226; Upm</td>
        </tr>
        <tr>
          <td width="30%">&#8226; Substance painter</td>
          <td width="30%">&#8226; AutoCad</td>
          <td width="30%">&#8226; Visual Studio</td>
        </tr>
      </table>



      <div class="headerLine">
          <h2 class="dialog-title">Languages</h2>
      </div>

      <table width="100%">
        <tr>
           <td width="30%"> 
              <h3 style="margin: 0px 0px 0px 0px;">&#8226; Ukrainian</h3>
              <div class="des" style="font-style: italic;">Native</div>
           </td>
           <td width="30%"> 
              <h3 style="margin: 0px 0px 0px 0px;">&#8226; English</h3>
              <div class="des" style="font-style: italic;">Intermediate</div>
           </td>
           <td  width="30%"> 
              <h3 style="margin: 0px 0px 0px 0px;">&#8226; Russian</h3>
              <div class="des" style="font-style: italic;">Native</div>
           </td>
        </tr>
      </table>

     </div>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import ProjectDetailsOverlay from "@/components/ProjectDetailsOverlay.vue";
import ProjectData from "@/data/ProjectData.ts";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "sssss",
  components: {
    ProjectDetailsOverlay,
  },
  props: {
    projects: Array
  },
  data: function () {
    return {
      items: [
            { message: '7+ years of mobile game development on Unity3D for Android and iOS' },
            { message: 'Strong C# coding and systems design skills' },
            { message: 'Unity-specific language ShaderLab' },
            { message: 'Performance analysis and code optimization' },
            { message: 'Editor scripting, PropertyDrawers and making tools/plugins' }
        ],

      CoreCompList: [
          {  message: 'Modular development through making reusable packages with documentation and samples' },
          {  message: 'Unity-specific performance analysis and code optimization' },
          {  message: 'Editor scripting, PropertyDrawers and making tools/plugins' },
          {  message: 'Procedural meshes and textures' }
      ],

      showPopup: false,
      popupTitle: "",
      popupColor: "",
      popupContent: "",
      oldYScroll: 0
    };
  },
  methods: {
    showDetails: function (id: string) {
     // alert(id);
      // if (event) {
      //   alert(event.target);
      // }

      const item: ProjectData  = gameProjectsData.find(project => project.id == id)!;
    
      this.popupTitle = item?.name;
      this.popupColor = item?.accentColor;
      this.popupContent = item?.htmlDescription;
      this.oldYScroll = window.scrollY;
      this.showPopup = true;

      window.scrollTo(0,0);
    },
  },
});

</script>

<style scoped>
.hr {
  border:none;
  border-top:1px dashed #f00;
}

.headerLine {
  margin: 30px -30px 15px -30px;
  padding: 1px 1px 1px 1px;
  background-color:#444444;
}

.tech-stack {
  font-style: italic;
}

.centerSpace{
  background-color:#383838;
}

h2{
  text-align: center
}

h2Left{
  float: left;
}

.des{
  color:#999999;
}

h2Right{ 
  float: right;
}
</style>