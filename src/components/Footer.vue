<template>
  <footer>
    <div class="primaryContainer">
      <div class="primaryContainer__lists">
        <div>
          <h4>Navigate</h4>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
        <div>
          <h4>Collection</h4>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
        <div>
          <h4>Categories</h4>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
      </div>
      <div>
        <h2>Address</h2>
        <p>email</p>
        <p>phone</p>
      </div>
    </div>

    <div class="secondaryContainer">
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
  background-color: gray;
  text-align: center;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.primaryContainer,
.secondaryContainer {
  display: flex;
  justify-content: space-around;
  & .primaryContainer__lists {
    display: flex;
    gap: 20px;
  }
}

.social {
  display: flex;
  align-items: center;
  gap: 5px;
}
.social img {
  width: auto;
  height: 25px;
}
</style>
