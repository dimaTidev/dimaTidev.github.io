<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm an experienced mobile game developer, from Ukraine and currently based in the Poland, Warszawa.
      <br />I have been working as a fullstack mobile game developer for 7 year, worked on Unity3d engine.
      <br />With two friends, I also started <a href="https://play.google.com/store/apps/developer?id=CactusGamesCompany" target="_blank">CactusGames</a> to develop mobile games.
      <br />
      <br />Right now I'm working on my own to-be-announced <a @click="showDetails('MusicHeroRacer')">game</a>. I'm looking for a job so if you have any opportunity feel free to 
      <router-link to="/contact">contact me</router-link>.
      <br />
      <br />Besides development, I'm passionate about video games, snowboarding, fpv quadcopter freestyle, acrobatic, karting.
    </div>
    <div class="photo">
      <img src="img/resume-photo.png" alt="Photo of John" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>On my own</h3>
      <h4>2019-Present</h4>

      <div>Full game development process.</div>

      <div class="tech-stack">2021-2022 - <a @click="showDetails('MusicHeroRacer')">Neon Racer</a> (in progress)</div>
      <div class="tech-stack">2021 - TopDown car battles like PikoTanks (Network, in progress)(Showcase in progress)</div>
      <div class="tech-stack">2021 - 3rd person shooter (Network prototype)(Showcase in progress)</div>
      <div class="tech-stack">2020-2021 - Big City Life 2 (not released)(Showcase in progress)</div>
      <div class="tech-stack">2020 - <a @click="showDetails('BrawlKarts')">Brawl Carts</a> (prototype)</div>
      <div class="tech-stack">2019 - Helix Fall (prototype)(Showcase in progress)</div>
      <div class="tech-stack">2018 - <a @click="showDetails('SlimeAttack')">Slime attack</a>  (prototype)</div>

      <h3>Cactus Games</h3>
      <h4>10.2015-02.2021</h4>

      <div>Full game development process, support apps by updates.</div>

      <div class="tech-stack">2019 - clone HideIO (prototype)(Showcase in progress)</div>
      <div class="tech-stack">2018 - clone FoesIO (prototype, the project was lost...)</div>
      <div class="tech-stack">08.2017 - <a @click="showDetails('project-5')">Big City Life</a> (<a href="https://play.google.com/store/apps/details?id=com.CactusGames.BCL" target="_blank">GooglePlay</a>: installs 10 000 000+, rating 4.5) Revenue: 570$/day</div>
      <div class="tech-stack">10.2016 - <a @click="showDetails('ClashOfZombie')">Clash of Zombie</a> (not released)</div>
      <div class="tech-stack">07.2016 - <a @click="showDetails('project-3')">Clash of Crime 2</a> (<a href="https://play.google.com/store/apps/details?id=com.CactusGames.ClashOfCrime2" target="_blank">GooglePlay</a>: installs 5 000 000+, rating 4.09)</div> 
      <div class="tech-stack">03.2016 - <a @click="showDetails('project-2')">Clash of Crime</a> (<a href="https://play.google.com/store/apps/details?id=com.CactusGames.ClashOfCrime" target="_blank">GooglePlay</a>: installs 10 000 000+, rating 4.0) Revenue: 1040$/day</div> 
      <div class="tech-stack">10.2015 - <a @click="showDetails('project-1')">World of derby</a> (<a href="https://play.google.com/store/apps/details?id=com.CactusGames.WOD" target="_blank">GooglePlay</a>: installs 1 000 000+, rating 4.3)</div> 


    <ProjectDetailsOverlay
        v-on:close="showPopup = false"
        :visible="showPopup"
        :title="popupTitle"
        :htmlContent="popupContent"
        :color="popupColor"
        :oldYScroll="oldYScroll"
      />

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Languages</h3>
        <div class="skill">C#</div>
        <div class="skill">Cg/HLSL</div>
      </div>

      <div class="skill-set">
        <h3>Dev</h3>
        <div class="skill">Unity3d</div>
        <div class="skill">Photoshop</div>
        <div class="skill">Blender</div>
        <div class="skill">Substance painter</div>
        <div class="skill">AutoCad</div>
        <div class="skill">Fusion360</div>
        <div class="skill">Premiere pro</div>
      </div>


      <div class="skill-set">
        <h3>Tools & Frameworks</h3>
        <div class="skill">Git</div>
        <div class="skill">Upm</div>
        <div class="skill">Visual Studio</div>
        <div class="skill">Mirror Net</div>
      </div>
     

      <div style="clear:both" />

      <h2>Education</h2>

      <h3>Odessa State Academy of Civil Engineering and Architecture - 2014</h3>
      <h4>Civil engineering</h4>
      <div>Studied well, but I was always drawn to programming</div>

      <h2>Languages</h2>

      <h3>Ukrainian</h3>
      <div>Native</div>

      <h3>Russian</h3>
      <div>Native</div>

      <h3>English</h3>
      <div>In the process of studying. I understand most, but some topics are sometimes difficult to say</div>


      <h2>Besides...</h2>
      <div>
        <h3>I ❤️ Snowboarding</h3>
        <div>I like jumping and do some freestyle tricks on snowboard. I have a snowboard, and every winter I going to the slope. Riding about 5 years.</div>

        <h3>I 🧡 FPV freestyle</h3>
        <div>I built my own 5' quadcopter. I like flying in obstacles with freestyle triks.</div>

        <h3>I 💛 Acrobatic</h3>
        <div>I really like be in air. I go to trampoline halls and do some tricks.</div>

        <h3>I 💚 Karting</h3>
        <div>I like to be fast.</div>

        <h3>I 💚 Video Games</h3>
        <div>Rocket league - my favorite. I play this game around 6 year.</div>
        <div>Factorio. Project zomboid. 7 Days To Die. In the teenage years I loved to play CS and Dota(map in warcraft)</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectDetailsOverlay from "@/components/ProjectDetailsOverlay.vue";
import ProjectData from "@/data/ProjectData.ts";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "Resume",
  components: {
    ProjectDetailsOverlay,
  },
  props: {
    projects: Array
  },
  data: function () {
    return {
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
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

linkinsite {
  //text-decoration: underline;
  font-weight: bold;
  font-style: italic;
  cursor: pointer;
}

.full-content div {
  max-width: 800px;
}

.skill {
  float:left;
  border: 1px solid hsla(0,0%,86.3%,.44);
  padding: 2px 10px;
  margin: 5px;
}

.skill-set h3 {
    padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 30px; 
    max-width: 230px!important;
  }
}
</style>