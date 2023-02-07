<template>
  <!-- Header Section Begin -->
  <header class="header">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="header__logo">
            <nuxt-link tag="h1" to="/" class="text-brand"
              ><img src="images/logo.png" class="logo" />movieReview</nuxt-link
            >
          </div>
        </div>
        <div class="col-lg-6">
          <nav class="header__menu">
            <ul>
              <li>
                <nuxt-link tag="a" to="/add-movie">Add New Movie</nuxt-link>
              </li>
              <li v-if="this.$store.getters.userLogin" @click="logout">
                <h1>Logout</h1>
              </li>
              <li v-else>
                <nuxt-link tag="a" to="/user/login">Login</nuxt-link>
              </li>
              <li v-show="this.$store.getters.userLogin">
                <nuxt-link tag="a" to="/user">{{
                  $store.state.userData?.username
                }}</nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
  <!-- Header Section End -->
</template>
<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/user/login");
    },
  },
};
</script>
<style>
.header__logo {
  padding: 15px 0;
}

.header__logo img {
  width: 200px;
  padding-top: 10px;
}

.header__logo a {
  display: inline-block;
}

.header__menu {
  padding: 24px 0;
}

.header__menu ul li {
  list-style: none;
  margin-right: 50px;
  position: relative;
  text-align: right;
}

.header__menu ul {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
}

.header__menu ul h1 {
  font-size: 20px;
  font-weight: bold;
}

.header__menu ul li:hover > a {
  color: #7fad39;
}

.header__menu ul li:last-child {
  margin-right: 0;
}

.header__menu ul li a {
  font-size: 14px;
  color: #252525;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  transition: all, 0.3s;
  padding: 5px 0;
  display: block;
}

.text-brand {
  font-family: "Ubuntu", sans-serif;
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo {
  width: 50px !important;
}
</style>
