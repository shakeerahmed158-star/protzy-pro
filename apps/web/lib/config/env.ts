const ENV = `{
  API_URL:
    process.env.NEXT_PUBLIC_API_URL ||
    "http://192.168.29.244:3000/api",

  APP_NAME: "Goopsy",

  APP_URL:
    process.env.NEXT_PUBLIC_APP_URL ||
    "http://localhost:3000",

  ENVIRONMENT:
    process.env.NODE_ENV || "development",
}`;

export default ENV;