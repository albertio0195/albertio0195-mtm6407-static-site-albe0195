<template>
  <div class="contact">
    <section class="contact-hero">
      <h1>Get In Touch</h1>
      <p class="subtitle">Let's connect and work together</p>
    </section>

    <section class="contact-content">
      <div class="contact-info">
        <h2>📧 Contact Information</h2>
        <div class="info-items">
          <div class="info-item">
            <span class="icon">✉️</span>
            <div>
              <h3>Email</h3>
              <p>albertiosamuel420@gmail.com</p>
            </div>
          </div>

          <div class="info-item">
            <span class="icon">💼</span>
            <div>
              <h3>LinkedIn</h3>
              <p>https://www.linkedin.com/in/samuel-albertio-2b93b8318/</p>
            </div>
          </div>

          <div class="info-item">
            <span class="icon">💻</span>
            <div>
              <h3>GitHub</h3>
              <p>github.com/albertio0195</p>
            </div>
          </div>

          <div class="info-item">
            <span class="icon">📍</span>
            <div>
              <h3>Location</h3>
              <p>Ottawa, Ontario, Canada</p>
            </div>
          </div>
        </div>
      </div>

      <div class="contact-form-section">
        <h2>💬 Send Me a Message</h2>
        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Name</label>
            <input 
              type="text" 
              id="name" 
              v-model="formData.name"
              placeholder="Your Name" 
              required
            />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="formData.email"
              placeholder="your.email@example.com" 
              required
            />
          </div>

          <div class="form-group">
            <label for="subject">Subject</label>
            <input 
              type="text" 
              id="subject" 
              v-model="formData.subject"
              placeholder="What's this about?" 
              required
            />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea 
              id="message" 
              v-model="formData.message"
              placeholder="Your message here..." 
              rows="6"
              required
            ></textarea>
          </div>

          <button type="submit" class="submit-btn">Send Message</button>

          <p v-if="submitted" class="success-message">
            ✓ Thank you! Your message has been received.
          </p>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitted = ref(false)

const handleSubmit = () => {
  // In a real application, you would send this data to a backend
  console.log('Form submitted:', formData.value)
  submitted.value = true
  
  // Reset form after 3 seconds
  setTimeout(() => {
    formData.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
    submitted.value = false
  }, 3000)
}
</script>

<style scoped>
.contact {
  max-width: 1000px;
  margin: 0 auto;
}

.contact-hero {
  text-align: center;
  padding: 3rem 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 10px;
  margin-bottom: 3rem;
}

.contact-hero h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.contact-info,
.contact-form-section {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.contact-info h2,
.contact-form-section h2 {
  color: #667eea;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.icon {
  font-size: 2rem;
}

.info-item h3 {
  color: #2c3e50;
  margin-bottom: 0.3rem;
}

.info-item p {
  color: #666;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  color: #2c3e50;
  font-weight: 600;
}

.form-group input,
.form-group textarea {
  padding: 0.8rem;
  border: 2px solid #e9ecef;
  border-radius: 5px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #667eea;
}

.submit-btn {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s;
}

.submit-btn:hover {
  transform: translateY(-2px);
}

.success-message {
  color: #28a745;
  font-weight: 600;
  text-align: center;
  padding: 1rem;
  background: #d4edda;
  border-radius: 5px;
}

/* Responsive */
@media (max-width: 768px) {
  .contact-hero h1 {
    font-size: 2rem;
  }
  
  .contact-content {
    grid-template-columns: 1fr;
  }
}
</style>