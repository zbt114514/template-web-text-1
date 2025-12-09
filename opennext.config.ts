// opennext.config.ts
import type { OpenNextConfig } from "@opennextjs/cloudflare";

const config: OpenNextConfig = {
  default: {
    // 必须至少有一个空对象
    minify: true,
    // 根据你的应用需求添加其他配置
    buildCommand: "npm run build",
    
    // 根据你的页面类型配置路由
    routes: [
      {
        src: "/api/.*",
        dest: "/api/[[path]]",
        continue: false
      },
      {
        src: "/(.*)",
        dest: "/[[path]]",
        continue: false
      }
    ],
    
    // 如果有 ISR 页面
    override: {
      wrappers: {
        "app-router": {
          incrementalCache: {
            kind: "s3",
            bucketName: "your-bucket-name",
            bucketRegion: "auto",
            accessKeyId: "${ACCESS_KEY_ID}",
            secretAccessKey: "${SECRET_ACCESS_KEY}"
          }
        }
      }
    }
  }
};

export default config;
