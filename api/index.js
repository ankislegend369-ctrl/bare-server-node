// api/index.js

const { createBareServer } = require('@tomphttp/bare-server-node');
const http = require('http');

// Create Bare server with the /bare/ path
const bare = createBareServer('/bare/');

// Export a handler for Vercel
module.exports = (req, res) => {
  if (bare.shouldRoute(req)) {
    bare.routeRequest(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
};

