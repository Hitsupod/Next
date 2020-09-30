const TWITTER_TOKENS = {
    TWITTER_CONSUMER_KEY: "KEY",
    TWITTER_CONSUMER_SECRET: "SECRET",
    TWITTER_ACCESS_TOKEN: "TOKEN",
    TWITTER_TOKEN_SECRET: "TSECRET"
  };
  
  const DB_USER = "dbuser";
  const DB_PASSWORD = "dbpassword";
  const MONGODB = {
    MONGODB_URI: `mongo "mongodb+srv://cluster0.dnsqb.mongodb.net/<dbname>" --username dbuser`
  };
  
  const SESSION = {
    COOKIE_KEY: "Session"
  };
  
  const KEYS = {
    ...TWITTER_TOKENS,
    ...MONGODB,
    ...SESSION
  };
  
  module.exports = KEYS;