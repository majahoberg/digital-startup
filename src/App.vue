<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">home</router-link> |
      <router-link to="/create">create</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
:root {
  --primary: #428cd4;
  --secondary: #004e9a;
  --text-color-light: #f3f3f3;
  --text-color-dark: #041b2d;
}

#app {
  font-family: futura-pt, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-color-dark);
}

#nav {
  padding: 30px;
}

#nav a {
  font-size: 1.15em;
  font-weight: bold;
  color: var(--primary);
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: var(--secondary);
}

button {
  text-align: center;
  cursor: pointer;
  border: none;
  margin-bottom: 3%;
  padding: 12px 15px;
  font-size: 1em;
  border-radius: 0;
  color: var(--text-color-light);
  background-color: var(--primary);
    border-radius: 30px;
  width: 100%;
  max-width: 350px;
  font-family: futura-pt;
  font-weight: 500;
  text-transform: lowercase;
}


#button-delete {
  background-color: var(--secondary);
}


</style>
