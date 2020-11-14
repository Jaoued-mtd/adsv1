<template>
  <section class="py-5 mt-5">
    <div class="container text-center">
      <h4 class="mb-5 text-left ml-5">Les categories</h4>
      <div class="row">
        <div class="col-md-4 mb-4">
          <router-link to="/annonces?cat=cannes">
            <img
              class="img-fluid"
              src="../../assets/images/cannesCat.png"
              alt=""
          /></router-link>
        </div>
        <div class="col-md-4 mb-4">
          <router-link to="/annonces?cat=moulinets">
            <img
              class="img-fluid"
              src="../../assets/images/moulinetsCat.png"
              alt=""
          /></router-link>
        </div>
        <div class="col-md-4 mb-4">
          <router-link to="/annonces?cat=leurres">
            <img
              class="img-fluid"
              src="../../assets/images/leurresCat.png"
              alt=""
          /></router-link>
        </div>
        <div class="col-md-4 mb-4">
          <router-link to="/annonces?cat=navigations">
            <img
              class="img-fluid"
              src="../../assets/images/navigationCat.png"
              alt=""
          /></router-link>
        </div>
        <div class="col-md-4 mb-4">
          <router-link to="/annonces?cat=bagageries">
            <img
              class="img-fluid"
              src="../../assets/images/bagagerieCat.png"
              alt=""
          /></router-link>
        </div>
        <div class="col-md-4 mb-4">
          <router-link to="/annonces?cat=fils">
            <img
              class="img-fluid"
              src="../../assets/images/filsCat.png"
              alt=""
            />
          </router-link>
        </div>
        <div class="col-md-4 mb-4">
          <router-link to="/annonces?cat=montages">
            <img
              class="img-fluid"
              src="../../assets/images/montageCat.png"
              alt=""
            />
          </router-link>
        </div>
        <div class="col-md-4 mb-4">
          <router-link to="/annonces?cat=vetements">
            <img
              class="img-fluid"
              src="../../assets/images/vetementCat.png"
              alt=""
            />
          </router-link>
        </div>
        <div class="col-md-4 mb-4">
          <router-link to="/annonces">
            <img class="img-fluid" src="../../assets/images/allCat.png" alt=""
          /></router-link>
        </div>
      </div>
    </div>
  </section>
</template>
