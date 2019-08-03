<template>
  <div id="app">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">担当者一覧</h1>
        </div>
      </div>
    </section>
    <div class="container is-fullhd">
      <div class="notification">
        <div class="field sample-vue-app-input-firstName">
          <label for="firstName" class="label">名前</label>
          <div class="control">
            <input
              @keydown.enter="search"
              v-model="firstName"
              type="text"
              id="firstName"
              name="firstName"
              class="input"
            />
          </div>
        </div>
        <div class="field sample-vue-app-input-lastName">
          <label for="lastName" class="label">苗字</label>
          <div class="control">
            <input type="text" id="lastName" name="lastName" class="input" />
          </div>
        </div>
        <div class="field is-grouped is-grouped-right">
          <p class="control">
            <button @click="search" id="form-submit" type="submit" class="button is-link">Search</button>
          </p>
          <p class="control">
            <button @click="shuffle" type="submit" class="button is-link">Shuffle</button>
          </p>
        </div>
      </div>
      <hr />
      <section id="result-list" class="hero">
        <table
          v-if="0 < results.length && !loding"
          class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
        >
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>名前</th>
              <th>苗字</th>
              <th>Email</th>
              <th>Tel</th>
            </tr>
          </thead>
          <tbody is="transition-group">
            <tr v-for="(staff, index) in results" :key="staff.id">
              <td>{{index+1}}</td>
              <td>
                <a href="#" class>{{staff.id}}</a>
              </td>
              <td>{{staff.firstName}}</td>
              <td>{{staff.lastName}}</td>
              <td>{{staff.email}}</td>
              <td>{{staff.tel}}</td>
            </tr>
          </tbody>
        </table>
        <div class="spinner" v-if="loding">
          <div class="cube1"></div>
          <div class="cube2"></div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "app",
  data() {
    return {
      firstName: "",
      results: [],
      loding: false,
    };
  },
  methods: {
    sleep: msec => new Promise(resolve => setTimeout(resolve, msec)),
    shuffle() {
      this.results = _.shuffle(this.results);
    },
    search() {
      this.loding = true;
      fetch(
        "http://localhost:18081/admin/api/staff?firstName=" + this.firstName
      )
        .then(async response => {
          await this.sleep(2000);
          return response.json();
        })
        .then(myJson => {
          this.loding = false;
          this.results = myJson.data;
        })
        .catch(() => {
          this.loding = false;
        });
    }
  }
};
</script>

<style scoped href="https://cdn.rawgit.com/ConnorAtherton/loaders.css/master/loaders.min.css">
.v-move {
  transition: transform 1s;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.spinner {
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;
}
.cube1,
.cube2 {
  background-color: #333;
  width: 15px;
  height: 15px;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;
  animation: sk-cubemove 1.8s infinite ease-in-out;
}
.cube2 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
@-webkit-keyframes sk-cubemove {
  25% {
    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
  }
  50% {
    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
  }
  75% {
    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg)
      scale(0.5);
  }
  100% {
    -webkit-transform: rotate(-360deg);
  }
}
@keyframes sk-cubemove {
  25% {
    transform: translateX(42px) rotate(-90deg) scale(0.5);
    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
  }
  50% {
    transform: translateX(42px) translateY(42px) rotate(-179deg);
    -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);
  }
  50.1% {
    transform: translateX(42px) translateY(42px) rotate(-180deg);
    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
  }
  75% {
    transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg)
      scale(0.5);
  }
  100% {
    transform: rotate(-360deg);
    -webkit-transform: rotate(-360deg);
  }
}
</style>
