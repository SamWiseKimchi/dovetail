import * as React from "react"
import * as style from "./style.module.css"

type ColumnProps = {}

export default function Column(props: React.PropsWithChildren<ColumnProps>) {
  return <div className={style.column}>{props.children}</div>
}
