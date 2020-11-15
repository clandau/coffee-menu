<template>
  <div class="navbar">
    <nav>
      <v-app-bar app color="secondary">
        <v-toolbar-title
          ><router-link to="/" class="lightest--text text-h3">Hey, Coffee!</router-link
        ></v-toolbar-title>
        <v-btn
          fab
          medium
          color="accent"
          absolute
          bottom
          right
          :to="{ name: 'AddItem' }"
        >
          <v-icon>add</v-icon></v-btn
        >
      </v-app-bar>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
};
</script>

<style>
.navbar nav {
  padding: 0 20px;
}

a {
  text-decoration: none;
}
</style>
