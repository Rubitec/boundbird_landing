import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        pricing: 'pricing.html',
        blog: 'blog/index.html',
        'blog-prospect-contact': 'blog/how-to-find-prospect-contact-info.html',
        'blog-lead-nurturing': 'blog/lead-nurturing-automation.html',
        'blog-linkedin-outreach': 'blog/linkedin-outreach-strategy-for-agencies.html',
      },
    },
  },
})
