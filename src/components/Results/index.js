import Items from "components/Items";
import { useListsContext } from "context/ListsContext";
import styles from "./Results.module.css";
import Title from "components/Title";
import { useItemsContext } from "context/ItemsContext";

export default function Results() {
  const { setViewList } = useListsContext();
  const { filteredItems } = useItemsContext();

  const resultList = filteredItems();

  return (
    <div className={styles.results}>
      {
        resultList.filter(list => list.items.length > 0).map(list => {
          return (
            <div className={styles.results__container} key={list.id}>
              <Title onClick={() => { setViewList(list.id) }}>{list.name}</Title>
              <Items list={list} />
            </div>
          )
        })
      }
    </div>
  )
}