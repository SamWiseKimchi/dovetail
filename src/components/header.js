import * as React from "react"
import { ReactComponent as DovetailLogoColored } from "../images/dovetail-logo.svg"

const Header = React.memo(() => (
  <header
    style={{
      alignItems: "center",
      display: "flex",
      height: "124px",
      width: "100%",
    }}
  >
    <DovetailLogoColored style={{ marginLeft: "32px" }} />
  </header>
))

export default Header
