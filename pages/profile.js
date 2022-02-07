import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ChatOutlined, NotificationsOutlined, SearchOutlined, SettingsOutlined } from '@mui/icons-material'
import { useRouter } from 'next/router'
import { route } from 'next/dist/server/router'
import NavBar from '../components/navBar'
import { withPageAuthRequired, useUser } from '@auth0/nextjs-auth0'
import { getSession } from '@auth0/nextjs-auth0'
import clientPromise from '../utils/mongodb';

export default function Profile({ profile }) {

    // const { user, error, isLoading } = useUser();
    // // const [profile, setProfile] = useState([])

    // // useEffect(async () => {
    // //     const response = await fetch('http://localhost:3000/api/getprofile')
    // //     const prof = await response.json()
    // //     setProfile(prof.currentUser)
    // // }, [])


    // if (isLoading) return <div>Loading...</div>;
    // if (error) return <div>{error.message}</div>;

    return (
        <div className='flex text-[#5D5FEF]'>
            <NavBar />
            <div className='flex-col w-full'>
                <div className='flex-grow m-7'>
                    <label className='flex bg-[#FCDDEC] p-2 rounded-2xl space-x-4'>
                        <SearchOutlined />
                        <input className='outline-none w-full bg-[#FCDDEC]' placeholder='Search...' type='text' id='search' />
                        <button><p><ChatOutlined /></p></button>
                        <button><p><NotificationsOutlined /></p></button>
                        <button><p><SettingsOutlined /></p></button>
                    </label>
                </div>
                <hr className='border-2 border-[#5D5FEF] ml-5 mr-5' />
                <div className='overflow-y-auto max-h-[800px] scrollbar-hide'>
                    <div className='flex-grow m-7 bg-[#FCDDEC] rounded-2xl pt-4 pb-4'>
                        <div className='flex-grow space-y-2  m-7'>
                            <p>USERNAME: {profile.username}</p>
                            <p>NAME: {profile.name}</p>
                            <p>DEPT: {profile.dept}</p>
                            <p>BATCH: {profile.batch}</p>
                            <p>D.O.B: {profile.dob}</p>
                            <p>BIO: {profile.bio}</p>
                            <p>POSTS: {profile.posts}</p>
                            <p>FOLLOWERS: {profile.followers}</p>
                            <p>FOLLOWING: {profile.following}</p>
                        </div>
                    </div>
                    <div className='flex-grow m-7 bg-[#FCDDEC] rounded-2xl pt-4 pb-4'>
                        <div className='flex-grow space-y-2  m-7'>
                            {/* - */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = withPageAuthRequired({
    async getServerSideProps(context) {
        const { user } = getSession(context.req, context.res)
        const client = await clientPromise;
        const database = client.db(process.env.MONGODB_DB);
        const data = await database.collection('profile').findOne({
            userid: user.sub
        })
        const profile = JSON.parse(JSON.stringify(data))
        return {
            props: {
                profile
            }
        }
    }
})