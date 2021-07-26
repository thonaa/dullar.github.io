<template>
  <div class="solgan">
    <h1>
      <span class="dullar">Dullar</span> moves the technology
    </h1>
    <div>
      <h2 class="h2">DULLAR</h2>
      <p class="description">Self build web frontend ecosystem for high performance and efficiency</p>
      <a class="github icon" href="https://github.com/dullarjs" target="_blank">
        <!-- <img src="../assets/github.svg"> -->
        View on Github
      </a>
      <a class="docs icon" href="./docs" target="_blank">
        <!-- <img src="../assets/docs.svg"> -->
        View online docs
      </a>
    </div>
    <div>
      <h2 class="h2">OUR PROJECTS</h2>
      <ul>
        <li>
          <a href="https://www.npmjs.com/package/@dullar/king" target="_blank">@dullar/king:</a>
          <span> Advanced and highly reusable UI Components built on <a href="https://v3.vuejs.org/" target="_blank">Vue3</a></span>
        </li>
        <li>
          <a href="https://ui.dullar.xyz/queen/#/" target="_blank">@dullar/queen:</a>
          <span> Advanced and highly reusable Mobile UI Components built on <a href="https://v3.vuejs.org/" target="_blank">Vue3</a></span>
        </li>
        <li>
          <a href="http://ui.dullar.xyz/venus/#/" target="_blank">@dullar/venus:</a>
          <span> Advanced and highly reusable Mobile UI Components built on <a href="https://v3.vuejs.org/" target="_blank">Vue3</a></span>
        </li>
        <li>
          <a href="http://ui.dullar.xyz/mercury/#/" target="_blank">@dullar/mercury:</a>
          <span> Advanced and highly reusable UI Components built on <a href="https://vuejs.org/" target="_blank">Vue2</a></span>
        </li>
        <li>
          <a href="https://www.npmjs.com/package/@dullar/cube" target="_blank">@dullar/cube:</a>
          <span> A modern JavaScript utility library</span>
        </li>
        <li>
          <a href="https://www.npmjs.com/package/@dullar/bem" target="_blank">@dullar/bem:</a>
          <span> BEM technology implemented by SCSS & TypeScript</span>
        </li>
        <li>
          <a href="https://www.npmjs.com/package/@dullar/cli" target="_blank">@dullar/cli:</a>
          <span> A tool for you to build your web project based on Vue2/3</span>
        </li>
      </ul>
    </div>
    <div>
      <h2>DEVELOPER TEAM MEMBERS</h2>
      <ul class="teammembers">
        <li><a href="https://github.com/justbefree" title="justbefree" target="_blank"><img src="https://avatars.githubusercontent.com/u/12696197?s=96&v=4"></a></li>
        <li><a href="https://github.com/menglol" title="menglol" target="_blank"><img src="https://avatars.githubusercontent.com/u/17095525?s=96&v=4"></a></li>
        <li><a href="https://github.com/hushjh" title="hushjh" target="_blank"><img src="https://avatars.githubusercontent.com/u/17561703?s=96&v=4"></a></li>
        <li><a href="https://github.com/linxibaby" title="linxibaby" target="_blank"><img src="https://avatars.githubusercontent.com/u/25740954?s=96&v=4"></a></li>
        <li><a href="https://github.com/thonaa" title="thonaa" target="_blank"><img src="https://avatars.githubusercontent.com/u/34881173?s=96&v=4"></a></li>
      </ul>
    </div>
    <div>
      <h2>UI & UX DESIGNER</h2>
      <ul class="teammembers">
        <li>
          <a href="https://dribbble.com/July1127" title="Evan zhu" target="_blank"><img src="https://cdn.dribbble.com/users/1630834/avatars/normal/fc10c20ff2eeaaca524aa998451f6203.jpeg?1588727315"></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Solgan'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .solgan {
  width: 80%;
  margin: 0 auto;
} */
a {
  /* color: #3e5d96; */
  /* color: #0165ff; */
  color: #666;
  /* font-weight: bold; */
}
.solgan h1 {
  color: #0165ff;
  font-weight: 200;
}
.solgan h2 {
  font-weight: 200;
  color: #0165ff;
  /* text-align: left; */
}
.description {
  color: #666;
}
h1 .dullar {
  /* color: #3e5d96; */
}
.solgan .icon {
  border: 1px solid #666;
  /* border: 1px solid #00b2ff; */
  background: #fff;
  text-decoration: none;
  padding: 10px;
  display: inline-block;
  color: #666;
  /* color: #00b2ff; */
  border-radius: 5px;
  margin: 5px;
  transition: all ease 0.3s;
}
.solgan .icon.github {
  padding-left: 30px;
  background: url('../assets/github.svg') 5px center no-repeat;
  background-size: 20px;
}
.solgan .icon.github:hover {
  background-color: #0165ff;
  color: #fff;
  border-color: #0165ff;
  background-image: url('../assets/github-active.svg');
}
.solgan .icon.docs {
  padding-left: 30px;
  background: url('../assets/docs.svg') 5px center no-repeat;
  background-size: 20px;
}
.solgan .icon.docs:hover {
  background-color: #0165ff;
  color: #fff;
  border-color: #0165ff;
  background-image: url('../assets/docs-active.svg');
}
.solgan .icon img {
  width: 20px;
  vertical-align: middle;
  margin-top: -3px;
}
ul {
  list-style: none;
}
ul li {
  margin: 10px;
}
ul li span {
  /* color: #00b2ff; */
  color: #666;
}
ul.teammembers li {
  display: inline-block;
}
ul.teammembers li img {
  width: 60px;
  height: auto;
  border-radius: 50%;
}
</style>
