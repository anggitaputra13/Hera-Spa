<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="white">
      <div class="container">
        <!-- <b-navbar-brand href="#">NavBar</b-navbar-brand> -->
        <b-navbar-brand href="/" style="height: 20%; width: 50%">
          <img
            :src="require('../assets/images/logo.png')"
            style="height: 30%; width: 30%"
          />
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link class="nav-link" to="/">Home</router-link>
            <router-link class="nav-link" to="/packet"
              >Packet Massage</router-link
            >
            <router-link class="nav-link" to="#">About Us</router-link>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <div>
              <b-avatar-group overlap="0.65">
                <router-link to="">
                  <b-avatar badge-variant="info" src="https://toppng.com/uploads/preview/instagram-logo-circle-11549679754rhbcorxntv.png">  
                  </b-avatar>
                </router-link>
                <b-avatar badge-variant="info" src="data:image/png;base64,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">
                  
                </b-avatar>
                <b-avatar badge-variant="info" src="https://cdn2.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-whatsapp-circle-512.png">
                  
                </b-avatar>
              </b-avatar-group>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
</style>