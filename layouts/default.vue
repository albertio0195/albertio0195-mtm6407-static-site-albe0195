<template>
  <div class="site-wrapper">
    <nav class="navbar">
      <div class="nav-container">
        <NuxtLink to="/" class="logo">Albertio Portfolio</NuxtLink>
        
        <button class="hamburger" @click="toggleMenu" :class="{ active: isMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul class="nav-links" :class="{ open: isMenuOpen }">
          <li><NuxtLink to="/" @click="closeMenu">Home</NuxtLink></li>
          <li><NuxtLink to="/about" @click="closeMenu">About</NuxtLink></li>
          <li><NuxtLink to="/skills" @click="closeMenu">Skills</NuxtLink></li>
          <li><NuxtLink to="/contact" @click="closeMenu">Contact</NuxtLink></li>
        </ul>
      </div>
    </nav>

    <main class="main-content">
      <slot />
    </main>

    <footer class="footer">
      <p>&copy; 2025 Albertio Portfolio. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
.site-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  background: #2c3e50;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.logo {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  z-index: 1001;
}

.hamburger {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
  width: 30px;
  height: 24px;
  position: relative;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 3px;
  background: white;
  border-radius: 3px;
  transition: all 0.3s;
  position: absolute;
}

.hamburger span:nth-child(1) {
  top: 0;
}

.hamburger span:nth-child(2) {
  top: 50%;
  transform: translateY(-50%);
}

.hamburger span:nth-child(3) {
  bottom: 0;
}

.hamburger.active span:nth-child(1) {
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  bottom: 50%;
  transform: translateY(50%) rotate(-45deg);
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
  font-size: 1rem;
  font-weight: 500;
}

.nav-links a:hover {
  color: #3498db;
}

.main-content {
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
}

.footer {
  background: #2c3e50;
  color: white;
  text-align: center;
  padding: 2rem;
  margin-top: auto;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    max-width: 300px;
    height: 100vh;
    background: #2c3e50;
    flex-direction: column;
    padding: 5rem 2rem 2rem;
    gap: 2rem;
    transition: right 0.3s ease;
    box-shadow: -2px 0 10px rgba(0,0,0,0.3);
  }

  .nav-links.open {
    right: 0;
  }

  .nav-links li {
    width: 100%;
  }

  .nav-links a {
    display: block;
    padding: 0.8rem 0;
    font-size: 1.2rem;
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }

  .main-content {
    padding: 1rem;
  }
}

/* Tablet */
@media (max-width: 1024px) and (min-width: 769px) {
  .nav-links {
    gap: 1.5rem;
  }

  .nav-links a {
    font-size: 0.95rem;
  }
}
</style>