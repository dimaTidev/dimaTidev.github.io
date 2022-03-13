<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Dmytro Tymofiienko</strong>, an 7 years experienced fullstack mobile game developer.<br/>
        I love discussing, designing and developing mobile games in general.
      </div>

      <div style="margin-top: 20px;">I've worked on  <router-link to="/game-projects">My Games</router-link><!-- , on <router-link to="/other-projects">Side projects</router-link>,--> and took part in <router-link to="/resume">a few things</router-link> as well.</div>

      <div style="margin-top: 40px;">I'm <strong>currently looking for a job</strong>. You can reach me at <a href="mailto:timofeenkodima@gmail.com">TimofeenkoDima@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Avatar of John" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
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
    padding: 10px;
    padding-left: 80px;
  }
}

</style>