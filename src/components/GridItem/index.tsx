import * as React from "react"
import { ContentInterface } from "../../constants/content"
import Image from "../Image"
import Title from "../Title"
import * as style from "./style.module.css"

type GridItemProps = {
  content: ContentInterface
  onClick: () => void
}

export default function GridItem(props: GridItemProps) {
  return (
    <div className={style.item} onClick={props.onClick}>
      <Image imageSrc={props.content.imageSrc} />
      <Title
        title={props.content.title}
        publishedAt={props.content.publishedAt}
        category={props.content.category}
      />
    </div>
  )
}
