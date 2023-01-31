<template>
  <form @submit.prevent="onSubmit">
    <div class="container">
      <input
        type="text"
        placeholder="Enter Username"
        name="uname"
        required
        v-model="username"
      />
      <input
        type="email"
        placeholder="Enter Email"
        name="uname"
        required
        v-model="email"
      />
      <input
        type="password"
        placeholder="Enter Password"
        name="psw"
        required
        v-model="password"
      />
      <button type="submit">Sign Up</button>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      username: "",
    };
  },
  methods: {
    onSubmit() {
      alert("jalan");
      this.$store
        .dispatch("userAuthentication", {
          email: this.email,
          password: this.password,
          displayName: this.username,
          isLogin: false,
        })
        .then(() => this.$router.push("/"));
    },
  },
};
</script>
<style>
input[type="email"],
input[type="password"],
input[type="text"] {
  width: 20%;
  padding: 12px 20px;
  margin: 8px auto;
  display: block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px auto;
  display: block;
  border: none;
  cursor: pointer;
  width: 20%;
}

button:hover {
  opacity: 0.8;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}
</style>
