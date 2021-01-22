const { createProxyMiddleware } = require('http-proxy-middleware');
const morgan = require("morgan");

module.exports = function(app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: process.env.BACKENDHOST || "http://localhost:4000",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/api/v1"
      }
    })
  );
  app.use(morgan('combined'));
}