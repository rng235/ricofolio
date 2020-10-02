module.exports = {
  apps : [{
    name        : "ricofolio",
    script      : "node_modules/gatsby/dist/bin/gatsby.js",
    watch       : true,
    env: {
      "NODE_ENV": "development",
    },
    env_production : {
     "NODE_ENV": "production"
    }
  }]
}
