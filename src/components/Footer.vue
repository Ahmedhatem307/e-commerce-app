<template>
  <footer>
    <div class="container">
      <div class="leftContainer">
        <div class="primaryContainer__lists">
          <div>
            <h4>Navigate</h4>
            <ul>
              <li>About Us</li>
              <li>Blog</li>
              <li>Contact Us</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div>
            <h4>Collection</h4>
            <ul>
              <li>New Arrivals</li>
              <li>Featured</li>
              <li>Catalog</li>
              <li>Brands</li>
            </ul>
          </div>
          <div>
            <h4>Categories</h4>
            <ul>
              <li>Tables</li>
              <li>Lamps</li>
              <li>Chairs</li>
              <li>Sofas</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="rightContainer">
        <div class="info">
          <h2>399 Crownfield Road,</h2>
          <h2>Phoenix, Arizona 85012</h2>
          <a href="#">example@gmail.com</a>
          <p>+602-926-5809</p>
        </div>
      </div>
    </div>
    <div class="buttomContainer">
      <div><p>Copyrights © All Rights Reserved 2020</p></div>
      <div class="social">
        <h4>Get Started</h4>
        <img src="../assets/images/twitter.png" alt="1" />
        <img src="..//assets/images/instagram.png" alt="2" />
        <img src="..//assets/images/facebook.png" alt="3" />
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  position: fixed;
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
}
.container,
.buttomContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0px 100px 0px 100px;
}
.leftContainer,
.rightContainer {
  display: flex;
  flex-direction: column;
}
.info {
  text-align: end;
  & h2 {
    margin-bottom: 3px;
  }
}
.primaryContainer__lists {
  display: flex;
  gap: 30px;
}
.primaryContainer__lists div ul {
  list-style-type: none;
  padding: 0px;
}

.primaryContainer__lists div {
  text-align: left;
}
.primaryContainer__lists div li {
  margin: 5px 0 10px 0;
}
.social {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
}
.social img {
  width: auto;
  height: 25px;
}
</style>
