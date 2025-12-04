<template>
  <div class="about">
    <section class="about-hero">
      <h1>About Me</h1>
      <p class="subtitle">Get to know who I am and what I do</p>
    </section>

    <section class="about-content">
      <div class="about-section">
        <h2>👋 Hello!</h2>
        <p>
          My name is Albertio Samuel, and I'm a web development student at Algonquin College. 
          I'm passionate about creating beautiful, functional, and user-friendly websites that 
          make a real impact.
        </p>
        <p>
          I love learning new technologies and pushing myself to build better projects with each 
          new challenge. Whether it's frontend design or backend functionality, I enjoy every 
          aspect of web development.
        </p>
      </div>

      <div class="about-section">
        <h2>🎓 Education</h2>
        <div class="education-item">
          <h3>Algonquin College</h3>
          <p class="degree">Interactive Media Design / Web Development</p>
          <p class="year">2025</p>
          <p>
            Learning modern web technologies including HTML, CSS, JavaScript, Vue.js, Nuxt, 
            responsive design, and more. Building real-world projects and gaining practical 
            experience in web development.
          </p>
        </div>
      </div>

      <div class="about-section">
        <h2>💡 What I'm Learning</h2>
        <ul class="learning-list">
          <li>Building static sites with Nuxt 3</li>
          <li>Creating responsive, mobile-first designs</li>
          <li>Modern JavaScript (ES6+) and Vue.js</li>
          <li>CSS frameworks and animations</li>
          <li>Git version control and GitHub collaboration</li>
          <li>Deploying projects to live hosting platforms</li>
        </ul>
      </div>

      <div class="about-section">
        <h2>🎯 My Goals</h2>
        <p>
          I'm working towards becoming a skilled full-stack web developer. I want to create 
          websites and applications that solve real problems and provide great user experiences. 
          My goal is to continuously learn, build impressive projects, and eventually work on 
          meaningful projects that make a difference.
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about {
  max-width: 900px;
  margin: 0 auto;
}

.about-hero {
  text-align: center;
  padding: 3rem 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 10px;
  margin-bottom: 3rem;
}

.about-hero h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.about-section {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.about-section h2 {
  color: #667eea;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.about-section p {
  color: #555;
  line-height: 1.8;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.education-item {
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

.education-item h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.degree {
  font-weight: bold;
  color: #667eea;
  margin-bottom: 0.3rem;
}

.year {
  color: #888;
  font-style: italic;
  margin-bottom: 1rem;
}

.learning-list {
  list-style: none;
  padding: 0;
}

.learning-list li {
  padding: 0.8rem;
  margin-bottom: 0.5rem;
  background: #f8f9fa;
  border-radius: 5px;
  border-left: 3px solid #667eea;
  color: #555;
  font-size: 1.1rem;
}

.learning-list li:before {
  content: "✓ ";
  color: #667eea;
  font-weight: bold;
  margin-right: 0.5rem;
}

/* Responsive */
@media (max-width: 768px) {
  .about-hero h1 {
    font-size: 2rem;
  }
  
  .about-section {
    padding: 1.5rem;
  }
  
  .about-section h2 {
    font-size: 1.5rem;
  }
}
</style>