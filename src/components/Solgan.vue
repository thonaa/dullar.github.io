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
        <li v-for="(p, i) in projects" :key="i">
          <a :href="p.examples || p.npm" target="_blank">{{p.name}}:</a>
          <span> {{p.desc}} <a v-if="p.builtOn !== ''" :href="p.outsideUrl" target="_blank">{{p.builtOn}}</a></span>
        </li>
      </ul>
    </div>
    <div>
      <h2>DEVELOPER TEAM MEMBERS</h2>
      <ul class="teammembers">
        <li v-for="(team, i) in teamMember" :key="i">
          <a :href="team.github" :title="team.title" target="_blank">
            <img :src="team.profile">
          </a>
        </li>
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
import { teamMember } from "./team";
import { projects } from "./projects";
export default {
  name: 'Solgan',
  data() {
    return {
      teamMember,
      projects
    }
  }
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
