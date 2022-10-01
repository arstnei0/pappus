import { request } from 'https';

const req = request('https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/30771a1b-4c05-4d35-a540-21ac82e3a83e', {
  method: 'POST'
}, res => {
  res.on('data', data => {
    console.log(data.toString());
  })
});

req.on('error', err => {
  console.log(err);
});

req.end();
