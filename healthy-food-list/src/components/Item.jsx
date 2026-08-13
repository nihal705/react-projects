import styles from "./Item.module.css";

const Item = ( {foodItem, bought, handleBuyButtonClicked} ) => {

  return (
    <li className={`${styles["ng-item"]} list-group-item ${bought && 'active'} `}>
      {foodItem}
      <button className={`${styles.button} btn btn-info`} onClick= {handleBuyButtonClicked}>Buy</button>
    </li>
  );
}

export default Item;
