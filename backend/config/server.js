module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },

  url: env("https://earnest-sprinkles-a569ca.netlify.app"),
  settings: {
    cors: {
      enabled: true,
      headers: "*",
      expose: ["WWW-Authenticate", "Server-Authorization"],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"],
    },
  },
});
