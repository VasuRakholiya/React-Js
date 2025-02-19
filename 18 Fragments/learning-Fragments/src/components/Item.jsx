import styles from "./Item.module.css"

const Item = ({ foodItem, handle, bought }) => {

  return (
    <li className={`${styles['style']} list-group-item ${bought ? 'active' : ''}`} ><span className={styles['Span']}>{foodItem}</span>
    <button className={`${styles.Button} btn btn-info`}
    
    onClick={handle}
    //child to parent communication using props in react
    >Buy</button>
    </li>
  )
}
export default Item;