import Link from "next/link"

const Navbar = () => {
  return (
    <div className="container mx-auto">
        <Link href="/myaccount/accountdetails">
            MY ACCOUNT
        </Link>
    </div>
  )
}
export default Navbar