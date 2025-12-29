import Link from "next/link"

const Services = () => {
  return (
    <div>
        <h1>
            Services Page
        </h1>
        <Link href="/">Home</Link> {' '} <Link href='/about'>About</Link>
    </div>
  )
}

export default Services