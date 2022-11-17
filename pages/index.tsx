import Link from 'next/link'
import Layout from '../components/Layout'
import Cliente from './Cliente'
const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <div className='text-cyan-300'>hello </div>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/Cliente">Cliente</Link>
    </p>
  </Layout>
)

export default IndexPage
