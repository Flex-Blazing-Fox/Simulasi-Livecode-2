<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-info">
      <a class="navbar-brand text-white" href="#">Hacktiv Inventory</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link
              class="nav-link text-white"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              to="/login"
              >Login</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link text-white"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              to="/"
              >Logout</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>


<style>
</style>
