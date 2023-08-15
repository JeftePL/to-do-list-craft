import Button from "components/Button";
import Header from "components/Header";
import { ListsContext, useListsContext } from "context/ListsContext";
import { useContext } from "react";
import styles from "./Aside.module.css";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import TextEntry from "components/TextEntry";
import { ItemsContext, useItemsContext } from "context/ItemsContext";

const iconProps = {
  size: 30,
  color: '#ffffff'
}

export default function Aside() {
  const { lists } = useContext(ListsContext);
  const { searchItem, setSearchItem } = useContext(ItemsContext);

  const { itemsDone } = useItemsContext();
  const { addList, setViewList } = useListsContext();

  const [menu, setMenu] = useState(false);

  function handleViewItem(id) {
    setViewList(id);
    setSearchItem('');
  }

  return (
    <aside className={styles.aside}>
      <div className={styles.aside__mobile}>
        <RxHamburgerMenu
          className={styles["aside__menu--closed"]}
          onClick={() => setMenu(true)}
          {...iconProps}
        />
        <Header />
      </div>
      <div className={`${styles.aside__container} ${menu ? styles['aside__menu--active'] : ''}`}>
        <RxCross1
          className={`${styles.aside__menu} ${menu ? styles['aside__menu--opened'] : ''}`}
          onClick={() => setMenu(false)}
          {...iconProps}
        />
        <Header />
        <TextEntry
          placeholder="Search"
          value={searchItem}
          onChange={event => setSearchItem(event.target.value)}
        />
        <Button onClick={addList}>+ New List</Button>
        {
          lists.map(list =>
            <Button key={list.id} onClick={() => handleViewItem(list.id)} active={list.view}>
              {list.name}
              <span className={`${styles.aside__listCount} ${itemsDone(list.items) > 0 ? styles['aside__listCount--active'] : ''}`}>
                {itemsDone(list.items)}
              </span>
            </Button>)
        }
      </div>
    </aside>
  )
}