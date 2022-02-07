import { ChatOutlined, NotificationsOutlined, SearchOutlined, SettingsOutlined, FavoriteBorderOutlined, CommentOutlined, SendOutlined } from '@mui/icons-material'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { useUser } from '@auth0/nextjs-auth0';
import { route } from 'next/dist/server/router'
import NavBar from '../components/navBar'
import { withPageAuthRequired } from '@auth0/nextjs-auth0/dist/frontend'

export default withPageAuthRequired(function Home() {

  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className='flex text-[#5D5FEF] h-screen'>
      <NavBar />
      <select name="sort-by" className='absolute top-[140px] rounded right-[38px] bg-[#C4C4C4] bg-opacity-25 outline-none' id="sort-by">
        <option>SORT BY</option>
        <option value="1">DATE</option>
        <option value="2">POPULARITY</option>
      </select>
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
        <div className='overflow-y-auto max-h-[740px] scrollbar-hide'>
          <div className='flex-grow m-7 bg-[#FCDDEC] rounded-2xl pt-4 pb-4'>
            <div className='flex-grow space-y-2  m-3 pl-2 pr-2'>
              <p className='text-3xl font-bold'>POST TITLE</p>
              <p className='text-l'>dusahfudsvuifdhvi jfdovjop idfh vpoud ouxdnzc ouins[ouae cfnpsdouh cvpus vpuob zsoudhv pusdbd hvpoubz [vb [usoaDBHpfgvusd puofcvpsduv bpucbsvuoh [sABHEfihewpu fpusdbvg pysdbv usdb fiudsbf vpsdyibvpysef uedfjdsvc 9skvosdjgosdakfijsdjf psadjvgpdjsfdhf ijfijd ifhdafh aihf aipdf[pasijdf gydgba[uoasdfh[udabio</p>
              <div className='space-x-3'>
                <button><p><FavoriteBorderOutlined /></p></button>
                <button><p><CommentOutlined /></p></button>
                <button><p><SendOutlined /></p></button>
              </div>
            </div>
          </div>
          <div className='flex-grow m-7 bg-[#FCDDEC] rounded-2xl pt-4 pb-4'>
            <div className='flex-grow space-y-2  m-3 pl-2 pr-2'>
              <p className='text-3xl font-bold'>POST TITLE</p>
              <p className='text-l'>dusahfudsvuifdhvi jfdovjop idfh vpoud ouxdnzc ouins[ouae cfnpsdouh cvpus vpuob zsoudhv pusdbd hvpoubz [vb [usoaDBHpfgvusd puofcvpsduv bpucbsvuoh [sABHEfihewpu fpusdbvg pysdbv usdb fiudsbf vpsdyibvpysef uedfjdsvc 9skvosdjgosdakfijsdjf psadjvgpdjsfdhf ijfijd ifhdafh aihf aipdf[pasijdf gydgba[uoasdfh[udabio</p>
              <div className='space-x-3'>
                <button><p><FavoriteBorderOutlined /></p></button>
                <button><p><CommentOutlined /></p></button>
                <button><p><SendOutlined /></p></button>
              </div>
            </div>
          </div>
          <div className='flex-grow m-7 bg-[#FCDDEC] rounded-2xl pt-4 pb-4'>
            <div className='flex-grow space-y-2  m-3 pl-2 pr-2'>
              <p className='text-3xl font-bold'>POST TITLE</p>
              <p className='text-l'>dusahfudsvuifdhvi jfdovjop idfh vpoud ouxdnzc ouins[ouae cfnpsdouh cvpus vpuob zsoudhv pusdbd hvpoubz [vb [usoaDBHpfgvusd puofcvpsduv bpucbsvuoh [sABHEfihewpu fpusdbvg pysdbv usdb fiudsbf vpsdyibvpysef uedfjdsvc 9skvosdjgosdakfijsdjf psadjvgpdjsfdhf ijfijd ifhdafh aihf aipdf[pasijdf gydgba[uoasdfh[udabio</p>
              <div className='space-x-3'>
                <button><p><FavoriteBorderOutlined /></p></button>
                <button><p><CommentOutlined /></p></button>
                <button><p><SendOutlined /></p></button>
              </div>
            </div>
          </div>
          <div className='flex-grow m-7 bg-[#FCDDEC] rounded-2xl pt-4 pb-4'>
            <div className='flex-grow space-y-2  m-3 pl-2 pr-2'>
              <p className='text-3xl font-bold'>POST TITLE</p>
              <p className='text-l'>dusahfudsvuifdhvi jfdovjop idfh vpoud ouxdnzc ouins[ouae cfnpsdouh cvpus vpuob zsoudhv pusdbd hvpoubz [vb [usoaDBHpfgvusd puofcvpsduv bpucbsvuoh [sABHEfihewpu fpusdbvg pysdbv usdb fiudsbf vpsdyibvpysef uedfjdsvc 9skvosdjgosdakfijsdjf psadjvgpdjsfdhf ijfijd ifhdafh aihf aipdf[pasijdf gydgba[uoasdfh[udabio</p>
              <div className='space-x-3'>
                <button><p><FavoriteBorderOutlined /></p></button>
                <button><p><CommentOutlined /></p></button>
                <button><p><SendOutlined /></p></button>
              </div>
            </div>
          </div>
          <div className='flex-grow m-7 bg-[#FCDDEC] rounded-2xl pt-4 pb-4'>
            <div className='flex-grow space-y-2  m-3 pl-2 pr-2'>
              <p className='text-3xl font-bold'>POST TITLE</p>
              <p className='text-l'>dusahfudsvuifdhvi jfdovjop idfh vpoud ouxdnzc ouins[ouae cfnpsdouh cvpus vpuob zsoudhv pusdbd hvpoubz [vb [usoaDBHpfgvusd puofcvpsduv bpucbsvuoh [sABHEfihewpu fpusdbvg pysdbv usdb fiudsbf vpsdyibvpysef uedfjdsvc 9skvosdjgosdakfijsdjf psadjvgpdjsfdhf ijfijd ifhdafh aihf aipdf[pasijdf gydgba[uoasdfh[udabio</p>
              <div className='space-x-3'>
                <button><p><FavoriteBorderOutlined /></p></button>
                <button><p><CommentOutlined /></p></button>
                <button><p><SendOutlined /></p></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})
