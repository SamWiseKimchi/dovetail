import * as React from "react"
import Header from "./header"
import "./layout.css"

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Header siteTitle={pageTitle ?? `Page Title`} />
      <div style={{ display: "block", border: "2px solid blue" }}>
        <main>{children}</main>
      </div>
      {/* Page footer goes here - not included in challenge*/}
    </>
  )
}

export default Layout
