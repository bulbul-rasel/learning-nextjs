import Link from "next/link"
import { useRouter } from 'next/router';
export default function Home() {
  const router = useRouter();

  const handleClick = ()=>{
    console.log('Successfully Placing order');
    router.push('/product');
  }
  return (
    <div>

    <h1>Hello world</h1>

    <Link href='/blog'>
    <a>Blog</a>
    </Link>
    <Link href='/product'>
    <a>Products</a>
    </Link>

    <button onClick= {handleClick}> Place Order</button>
    </div>
  )
}
