module.exports = {
  apps: [
    {
      name: "iped-infor-collect",
      cwd: "/www/wwwroot/creaite.cn/IPED/infor_collect",
      script: "server.js",
      interpreter: "node",
      env: {
        NODE_ENV: "production",
        PORT: 3078,
        BASE_PATH: "/IPED/infor_collect",
      },
    },
  ],
};
