<template>
  <div class="home">
    <header class="nav-bar">
      <v-toolbar
        flat
        color="red lighten-2"
        light
        style="position: fixed; width: 100%; z-index: 1000"
      >
        <v-toolbar-title>
          <v-img
            :src="require('../assets/logo1.png')"
            alt="logo"
            max-width="200"
            max-height="100"
          ></v-img>
        </v-toolbar-title>

        <v-spacer />

        <div class="nav-links">
          <router-link
            tag="li"
            active-class="active"
            to="#home"
            v-scroll-to="'#home'"
            >Home</router-link
          >
          <router-link
            tag="li"
            active-class="active"
            to="#about"
            v-scroll-to="'#about'"
            >About Me</router-link
          >
          <router-link
            tag="li"
            active-class="active"
            to="#skills"
            v-scroll-to="'#skills'"
            >My Skills</router-link
          >
          <router-link
            tag="li"
            active-class="active"
            to="#experience"
            v-scroll-to="'#experience'"
            >Experience</router-link
          >
          <router-link
            tag="li"
            active-class="active"
            to="#portfolio"
            v-scroll-to="'#portfolio'"
            >My Portfolio</router-link
          >
          
          <router-link
            tag="li"
            active-class="active"
            to="#contact"
            v-scroll-to="'#contact'"
            >Contacts</router-link
          >
        </div>
      </v-toolbar>
    </header>

    <main>
      <!-- image + text -->
      <header id="home">
        <v-img
          width="100%"
          height="700"
          :src="require('../assets/header.jpg')"
        ></v-img>
      </header>

      <section class="ux-geek">
        <h1>I use Technology to build solutions, Yes I am a Geek</h1>
        <p class="title grey--text">
          Hello, My name is Brian Mawira. I am a Software Engineer based
          in Nairobi, Kenya. Highly experienced in developing websites and web
          applications as well as mobile applications. I work remotely on projects for clients all over the
          country. <br />
          I have a diverse set of skills ranging from HTML + CSS +
          Javascript all the way to python and server-side development.
        </p>
      </section>

      <div id="about" class="about grey lighten-3">
        <AboutPage />
      </div>

      <article class="quote">
        <v-parallax
          :src="require('../assets/developer.jpeg')"
          height="400"
          class="parallax text-center"
        >
          <h1 style="font-size: 30px">
            If I asked People what they wanted, they would have said 'Faster
            Horses'
          </h1>
          <p class="subtitle" style="font-size: 20px">- Henry Ford</p>
        </v-parallax>
      </article>

      <div id="skills" class="Skills pa-10">
        <SkillsPage />
      </div>

      <div id="experience" class="experience grey lighten-3 pa-7">
        <Experience />
      </div>

      <div id="portfolio" class="portfolio">
        <h1>My Portfolio</h1>
      </div>

      <div id="contact" class="contact grey lighten-3">
        <Contact />
      </div>

      <div class="footer">
        <Footer />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {};
  },
};
</script>

<style scoped>
.nav-links {
  margin-right: 4rem;
}

.nav-links li {
  display: inline-block;
  color: rgb(129, 128, 128);
  padding: 20px;
  font-family: 'Amatic SC', cursive;
  font-size: 30px;
  margin: 0 15px;
}

.nav-links li:hover,
.nav-links li.active {
  color: white;
  cursor: pointer;
}

.ux-geek {
  width: 50%;
  margin: 5rem auto;
  text-align: center;
}

.about,
.contact {
  padding: 3rem 0;
}
</style>
