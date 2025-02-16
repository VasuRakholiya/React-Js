import styles from "./Item.module.css"

const Item = ({ foodItem ,handle }) => {

  return (
    <li className={`${styles['style']} list-group-item`} ><span className={styles['Span']}>{foodItem}</span>
    <button className={`${styles.Button} btn btn-info`}
    
    onClick={handle}
    //child to parent communication using props in react
    >Buy</button>
    </li>
  )
}
export default Item;