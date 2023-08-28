import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const pageLinks = [
  { text: "JavaScript challenge", url: "javascript",}, // Edit src/pages/javascript.js if you wish to do this challenge in javascript
  { text: "TypeScript challenge", url: "typescript" }, // Edit src/pages/typescript.tsx if you wish to do this challenge in typescript
]

const IndexPage = () => (
  <Layout>
    <div>
      <p>
        <b>links to pages:</b>{" "}
        {pageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== pageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
      </p>
    </div>
  </Layout>
)

export default IndexPage
