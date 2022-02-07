import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0'
import clientPromise from '../../utils/mongodb';
import profile from '../profile';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction



export default async function handler(req, res) {
  const { user } = getSession(req, res);
  const client = await clientPromise;
  const database = client.db(process.env.MONGODB_DB);
  const currentUser = await database.collection("profile").find({})
  
  res.json({ currentUser });
}