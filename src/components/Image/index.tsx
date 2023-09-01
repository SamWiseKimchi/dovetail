import * as React from "react"
import * as style from "./style.module.css"

type ImageProps = {
  imageSrc: string
}

export default function Image(props: ImageProps) {
  return <img className={style.image} src={props.imageSrc} />
}
