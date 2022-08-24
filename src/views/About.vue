<template>
  <div style="margin-bottom: 80px;">

    <table style="vertical-align: top;">
<th>
  <h1>Hello!</h1>
    <div class="paragraph">
      <div>
        I'm <strong>Dmytro Tymofiienko</strong>, 7 years experienced mobile game developer on Unity3D.<br/>
        I love discussing, designing and developing mobile games in general.
      </div>

      <div style="margin-top: 20px;">
      I've worked on <router-link to="/game-projects">My Games</router-link>
      <div>My <router-link to="/resume_page">Resume</router-link></div>
      </div>

      <div style="margin-top: 40px;">I'm <strong>currently looking for a job</strong>. You can reach me at <a href="mailto:timofeenkodima@gmail.com">TimofeenkoDima@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>
</th>
<th>
    <div class="photo">
      <img src="img/avatar_vr.png" alt="Avatar of Dima" /> 
    </div>
</th>

    </table>


    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
}

.photo {
  max-width: 150px;
}

@media only screen and (min-width: 620px){
  .photo {
    padding: 10px;
    padding-left: 80px;
  }
}

</style>