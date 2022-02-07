import Image from 'next/image'
import { ChatOutlined, NotificationsOutlined, SearchOutlined, SettingsOutlined, FavoriteBorderOutlined, CommentOutlined, SendOutlined, MoreVertOutlined, AddCircle } from '@mui/icons-material'
import { useRouter } from 'next/router'
import NavBar from '../components/navBar'
import { withPageAuthRequired } from '@auth0/nextjs-auth0/dist/frontend'
import { useUser } from '@auth0/nextjs-auth0';

export default withPageAuthRequired(function Post() {

    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return (
        <div className='flex text-[#5D5FEF] h-screen'>
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
                <div className='grid grid-cols-3 m-5 overflow-y-auto max-h-[740px] scrollbar-hide'>
                    <div className='flex-grow m-7 bg-[#FCDDEC] rounded-2xl pt-4 pb-4 relative'>
                        <div className='flex-grow space-y-3  m-3 pl-2 pr-2 '>
                            <p className='font-bold'>@{user.name}</p>
                            <div>
                                <Image className='rounded-2xl' src={'https://lh3.googleusercontent.com/KX53B7I4gJmdWcObfGAQrwdmjaOuxOiJMr9MVu4Z2u0ZxHbo1NKq6iYJkzlLl9upjfPHOjpG874_fIFgKzTo0w-NhJrZsltdQgKtvqHWJEnyqVeiouH_CgvZmjnNCF-L7SLDbeOk7aH0QZdWuESkXSC7gGrMEvV4gP_koJDdhZRm29qN3HxrYVCJb0NHaasP5KRt3jwqxmBvFxadYJZUPHXk_PWtnPR0KBhfpwwG9qzLtacN0WJWFYtKhF8coTBSP4a8KwrjNVEYs-ALEl5PNaSKjBbhOq-dqWya11Mta6FyqPTPGCOaRj_WDIkjQ0zHF8Zcb46e6W3a4gCRD7_WnnvboEp01JSwP8MEnEn1tg1GXxM4xVA6cJcLAYtTcqk2t6juA9Ty-98rB3Smv7EMZ79tunuoNDOnwFV7doBqpjPBHwlrManQjtKPVgHsKcuoPrDYujH1FU5DgXJTxOr2qQkbqaozkxpwzkhTFLV4JH6xjsNhhJ4lxep6B2T9aMJzvU3yxoPYG_C5Yh0E__dwTucwCcqg88_3LIz7Sos32wN1238WdS8hLfQRWCnq0SBITGDl0S0OPMv1LtHBiH7kdXrQzQYf03qjjHYk5VNIoSMw-K5xPW1qcrLzlijCn8jrw5K08nQ0TFOmBM3P46K15lPF4O4PrGNeVoWTQUHdW7i6QhCSGzlg3QZ6bELNKD3sCI8B6OlUdOvm7IZ2pr1xJnhurQ=w716-h412-no?authuser=0'} width={'500'} height={'300'} alt='' />
                            </div>
                            <div className='space-x-3 space-y-2 bg-[#8B65A9] text-white p-2 rounded-2xl'>
                                <p className='pl-3 pr-3'>Cringepost 1</p>
                                <button><p><FavoriteBorderOutlined /></p></button>
                                <button><p><CommentOutlined /></p></button>
                                <button><p><SendOutlined /></p></button>
                            </div>
                        </div>

                    </div>
                    <button className='fixed bottom-10 right-10 bg-[#FCDDEC] p-5 rounded-full'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg></button>
                </div>
            </div>
        </div>
    )
})
