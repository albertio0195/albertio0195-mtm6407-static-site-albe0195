export default defineNuxtConfig({
  ssr: true,
  
  app: {
    baseURL: '/mtm6407-static-site-albe0195/',
    buildAssetsDir: 'assets',
    head: {
      title: 'Albertio Samuel - Portfolio',
      meta: [
        { name: 'description', content: 'A portfolio showcasing my web development skills and projects' }
      ]
    }
  },

  compatibilityDate: '2024-11-24'
})