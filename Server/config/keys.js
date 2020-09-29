const TWITTER_TOKENS = {
    TWITTER_CONSUMER_KEY: "SOME KEY",
    TWITTER_CONSUMER_SECRET: "SOME SECRET",
    TWITTER_ACCESS_TOKEN: "SOME ACCESS TOKEN",
    TWITTER_TOKEN_SECRET: "SOME TOKEN SECRET"
  };
  
  const DB_USER = "dbuser";
  const DB_PASSWORD = "dbpassword";
  const MONGODB = {
    MONGODB_URI: `mongo "mongodb+srv://cluster0.dnsqb.mongodb.net/<dbname>" --username dbuser`
  };
  
  const SESSION = {
    COOKIE_KEY: "thisappisawesome"
  };
  
  const KEYS = {
    ...TWITTER_TOKENS,
    ...MONGODB,
    ...SESSION
  };
  
  module.exports = KEYS;