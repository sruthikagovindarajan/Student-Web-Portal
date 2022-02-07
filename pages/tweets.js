import Image from 'next/image'
import { ChatOutlined, NotificationsOutlined, SearchOutlined, SettingsOutlined, FavoriteBorderOutlined, CommentOutlined, SendOutlined, MoreVertOutlined } from '@mui/icons-material'
import { useRouter } from 'next/router'
import NavBar from '../components/navBar'
import { withPageAuthRequired } from '@auth0/nextjs-auth0/dist/frontend'
import { useUser } from '@auth0/nextjs-auth0';

export default withPageAuthRequired(function Tweets() {

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
                <div className='flex-col m-5 overflow-y-auto max-h-[740px] scrollbar-hide'>
                    <div className='flex-grow m-7 bg-[#FCDDEC] rounded-2xl pt-4 pb-4 relative'>
                        <div className='flex-grow space-y-3  m-3 pl-2 pr-2 '>
                            <p className='font-bold text-[#5D5FEF]'>@{user.name}</p>
                            <p className='text-l font-bold text-[#13149A] absolute bottom-0 right-0 p-4'>3:24</p>
                            <p className='text-l font-bold text-[#13149A]'>dusahfudsvuifdhvi jfdovjop idfh vpoud ouxdnzc ouins[ouae cfnpsdouh cvpus vpuob zsoudhv pusdbd hvpoubz [vb [usoaDBHpfgvusd puofcvpsduv bpucbsvuoh [sABHEfihewpu fpusdbvg pysdbv usdb fiudsbf vpsdyibvpysef uedfjdsvc 9skvosdjgosdakfijsdjf psadjvgpdjsfdhf ijfijd ifhdafh aihf aipdf[pasijdf gydgba[uoasdfh[udabio</p>
                        </div>
                    </div>
                    <div className='flex-grow m-7 bg-[#FCDDEC] rounded-2xl pt-4 pb-4 relative'>
                        <div className='flex-grow space-y-3  m-3 pl-2 pr-2 '>
                            <p className='font-bold text-[#5D5FEF]'>@{user.name}</p>
                            <p className='text-l font-bold text-[#13149A] absolute bottom-0 right-0 p-4'>3:24</p>
                            <p className='text-l font-bold text-[#13149A]'>dusahfudsvuifdhvi jfdovjop idfh vpoud ouxdnzc ouins[ouae cfnpsdouh cvpus vpuob zsoudhv pusdbd hvpoubz [vb [usoaDBHpfgvusd puofcvpsduv bpucbsvuoh [sABHEfihewpu fpusdbvg pysdbv usdb fiudsbf vpsdyibvpysef uedfjdsvc 9skvosdjgosdakfijsdjf psadjvgpdjsfdhf ijfijd ifhdafh aihf aipdf[pasijdf gydgba[uoasdfh[udabio</p>
                        </div>
                    </div>
                    <div className='flex-grow m-7 bg-[#FCDDEC] rounded-2xl pt-4 pb-4 relative'>
                        <div className='flex-grow space-y-3  m-3 pl-2 pr-2 '>
                            <p className='font-bold text-[#5D5FEF]'>@{user.name}</p>
                            <p className='text-l font-bold text-[#13149A] absolute bottom-0 right-0 p-4'>3:24</p>
                            <p className='text-l font-bold text-[#13149A]'>dusahfudsvuifdhvi jfdovjop idfh vpoud ouxdnzc ouins[ouae cfnpsdouh cvpus vpuob zsoudhv pusdbd hvpoubz [vb [usoaDBHpfgvusd puofcvpsduv bpucbsvuoh [sABHEfihewpu fpusdbvg pysdbv usdb fiudsbf vpsdyibvpysef uedfjdsvc 9skvosdjgosdakfijsdjf psadjvgpdjsfdhf ijfijd ifhdafh aihf aipdf[pasijdf gydgba[uoasdfh[udabio</p>
                        </div>
                    </div>
                    <div className='flex-grow m-7 bg-[#FCDDEC] rounded-2xl pt-4 pb-4 relative'>
                        <div className='flex-grow space-y-3  m-3 pl-2 pr-2 '>
                            <p className='font-bold text-[#5D5FEF]'>@{user.name}</p>
                            <p className='text-l font-bold text-[#13149A] absolute bottom-0 right-0 p-4'>3:24</p>
                            <p className='text-l font-bold text-[#13149A]'>dusahfudsvuifdhvi jfdovjop idfh vpoud ouxdnzc ouins[ouae cfnpsdouh cvpus vpuob zsoudhv pusdbd hvpoubz [vb [usoaDBHpfgvusd puofcvpsduv bpucbsvuoh [sABHEfihewpu fpusdbvg pysdbv usdb fiudsbf vpsdyibvpysef uedfjdsvc 9skvosdjgosdakfijsdjf psadjvgpdjsfdhf ijfijd ifhdafh aihf aipdf[pasijdf gydgba[uoasdfh[udabio</p>
                        </div>
                    </div>
                    <div className='flex-grow m-7 bg-[#FCDDEC] rounded-2xl pt-4 pb-4 relative'>
                        <div className='flex-grow space-y-3  m-3 pl-2 pr-2 '>
                            <p className='font-bold text-[#5D5FEF]'>@{user.name}</p>
                            <p className='text-l font-bold text-[#13149A] absolute bottom-0 right-0 p-4'>3:24</p>
                            <p className='text-l font-bold text-[#13149A]'>dusahfudsvuifdhvi jfdovjop idfh vpoud ouxdnzc ouins[ouae cfnpsdouh cvpus vpuob zsoudhv pusdbd hvpoubz [vb [usoaDBHpfgvusd puofcvpsduv bpucbsvuoh [sABHEfihewpu fpusdbvg pysdbv usdb fiudsbf vpsdyibvpysef uedfjdsvc 9skvosdjgosdakfijsdjf psadjvgpdjsfdhf ijfijd ifhdafh aihf aipdf[pasijdf gydgba[uoasdfh[udabio</p>
                        </div>
                    </div>
                    <div className='flex-grow m-7 bg-[#FCDDEC] rounded-2xl pt-4 pb-4 relative'>
                        <div className='flex-grow space-y-3  m-3 pl-2 pr-2 '>
                            <p className='font-bold text-[#5D5FEF]'>@{user.name}</p>
                            <p className='text-l font-bold text-[#13149A] absolute bottom-0 right-0 p-4'>3:24</p>
                            <p className='text-l font-bold text-[#13149A]'>dusahfudsvuifdhvi jfdovjop idfh vpoud ouxdnzc ouins[ouae cfnpsdouh cvpus vpuob zsoudhv pusdbd hvpoubz [vb [usoaDBHpfgvusd puofcvpsduv bpucbsvuoh [sABHEfihewpu fpusdbvg pysdbv usdb fiudsbf vpsdyibvpysef uedfjdsvc 9skvosdjgosdakfijsdjf psadjvgpdjsfdhf ijfijd ifhdafh aihf aipdf[pasijdf gydgba[uoasdfh[udabio</p>
                        </div>
                    </div>
                    <div className='flex-grow m-7 bg-[#FCDDEC] rounded-2xl pt-4 pb-4 relative'>
                        <div className='flex-grow space-y-3  m-3 pl-2 pr-2 '>
                            <p className='font-bold text-[#5D5FEF]'>@{user.name}</p>
                            <p className='text-l font-bold text-[#13149A] absolute bottom-0 right-0 p-4'>3:24</p>
                            <p className='text-l font-bold text-[#13149A]'>dusahfudsvuifdhvi jfdovjop idfh vpoud ouxdnzc ouins[ouae cfnpsdouh cvpus vpuob zsoudhv pusdbd hvpoubz [vb [usoaDBHpfgvusd puofcvpsduv bpucbsvuoh [sABHEfihewpu fpusdbvg pysdbv usdb fiudsbf vpsdyibvpysef uedfjdsvc 9skvosdjgosdakfijsdjf psadjvgpdjsfdhf ijfijd ifhdafh aihf aipdf[pasijdf gydgba[uoasdfh[udabio</p>
                        </div>
                    </div>
                    <div className='flex-grow m-7 bg-[#FCDDEC] rounded-2xl pt-4 pb-4 relative'>
                        <div className='flex-grow space-y-3  m-3 pl-2 pr-2 '>
                            <p className='font-bold text-[#5D5FEF]'>@{user.name}</p>
                            <p className='text-l font-bold text-[#13149A] absolute bottom-0 right-0 p-4'>3:24</p>
                            <p className='text-l font-bold text-[#13149A]'>dusahfudsvuifdhvi jfdovjop idfh vpoud ouxdnzc ouins[ouae cfnpsdouh cvpus vpuob zsoudhv pusdbd hvpoubz [vb [usoaDBHpfgvusd puofcvpsduv bpucbsvuoh [sABHEfihewpu fpusdbvg pysdbv usdb fiudsbf vpsdyibvpysef uedfjdsvc 9skvosdjgosdakfijsdjf psadjvgpdjsfdhf ijfijd ifhdafh aihf aipdf[pasijdf gydgba[uoasdfh[udabio</p>
                        </div>
                    </div>
                    <div className='flex-grow m-7 bg-[#FCDDEC] rounded-2xl pt-4 pb-4 relative'>
                        <div className='flex-grow space-y-3  m-3 pl-2 pr-2 '>
                            <p className='font-bold text-[#5D5FEF]'>@{user.name}</p>
                            <p className='text-l font-bold text-[#13149A] absolute bottom-0 right-0 p-4'>3:24</p>
                            <p className='text-l font-bold text-[#13149A]'>dusahfudsvuifdhvi jfdovjop idfh vpoud ouxdnzc ouins[ouae cfnpsdouh cvpus vpuob zsoudhv pusdbd hvpoubz [vb [usoaDBHpfgvusd puofcvpsduv bpucbsvuoh [sABHEfihewpu fpusdbvg pysdbv usdb fiudsbf vpsdyibvpysef uedfjdsvc 9skvosdjgosdakfijsdjf psadjvgpdjsfdhf ijfijd ifhdafh aihf aipdf[pasijdf gydgba[uoasdfh[udabio</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})
