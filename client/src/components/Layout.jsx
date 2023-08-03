import Navbar from "./Navbar"

// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <div>{children}</div>
    </div>
  )
}

export default Layout