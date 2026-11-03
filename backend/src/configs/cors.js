const env = require("./env.config");

const staticAllowedOrigins = [
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "http://localhost:5001",
  "http://127.0.0.1:5001",
  "https://www.fortschritthealthcareltd.com",
  "https://fortschritthealthcareltd.com",
  "http://www.fortschritthealthcareltd.com",
  "http://fortschritthealthcareltd.com",
  "https://fortschritthealthcareltd.onrender.com",
  env.FRONTEND_LOCAL_URL,
  env.FRONTEND_SERVER_URL,
  env.FRONTEND_URL,
].filter(Boolean);

const isAllowedOrigin = (origin) => {
  // Allow requests with no origin (like mobile apps, curl, or server-to-server)
  if (!origin) return true;

  // Exact match in configured array
  if (staticAllowedOrigins.includes(origin)) return true;

  // Match any localhost or local IP (with any port)
  if (/^http:\/\/(localhost|127\.\d+\.\d+\.\d+)(:\d+)?$/.test(origin)) {
    return true;
  }

  // Match official Fortschritt domain (with or without www, http or https)
  if (/^https?:\/\/(www\.)?fortschritthealthcareltd\.com$/.test(origin)) {
    return true;
  }

  // Match Vercel deployment domains (*.vercel.app)
  if (/^https:\/\/([a-zA-Z0-9_-]+\.)*vercel\.app$/.test(origin)) {
    return true;
  }

  // Match Render backend domain
  if (/^https:\/\/([a-zA-Z0-9_-]+\.)*onrender\.com$/.test(origin)) {
    return true;
  }

  return false;
};

const corsOptions = {
  origin: (origin, callback) => {
    if (isAllowedOrigin(origin)) {
      callback(null, true);
    } else {
      console.warn(`[CORS] Blocked request from origin: ${origin}`);
      callback(null, false);
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept"],
  credentials: true,
  optionsSuccessStatus: 204,
};

module.exports = {
  corsOptions,
  isAllowedOrigin,
};
