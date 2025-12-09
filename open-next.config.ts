import { defineConfig } from '@opennextjs/cloudflare';

export default defineConfig({
  // 指定构建输出目录，与你在 Cloudflare Pages 中设置的一致
  outputDir: '.open-next',
});
