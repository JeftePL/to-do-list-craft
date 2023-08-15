import { useContext, useEffect, useState } from 'react';
import styles from './Item.module.css';
import Button from 'components/Button';
import { useItemsContext } from 'context/ItemsContext';
import { EditContext } from 'context/EditContext';
import {
  MdRadioButtonUnchecked,
  MdCheckCircle,
  MdOutlineDeleteForever,
  MdDone,
} from "react-icons/md";

const iconProps = {
  size: 20,
  color: '#ffffff'
}

export default function Items({ list }) {
  const { editMode, setEditMode, inputRef } = useContext(EditContext);
  const { setItemName, setStatusItem, deleteItem, } = useItemsContext();
  const [editedName, setEditedName] = useState("");

  useEffect(() => {
    if (editMode) {
      const editedItem = list.items.find(item => item.id === editMode);
      if (editedItem) {
        setEditedName(editedItem.name);
      }
    }
  }, [editMode, list]);

  function handleNewName(itemId) {
    setItemName(list.id, itemId, editedName);
    setEditMode("");
  }

  return (
    <div className={styles.items}>
      {list.items.map(item => (
        <div key={item.id} className={styles.items__container}>
          {
            item.done ?
              <MdCheckCircle
                className={styles.items__checkbox}
                onClick={() => setStatusItem(list.id, item.id)}
                size={20}
                color="#00a2ed"
              />
              :
              <MdRadioButtonUnchecked
                className={styles.items__checkbox}
                onClick={() => setStatusItem(list.id, item.id)}
                {...iconProps}
              />
          }
          {
            editMode !== item.id
              ?
                <div key={item.id} className={styles.items__line}>
                  <p className={`${styles.items__text} ${item.done ? styles['items__text--done'] : ""}`}
                    onClick={() => setEditMode(item.id)}>
                    {item.name}
                  </p>
                  <Button onClick={() => deleteItem(list.id, item.id)}>
                    <MdOutlineDeleteForever {...iconProps} />
                  </Button>
                </div>
              :
                <div key={item.id} className={styles.items__line}>
                  <input
                    className={`${styles.items__text} ${item.done ? styles['items__text--done'] : ""}`}
                    ref={inputRef}
                    id={item.id}
                    key={item.id}
                    type='text'
                    value={editedName}
                    onChange={event => setEditedName(event.target.value)}
                  />
                  <Button onClick={() => handleNewName(item.id)}>
                    <MdDone {...iconProps} />
                  </Button>
                </div>
          }
        </div>
      ))}
    </div>
  )
}