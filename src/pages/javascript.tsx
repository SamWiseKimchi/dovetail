// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import Layout from "../components/layout"
import { type ContentInterface, content } from "../constants/content"
import GridItem from "../components/GridItem"
import Modal from "../components/Modal"
import * as style from "./style.module.css"

const JavascriptPage: React.FC = () => {
  const [modalContent, setModalContent] =
    React.useState<ContentInterface | null>(null)

  return (
    <Layout pageTitle="Javascript page">
      <div className={style.container}>
        <h1 className={style.title}>Latest news</h1>
        <div className={style.grid}>
          {content.map(c => {
            return <GridItem content={c} onClick={() => setModalContent(c)} />
          })}
        </div>
      </div>
      {modalContent && (
        <Modal content={modalContent} onClose={() => setModalContent(null)} />
      )}
    </Layout>
  )
}
export default JavascriptPage
