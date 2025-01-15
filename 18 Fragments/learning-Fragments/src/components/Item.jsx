import styles from "./Item.module.css"

const Item = ({foodItem}) => {
  return <li className={`${styles['style']} list-group-item`} ><span className={styles['Span']}>{foodItem}</span></li>;
}
export default Item;