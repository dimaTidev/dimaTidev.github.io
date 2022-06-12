<template>
  <div class="footer">
    <div class="right">
        <div style="float: right;">
          <a href="mailto:timofeenkodima@gmail.com" target="_blank">
              <i class="fa fa-envelope-o fa-2x fa-fw"></i>
          </a>
          <a href="https://www.linkedin.com/in/dima-tymofiienko-9aa116184/" target="_blank">
            <i class="fa fa-linkedin fa-2x fa-fw" style="vertical-align: -5%;"></i>
          </a>
          <a href="https://github.com/dimaTidev" target="_blank">
            <i class="fa fa-github fa-2x fa-fw"></i>
          </a>
          <a href="https://www.instagram.com/dimatidev/" target="_blank">
            <i class="fa fa-instagram fa-2x fa-fw"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100011299205944" target="_blank">
            <i class="fa fa-facebook fa-2x fa-fw"></i>
          </a>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Footer"
});
</script>

<style scoped lang="less">

@import '../css/variables.less';

.footer {
  background-color: @bodyBgColor;
  width: 100%;
  font-size: 0.8em;
  opacity: 0.7;
  padding-bottom: 30px;
}

.left, .right {
    padding-top: 10px;
    text-align: center;
  }

@media only screen and (min-width: 620px){

  .footer {
    padding: 0;
  }

  .left, .right {
    padding: 20px;
  }

  .left {
    float: left;
  }

  .right {
    float:right;
  }
}
</style>