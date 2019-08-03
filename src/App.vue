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
            <input type="text" id="firstName" name="firstName" class="input" />
          </div>
        </div>
        <div class="field sample-vue-app-input-lastName">
          <label for="lastName" class="label">苗字</label>
          <div class="control">
            <input type="text" id="lastName" name="lastName" class="input" />
          </div>
        </div>
        <div class="field is-grouped is-grouped-right">
          <button id="form-submit" type="submit" class="button is-link">Search</button>
        </div>
      </div>
      <hr />
      <section class="hero">
        <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
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
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <a href="#" class>1</a>
              </td>
              <td>john</td>
              <td>doe</td>
              <td>test@rexev.com</td>
              <td>09011112222</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <a href="#" class>2</a>
              </td>
              <td>john</td>
              <td>doe</td>
              <td>test@rexev.com</td>
              <td>09011112222</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <a href="#" class>3</a>
              </td>
              <td>john</td>
              <td>doe</td>
              <td>test@rexev.com</td>
              <td>09011112222</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
