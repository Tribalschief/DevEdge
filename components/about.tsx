import Image from 'next/image'
import about from '@/public/about.jpg'

export const AboutHero = () => {
  return (
    <>
    <Image src={about} alt ="service"   width={500}
        height={300}
        style={{ width: '100%', height: '200%' }}
      />
      <div className="absolute inset-0 lg:top-[160px] text-gray-50">
            <div className='flex flex-col justify-center items-center'>
            <h1 className=' text-7xl  font-bold'>
            <h1>About DevEdgeConsulting</h1>
            </h1>
            <h2 className='text-2xl text-center mt-10 font-semibold'>
            DevEdge Consulting works with organizations across Pakistan, <br/>
            UAE, KSA and beyond to help them achieve operational excellence, <br/>
             manage risks, and embrace digital transformation with confidence. <br/>
            </h2>
            </div>
        </div>
        </>
  )
}
