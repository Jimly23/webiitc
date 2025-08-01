import DashboardCard from '@/components/atoms/DashboardCard'
import DashboardUserTemplate from '@/components/pagetemplate/DashboardUser'
import Link from 'next/link'
import React from 'react'
import { BiCalendar, BiHomeAlt, BiMap } from 'react-icons/bi'
import { BsClock, BsFillCalendarDateFill } from 'react-icons/bs'
import { CgLock } from 'react-icons/cg'
import { MdArrowForwardIos } from 'react-icons/md'

const Seminar = () => {
  return (
    <DashboardUserTemplate>
      <DashboardCard>
        <ul className="flex items-center gap-2">
          <Link href={"/"}>
            <BiHomeAlt className="text-gray-400" />
          </Link>
          <p>
            <MdArrowForwardIos className="text-xs text-gray-400" />
          </p>
          <p className="text-blue-600 text-sm">Seminar</p>
        </ul>
        <div className="flex justify-between space-y-2 lg:space-y-0 items-center mt-4 lg:flex-row flex-col">
          <h1 className="text-2xl font-semibold ">Seminar Yang Diikuti</h1>
        </div>
        <div className='w-full h-[400px] mt-5 rounded-lg overflow-hidden'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-pfvLENRoMveRxEr3kKjA_kJebQ862JqGfw&s" alt=""className='w-full h-full object-cover' />
        </div>
        <div className='md:grid grid-cols-3 gap-x-2 mt-5'>
          <div className='col-span-2'>
            <h5 className='text-2xl font-medium mb-3'>Investasi Skill dan Pengembangan Karier di Dunia Teknologi</h5>
            <div className='md:flex items-center gap-x-2'><BiMap/> <p className='text-normal'>Aula Gedung Fakultas Bisnis dan Ilmu Sosial, Universitas Amikom Purwokerto</p></div>
            <div className='md:flex items-center gap-x-2'><BiCalendar /> <p className='text-normal'>Sabtu, 27 September 2025</p></div>
            <div className='md:flex items-center gap-x-2'><BsClock /> <p className='text-normal'>08.00 - 12.00</p></div>

          </div>
          <div className='mt-5 md:mt-0'>
            <div className='grid grid-cols-2'>
              <div>
                <p className='text-sm'>Harga</p>
                <h5 className='text-2xl font-bold'>Rp15.000</h5>
              </div>
              <button className='w-full py-2 bg-brown text-white rounded-md mt-3'>Beli Tiket</button>
            </div>
          </div>
        </div>
      </DashboardCard>
    </DashboardUserTemplate>
  )
}

export default Seminar