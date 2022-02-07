import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0'
import clientPromise from '../../utils/mongodb';
import profile from '../profile';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default withApiAuthRequired(async function handler(req, res) {
    const { user } = getSession(req, res);
    const client = await clientPromise;
    const date = new Date();
    const database = client.db(process.env.MONGODB_DB);
    const prof = await database.collection("posts").insertOne({
        postTitle: req.body.title,
        postCaption: req.body.caption,
        createdOn: date,
        updatedOn: "somedate",
        createdBy: user.sub,
        likes: 0,
        attachments: "sadasd",
        shares: 0,
        Comments: [{
                createdBy: "userId",
                commentContent: "asdasd",
                likes: 0
            }]})
    res.json({ prof });
})