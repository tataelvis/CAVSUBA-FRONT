<template>
  <header>
    <div class="container">
      <div class="row">
      <div id="branding" class="col-md-2">
        <h1>
          <span class="highlight">CAVSUBA</span> System
        </h1>
      </div>

      <div class="col-md-2 col-md-offset-1">
        <img src="~@/assets/ubap.png" alt="logo-university of bamenda" class="image-responsive"/>
      </div>

      <nav class="col-md-7">
        <ul class="pull-right">
          <li class="current">
            <a href="/">Home</a>
          </li>
          <li class="current">
            <a href="/login">Login</a>
          </li>
          <li class="current">
            <a href="/verify">Communique Verification</a>
          </li>
        </ul>
      </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavBar2'
};
</script>
