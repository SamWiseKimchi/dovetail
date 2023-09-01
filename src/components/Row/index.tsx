import * as React from "react"
import * as style from "./style.module.css"

type RowProps = {}

export default function Row(props: React.PropsWithChildren<RowProps>) {
  return <div className={style.row}>{props.children}</div>
}
