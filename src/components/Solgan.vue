<template>
  <div class="solgan">
    <h1>
      <span class="dullar">Dullar</span> moves the technology
    </h1>
    <div>
      <h2 class="h2">Dullar</h2>
      <p>Self build web frontend ecosystem for high performance and efficiency</p>
      <a class="github" href="https://github.com/dullarjs" target="_blank">
        <img src="../assets/github.svg">
        View on Github
      </a>
      <a class="github" href="./docs" target="_blank">
        <img src="../assets/docs.svg">
        View online docs
      </a>
    </div>
    <div>
      <h2 class="h2">Our project</h2>
      <ul>
        <li>
          <a href="https://www.npmjs.com/package/@dullar/king" target="_blank">@dullar/king:</a>
          <span> Advanced and highly reusable UI Components built on <a href="https://v3.vuejs.org/" target="_blank">Vue3</a></span>
        </li>
        <li>
          <a href="https://www.npmjs.com/package/@dullar/queen" target="_blank">@dullar/queen:</a>
          <span> Advanced and highly reusable Mobile UI Components built on <a href="https://v3.vuejs.org/" target="_blank">Vue3</a></span>
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
      <h2>Team members</h2>
      <ul class="teammembers">
        <li><a href="https://github.com/justbefree" target="_blank"><img src="https://avatars.githubusercontent.com/u/12696197?s=96&v=4"></a></li>
        <li><a href="https://github.com/justbefree" target="_blank"><img src="https://avatars.githubusercontent.com/u/17095525?s=96&v=4"></a></li>
        <li><a href="https://github.com/justbefree" target="_blank"><img src="https://avatars.githubusercontent.com/u/17561703?s=96&v=4"></a></li>
        <li><a href="https://github.com/justbefree" target="_blank"><img src="https://avatars.githubusercontent.com/u/25740954?s=96&v=4"></a></li>
        <li><a href="https://github.com/justbefree" target="_blank"><img src="https://avatars.githubusercontent.com/u/34881173?s=96&v=4"></a></li>
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
  color: #3e5d96;
  font-weight: bold;
}
.solgan h1 {
  font-weight: normal;
}
.solgan h2 {
  /* text-align: left; */
}
h1 .dullar {
  color: #3e5d96;
}
.solgan .github {
  border: 1px solid #7F8C8D;
  background: #fff;
  text-decoration: none;
  padding: 10px;
  display: inline-block;
  color: #7F8C8D;
  border-radius: 5px;
  margin: auto 5px;
}
.solgan .github img {
  width: 20px;
  vertical-align: top;
}
ul {
  list-style: none;
}
ul li {
  margin: 10px;
}
ul.teammembers li {
  display: inline-block;
}
ul.teammembers li img {
  width: 96px;
  height: auto;
}
</style>
