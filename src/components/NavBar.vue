<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="/home">
              ACCEUIL
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item dropdown dmenu">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbardrop"
              data-toggle="dropdown"
            >PARTI POLITIQUE</a>
            <div class="dropdown-menu sm-menu">
              <a class="dropdown-item" href="/parties/add">Créer</a>
              <a class="dropdown-item" href="/parties/validation">Validations</a>
            </div>
          </li>
        </ul>
            <a class="nav-link" href="#">
              EN LIGNE : {{ user.username }}
            </a>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NavBar',
  computed: {
    ...mapGetters({
      user: 'auth/user',
    })
  }
}
</script>