<template>
  <div class="home">
    <section class="hero">
      <h1 class="hero-title">Welcome to My Portfolio</h1>
      <p class="hero-subtitle">Hi, I'm Albertio Samuel - A Web Developer & Designer</p>
      <p class="hero-description">
        I'm a student at Algonquin College passionate about creating beautiful and functional websites. 
        Explore my projects and skills below!
      </p>
      <div class="hero-buttons">
        <NuxtLink to="/contact" class="btn btn-secondary">Get In Touch</NuxtLink>
      </div>
    </section>

    <section class="highlights">
      <div class="highlight-card">
        <h3>🎨 Creative Design</h3>
        <p>Building visually appealing and user-friendly interfaces</p>
      </div>
      <div class="highlight-card">
        <h3>💻 Modern Tech</h3>
        <p>Using the latest web technologies like Nuxt, Vue, and more</p>
      </div>
      <div class="highlight-card">
        <h3>📱 Responsive</h3>
        <p>All projects work seamlessly across devices</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  padding: 2rem 0;
}

.hero {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 10px;
  margin-bottom: 3rem;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.hero-description {
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 0.8rem 2rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.3s;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  background: white;
  color: #667eea;
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.highlights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.highlight-card {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.highlight-card:hover {
  transform: translateY(-5px);
}

.highlight-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.highlight-card p {
  color: #666;
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .hero {
    padding: 2rem 1rem;
  }
}
</style>