module.exports = {
  apps : [{
    name      : 'nuxt-cms',
    script    : 'build/main.js',
    env: {
      NODE_ENV: 'development',
      __ENV: 'development'
    },
    env_uat : {
      NODE_ENV: 'uat',
      __ENV: 'uat'
    },
    env_production : {
      NODE_ENV: 'production',
      __ENV: 'production'
    }
  }],
  deploy: {
    production: {
      user: "root",
      host: ["120.25.159.24"],
      ref: "origin/master",
      ssh_options: "StrictHostKeyChecking=no",
      repo: "git@github.com:patricknieh/nuxt-cms.git",
      path: "/git/nuxt-cms",
      "pre-deploy": "git fetch --all",
      "post-deploy": "pm2 reload ecosystem.config.js --env production"
    }
  }
}
