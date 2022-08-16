const prodOrigins = [
  "http://217.21.78.84",
  "http://server.bdmis.org",
  "https://server.bdmis.org",
  "https://cms.bdmis.org",
  "http://cms.bdmis.org",
  "https://bdmis.org",
  "https://www.bdmis.org",
  "https://portal.bdmis.org",
  "http://0.0.0.0:8001",
  "http://localhost:8001",
  "http://0.0.0.0:1337",
  "https://bdmis.vercel.app",
];
const devOrigins = [
  "http://217.21.78.84",
  "https://cms.bdmis.org",
  "http://cms.bdmis.org",
  "https://bdmis.org",
  "https://www.bdmis.org",
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:8000",
  "http://localhost:8001",
  "http://localhost",
];

module.exports = [
  "strapi::errors",
  "strapi::security",
  // 'strapi::cors',
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::cors",
    config: {
      origin: prodOrigins,
    },
  },
];
