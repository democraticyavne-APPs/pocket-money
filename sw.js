self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // מאשר לדפדפן שמדובר באפליקציה שעומדת בתקן
  return; 
});
