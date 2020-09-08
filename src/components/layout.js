import React from "react"
import PropTypes from "prop-types"
import Nav from "./navbar"
import Footer from "./footer"


const Layout = ({ children }) => {

  return (
    <>
    <div>
      <Nav />
      <main className="main-container"><div className="container">{children}</div></main>
      <Footer />
    </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
