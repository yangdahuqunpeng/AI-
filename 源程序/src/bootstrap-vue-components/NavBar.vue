<!-- Bootstrap Vue Navbar -->
<template>
  <div>
    <b-navbar class='px-3' toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="#">EyeScreening</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Left aligned nav items -->
        <b-navbar-nav>
          <b-nav-item href="/">Form</b-nav-item>
          <b-nav-item href="/carakerja">Cara Kerja</b-nav-item>
          <b-nav-item href="/panduan">Panduan</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="https://react-eyechatbot.herokuapp.com">
            <i class='bi bi-arrow-bar-left'></i> KEMBALI
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>  
</template>