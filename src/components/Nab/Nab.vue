<template>
  <nav>
    <section>
      <div>
        <span>nake game</span>
      </div>

      <div>
        <a target="_blank" href="https://jesusbossa.dev">
          <i class="fas fa-home"></i>
        </a>
        <a target="_blank" href="https://twitter.com/jesMakinox">
          <i class="fab fa-twitter-square"></i>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/makinox">
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
    </section>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.03);
  background-color: #fff;
}

nav section {
  justify-content: space-between;
  align-items: center;
  max-width: 1324px;
  margin: 0px auto;
  display: flex;
  width: auto;
}

nav section div:first-of-type {
  display: flex;
  align-items: center;
}

nav section div:first-of-type img {
  height: 60px;
}

nav section div:first-of-type span {
  font-size: 18px;
}

nav section div:last-of-type a {
  text-decoration: none;
}

nav section div:last-of-type i {
  transition: all 0.3s ease 0s;
  color: #ff0000;
  cursor: pointer;
  font-size: 20px;
  margin: 0 2px;
}

nav section div:last-of-type i:hover {
  color: #00ff00;
}
</style>
