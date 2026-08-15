import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // 部署後請改成你的正式網址，例如 https://your-name.pages.dev
  site: 'https://del1215.github.io',
  base: '/MyBlog',
  devToolbar: { enabled: false },
  integrations: [sitemap()],
});
