import Image from "next/image"
import { useRouter } from "next/router"
import { AccountBoxOutlined, HomeOutlined, SchoolOutlined, FeedOutlined, StickyNote2Outlined, AccountBalanceOutlined, PaymentOutlined, LogoutOutlined } from '@mui/icons-material'

function NavBar() {

    const router = useRouter()
    const handleClick = (e, path) => {
        e.preventDefault()
        if (path === "/api/auth/logout")
            alert("You have successfully logged out")
        router.push(path)
    }

    return (
        <div className='flex h-screen'>
            <div className='flex flex-col space-y-4 p-5 items-center h-screen bg-[#FCDDEC] md:flex shadow-2xl'>
                <button><p className='font-mono text-3xl p-2 rounded-full text-[#FCDDEC] bg-[#5D5FEF]'>PROJECT_X</p></button>
                <p><Image className='rounded-full p-2' src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" alt='' width={150} height={150} /></p>
                <button onClick={(e) => handleClick(e, "/profile")}><p className={router.pathname === '/profile' ? 'font-mono text-xl p-2 bg-white rounded-xl' : 'font-mono text-xl p-2 hover:bg-white rounded-xl'}>PROFILE</p></button>
                <button onClick={(e) => handleClick(e, "/")}><p className={router.pathname === '/' ? 'font-mono text-xl p-2 bg-white rounded-xl' : 'font-mono text-xl p-2 hover:bg-white rounded-xl'}>HOME</p></button>
                <button onClick={(e) => handleClick(e, "/classroom")}><p className={router.pathname === '/classroom' ? 'font-mono text-xl p-2 bg-white rounded-xl' : 'font-mono text-xl p-2 hover:bg-white rounded-xl'}>CLASSROOM</p></button>
                <button onClick={(e) => handleClick(e, "/post")}><p className={router.pathname === '/post' ? 'font-mono text-xl p-2 bg-white rounded-xl' : 'font-mono text-xl p-2 hover:bg-white rounded-xl'}>POSTS</p></button>
                <button onClick={(e) => handleClick(e, "/tweets")}><p className={router.pathname === '/tweets' ? 'font-mono text-xl p-2 bg-white rounded-xl' : 'font-mono text-xl p-2 hover:bg-white rounded-xl'}>TWEETS</p></button>
                <button onClick={(e) => handleClick(e, "/payments")}><p className={router.pathname === '/payments' ? 'font-mono text-xl p-2 bg-white rounded-xl' : 'font-mono text-xl p-2 hover:bg-white rounded-xl'}>PAYMENTS</p></button>
                <button onClick={(e) => handleClick(e, "/api/auth/logout")}><p className='font-mono text-xl p-2 hover:bg-white rounded-xl'>LOGOUT</p></button>
            </div>
            <div className='flex flex-col space-y-4 p-5 items-center h-screen bg-[#FCDDEC] w-20 md:hidden'>
                <button><p className='font-mono text-3xl p-2 rounded-full text-[#FCDDEC] bg-[#5D5FEF]'>X</p></button>
                <p><Image className='rounded-full p-2' src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" alt='' width={150} height={150} /></p>
                <button onClick={(e) => handleClick(e, "/profile")}><p className={router.pathname === '/profile' ? 'font-mono text-xl p-2 bg-white rounded-xl' : 'font-mono text-xl p-2 hover:bg-white rounded-xl'}><AccountBoxOutlined /></p></button>
                <button onClick={(e) => handleClick(e, "/")}><p className={router.pathname === '/' ? 'font-mono text-xl p-2 bg-white rounded-xl' : 'font-mono text-xl p-2 hover:bg-white rounded-xl'}><HomeOutlined /></p></button>
                <button onClick={(e) => handleClick(e, "/classroom")}><p className={router.pathname === '/classroom' ? 'font-mono text-xl p-2 bg-white rounded-xl' : 'font-mono text-xl p-2 hover:bg-white rounded-xl'}><SchoolOutlined /></p></button>
                <button onClick={(e) => handleClick(e, "/post")}><p className={router.pathname === '/post' ? 'font-mono text-xl p-2 bg-white rounded-xl' : 'font-mono text-xl p-2 hover:bg-white rounded-xl'}><FeedOutlined /></p></button>
                <button onClick={(e) => handleClick(e, "/tweets")}><p className={router.pathname === '/tweets' ? 'font-mono text-xl p-2 bg-white rounded-xl' : 'font-mono text-xl p-2 hover:bg-white rounded-xl'}><StickyNote2Outlined /></p></button>
                <button onClick={(e) => handleClick(e, "/payments")}><p className={router.pathname === '/payments' ? 'font-mono text-xl p-2 bg-white rounded-xl' : 'font-mono text-xl p-2 hover:bg-white rounded-xl'}><PaymentOutlined /></p></button>
                <button onClick={(e) => handleClick(e, "/api/auth/logout")}><p className='font-mono text-xl p-2 hover:bg-white rounded-xl'><LogoutOutlined /></p></button>
            </div>
        </div>
    )
}

export default NavBar
