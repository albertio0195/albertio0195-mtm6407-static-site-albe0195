export default defineNuxtConfig({
  ssr: false,
  
  app: {
    baseURL: '/albertio0195-mtm6407-static-site-albe0195/',
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