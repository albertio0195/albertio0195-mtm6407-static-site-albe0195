<template>
  <div class="skills">
    <section class="skills-hero">
      <h1>My Skills</h1>
      <p class="subtitle">Technologies and tools I work with</p>
    </section>

    <section class="skills-content">
      <div class="skills-category">
        <h2>💻 Frontend Development</h2>
        <div class="skills-list">
          <div class="skill-item">
            <div class="skill-header">
              <span class="skill-name">HTML5</span>
              <span class="skill-level">Advanced</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 90%"></div>
            </div>
          </div>

          <div class="skill-item">
            <div class="skill-header">
              <span class="skill-name">CSS3 / SCSS</span>
              <span class="skill-level">Advanced</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 85%"></div>
            </div>
          </div>

          <div class="skill-item">
            <div class="skill-header">
              <span class="skill-name">JavaScript (ES6+)</span>
              <span class="skill-level">Intermediate</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 75%"></div>
            </div>
          </div>

          <div class="skill-item">
            <div class="skill-header">
              <span class="skill-name">Vue.js</span>
              <span class="skill-level">Intermediate</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 70%"></div>
            </div>
          </div>

          <div class="skill-item">
            <div class="skill-header">
              <span class="skill-name">Nuxt 3</span>
              <span class="skill-level">Intermediate</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 65%"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="skills-category">
        <h2>🎨 Design & UI/UX</h2>
        <div class="skills-list">
          <div class="skill-item">
            <div class="skill-header">
              <span class="skill-name">Responsive Design</span>
              <span class="skill-level">Advanced</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 85%"></div>
            </div>
          </div>

          <div class="skill-item">
            <div class="skill-header">
              <span class="skill-name">CSS Frameworks (Bootstrap)</span>
              <span class="skill-level">Intermediate</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 75%"></div>
            </div>
          </div>

          <div class="skill-item">
            <div class="skill-header">
              <span class="skill-name">UI/UX Principles</span>
              <span class="skill-level">Intermediate</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 70%"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="skills-category">
        <h2>🛠️ Tools & Workflow</h2>
        <div class="skills-list">
          <div class="skill-item">
            <div class="skill-header">
              <span class="skill-name">Git & GitHub</span>
              <span class="skill-level">Intermediate</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 75%"></div>
            </div>
          </div>

          <div class="skill-item">
            <div class="skill-header">
              <span class="skill-name">VS Code</span>
              <span class="skill-level">Advanced</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 85%"></div>
            </div>
          </div>

          <div class="skill-item">
            <div class="skill-header">
              <span class="skill-name">NPM / Package Management</span>
              <span class="skill-level">Intermediate</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 70%"></div>
            </div>
          </div>

          <div class="skill-item">
            <div class="skill-header">
              <span class="skill-name">Deployment (Netlify)</span>
              <span class="skill-level">Beginner</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 60%"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.skills {
  max-width: 1000px;
  margin: 0 auto;
}

.skills-hero {
  text-align: center;
  padding: 3rem 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 10px;
  margin-bottom: 3rem;
}

.skills-hero h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

.skills-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.skills-category {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.skills-category h2 {
  color: #667eea;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skill-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.skill-name {
  font-weight: 600;
  color: #2c3e50;
  font-size: 1.1rem;
}

.skill-level {
  color: #667eea;
  font-size: 0.9rem;
  font-weight: 500;
}

.progress-bar {
  width: 100%;
  height: 12px;
  background: #e9ecef;
  border-radius: 10px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  transition: width 1s ease;
}

/* Responsive */
@media (max-width: 768px) {
  .skills-hero h1 {
    font-size: 2rem;
  }
  
  .skills-category {
    padding: 1.5rem;
  }
  
  .skills-category h2 {
    font-size: 1.5rem;
  }
}
</style>