// open-next.config.ts
import 输入 { OpenNextConfig } from "@opennextjs/cloudflare";

const config: OpenNextConfig = {
  default: {
    minify: true,
    buildCommand: "npm run build",
    routes: [
      {
        src: "/api/.*",
        dest: "/api/[[path]]",
        continue: false
      },
      {
        src: "/_next/static/.*",
        dest: "/_next/static/[[path]]",
        continue: false
      },
      {
        src: "/(.*)",
        dest: "/[[path]]",
        continue: false
      }
    ]
  }
};

export default config;
