import style from "./style.module.css";

export default function GridContainer(props) {
  return <div className={style.grid_container}>{props.children}</div>;
}
