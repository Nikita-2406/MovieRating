import { FC } from "react";
import { Star } from "../Star/Star";

interface IStarsProps {
  count: number
}

export const Stars:FC<IStarsProps> = (props) => {
  const count = props.count
  let view = []
  if (count >= 1 && count <= 5){
  for (let i = 0; i < count; i++) {
    view.push(<Star />)
  }
  }
  return(view)
}