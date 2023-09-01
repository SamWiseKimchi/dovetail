import * as React from "react"
import Column from "../Column"
import Row from "../Row"
import * as style from "./style.module.css"

type TitleProps = {
  title: string
  publishedAt: string
  category: string
}

export default function Title(props: TitleProps) {
  return (
    <Column>
      <h2 className={style.title}>{props.title}</h2>
      <Row>
        <span className={style.detail}>{props.publishedAt}</span>
        <span className={style.detail}>{props.category}</span>
      </Row>
    </Column>
  )
}
