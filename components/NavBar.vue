<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <!-- <a class="navbar-item" href="https://sarathicare.com/home">
        <img src="//img1.wsimg.com/isteam/ip/e1eb6b8e-ad00-4fb4-a0b9-5512929261c6/Group%2070719%20(2).png/:/rs=h:38,cg:true,m/qt=q:100/ll" srcset="//img1.wsimg.com/isteam/ip/e1eb6b8e-ad00-4fb4-a0b9-5512929261c6/Group%2070719%20(2).png/:/rs=w:112,h:38,cg:true,m/cr=w:112,h:38/qt=q:100/ll, //img1.wsimg.com/isteam/ip/e1eb6b8e-ad00-4fb4-a0b9-5512929261c6/Group%2070719%20(2).png/:/rs=w:177,h:60,cg:true,m/cr=w:177,h:60/qt=q:100/ll 2x" alt="Sarathi" data-ux="ImageLogo" data-aid="HEADER_LOGO_IMAGE_RENDERED" id="n-112344" class="x-el x-el-img c1-1 c1-2 c1-2n c1-z c1-v c1-w c1-1a c1-1b c1-2t c1-2u c1-2v c1-2w c1-2x c1-2y c1-2q c1-1s c1-2r c1-1t c1-2z c1-1p c1-b c1-c c1-30 c1-31 c1-32 c1-33 c1-34 c1-35 c1-36 c1-37 c1-38 c1-39 c1-3a c1-3b c1-3c c1-3d c1-3e c1-d c1-3f c1-3g c1-3h c1-e c1-f c1-g" style="max-height: 38px; box-shadow: none; margin-top: 0px;">
    </a> -->

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
        
      <NuxtLink class="navbar-item" to="/">Job Posting</NuxtLink>
      <NuxtLink class="navbar-item" to="dashboard">Dashboard</NuxtLink>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>


<script>
export default {
  name:'NavBar' 
}
</script>

<style scoped>
@import url('bulma/css/bulma.min.css');

</style>