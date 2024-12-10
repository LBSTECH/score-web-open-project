const cspDirectives = {
  'default-src': ["'self'"],
  'script-src': ["'self'", "'unsafe-inline'", 'blob:'],
  'worker-src': ["'self'", 'blob:', "https://*.mapbox.com"],
  'style-src': ["'self'", "'unsafe-inline'", 'https://*.mapbox.com'],
  'connect-src': ["'self'", "https://*.mapbox.com"],
  'img-src': [
    "'self'",
    "blob:",
    "data:",
    "https://*.mapbox.com",
    "https://console.cloud.google.com/storage/browser/road_scanner_collector"
  ],
  'font-src': ["'self'", "https://fonts.gstatic.com"],
};

export default cspDirectives;