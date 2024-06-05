<template>
  <header>
    <nav class="navbar navbar-expand">
      <div class="container">
        <RouterLink to="/" class="navbar-brand">
          <img class="logo" src="../../assets/img/logo.png" alt="logo" />
        </RouterLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link active" aria-current="page"> Beranda </RouterLink>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Produk
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Pakaian</a></li>
                <li><a class="dropdown-item" href="#">Sepatu</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <RouterLink to="/about" class="nav-link" aria-current="page">
                Tentang Kami
              </RouterLink>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Bantuan</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Informasi</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>