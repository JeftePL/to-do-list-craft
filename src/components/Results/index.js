import Items from "components/Items";
import { useListsContext } from "context/ListsContext";
import styles from "./Results.module.css";
import Title from "components/Title";
import { ItemsContext, useItemsContext } from "context/ItemsContext";
import { useContext } from "react";

export default function Results() {
  const { setViewList } = useListsContext();
  const { filteredItems } = useItemsContext();
  const { setSearchItem } = useContext(ItemsContext);

  const resultList = filteredItems();

  function navigateToList(id) {
    setViewList(id);
    setSearchItem('');
  }

  return (
    <div className={styles.results}>
      {
        resultList.filter(list => list.items.length > 0).map(list => {
          return (
            <div className={styles.results__container} key={list.id}>
              <Title onClick={() => { navigateToList(list.id) }}>{list.name}</Title>
              <Items list={list} />
            </div>
          )
        })
      }
    </div>
  )
}