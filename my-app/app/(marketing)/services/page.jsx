import Link from "next/link"

const Services = () => {
  return (
    <div>
        <h1>
            Services Page
        </h1>
        <p>
        <Link href="/services/web-services">web services</Link>
        </p>
        <p> <Link href='/services/seo'>seo service</Link> </p>
    </div>
  )
}

export default Services