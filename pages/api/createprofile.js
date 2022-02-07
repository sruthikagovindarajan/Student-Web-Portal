import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0'
import clientPromise from '../../utils/mongodb';
import profile from '../profile';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction



export default withApiAuthRequired(async function handler(req, res) {
  const { user } = getSession(req, res);
  const client = await clientPromise;
  const database = client.db(process.env.MONGODB_DB);
  const currentUser = await database.collection("profile").findOne({
    userid: user.sub
  })
  if(currentUser!==null)
  {
    res.json({
      currentUser
    });
  }
  else
  {
    const prof = await database.collection("profile").insertOne({
    name: "sruthika",
    username: "asdasda",
    dept : "CSE",
    batch: 2020,
    dob : "16.05.2001" ,
    bio: "YOLO",
    posts :0,
    followers: 0,
    following:0,
    userid: user.sub,
  })
  
  res.json({ prof });
}
})