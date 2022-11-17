import Link from 'next/link'
import Layout from '../components/Layout'
import Cliente from './Cliente'
const IndexPage = () => (
<Layout title="Home | Next.js + TypeScript Example">
    <div className='text-neutral-500'>hello </div>


  
   <div className='bg-black border-r-emerald-500 text-red-700'> <Link href="/Cliente">Cliente</Link>
    </div>
   
   
  </Layout>
  )


export default IndexPage
