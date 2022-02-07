import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction



export default withApiAuthRequired(async function handler(req, res) {
  const { user } = getSession(req, res);
  res.json({ protected: 'My Secret', id: user.sub });
})

