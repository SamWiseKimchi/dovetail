import * as React from "react"
import { ContentInterface } from "../../constants/content"
import Title from "../Title"
import Image from "../Image"
import * as style from "./style.module.css"

type ModalProps = {
  content: ContentInterface
  onClose: () => void
}

export default function Modal(props: ModalProps) {
  return (
    <>
      <div className={style.background} onClick={props.onClose}>
        <div
          className={style.modal}
          onClick={e => {
            e.stopPropagation()
          }}
        >
          <Title
            title={props.content.title}
            publishedAt={props.content.publishedAt}
            category={props.content.category}
          />
          <Image imageSrc={props.content.imageSrc} />
          <span>{props.content.description}</span>
        </div>
      </div>
    </>
  )
}
