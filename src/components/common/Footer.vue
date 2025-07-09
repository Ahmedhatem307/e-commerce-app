<template>
  <footer>
    <div class="container">
      <div class="container__nav">
        <div class="container__layout">
          <div class="container__column">
            <h4 class="container__column--title">Navigate</h4>
            <ul class="container__list">
              <li class="container__list--item">About Us</li>
              <li class="container__list--item">Blog</li>
              <li class="container__list--item">Contact Us</li>
              <li class="container__list--item">Sitemap</li>
            </ul>
          </div>
          <div class="container__column">
            <h4 class="container__column--title">Collection</h4>
            <ul class="container__list">
              <li class="container__list--item">New Arrivals</li>
              <li class="container__list--item">Featured</li>
              <li class="container__list--item">Catalog</li>
              <li class="container__list--item">Brands</li>
            </ul>
          </div>
          <div class="container__column">
            <h4 class="container__column--title">Categories</h4>
            <ul class="container__list">
              <li class="container__list--item">Tables</li>
              <li class="container__list--item">Lamps</li>
              <li class="container__list--item">Chairs</li>
              <li class="container__list--item">Sofas</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container__info">
        <h2 class="container__address">399 Crownfield Road,</h2>
        <h2 class="container__address">Phoenix, Arizona 85012</h2>
        <a href="#" class="container__email">example@gmail.com</a>
        <p class="container__phone">+602-926-5809</p>
      </div>
    </div>
    <div class="container__buttom">
      <p class="conatiner__copyright">Copyrights © All Rights Reserved 2020</p>
      <div class="container__social">
        <h4 class="container__social--title">Get Started</h4>
        <img
          src="../../assets/images/twitter.png"
          alt="1"
          class="container__social--icon"
        />
        <img
          src="../../assets/images/instagram.png"
          alt="2"
          class="container__social--icon"
        />
        <img
          src="../../assets/images/facebook.png"
          alt="3"
          class="container__social--icon"
        />
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  position: static;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #0f1a2b;
  color: #d1cfc9;
  text-align: center;
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  & .container,
  .container__buttom {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0px 100px 0px 100px;
  }
}
.container {
  & .container__nav,
  .container__info {
    display: flex;
    flex-direction: column;
  }
}

.container__layout {
  display: flex;
  gap: 30px;
  & .container__list {
    list-style-type: none;
    padding: 0px;
  }
  & .container__column {
    text-align: left;
  }
  & .container__list--item {
    margin: 5px 0 10px 0;
  }
}

.container__info {
  text-align: end;
  & h2 {
    margin-bottom: 3px;
  }
  & .container__phone {
    margin-top: 2px;
  }
}

.container__social {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
  & .container__social--icon {
    width: auto;
    height: 25px;
  }
}

@media (max-width: 767px) {
  .container {
    flex-direction: column;
    & .container__layout {
      justify-content: space-around;
    }
  }
  .container__layout,
  .container__info {
    margin-bottom: 20px;
  }

  .container__info {
    text-align: left;
  }

  .container__buttom {
    font-size: x-small;
  }
}

@media (min-width: 330px) and (max-width: 767px) {
  .container,
  .container__buttom {
    margin: 20px !important;
  }
}
</style>
