import { useContext, useEffect, useState } from 'react';
import styles from './List.module.css';
import { useListsContext } from 'context/ListsContext';
import Button from 'components/Button';
import Items from 'components/Items';
import { EditContext } from 'context/EditContext';
import {
  MdOutlineDeleteForever,
  MdOutlineLibraryAdd,
  MdDone,
} from "react-icons/md";
import TextEntry from 'components/TextEntry';
import Title from 'components/Title';
import { useItemsContext } from 'context/ItemsContext';

const iconProps = {
  size: 20,
  color: '#ffffff'
}

export default function List() {
  const { editMode, setEditMode, inputRef } = useContext(EditContext);

  const { currentList, removeList, setListTitle } = useListsContext();
  const { addItem } = useItemsContext();

  const list = currentList();

  const [newTitle, setNewTitle] = useState("");
  const [newItem, setNewItem ] = useState("");

  useEffect(() => {
    if (list) setNewTitle(list.name);
  }, [list]);

  if (!list) {
    return null;
  }

  function handleNewTitle() {
    setListTitle(list.id, newTitle);
    setNewTitle(list.name);
    setEditMode("");
  }

  function handleNewName() {
    addItem(list.id, newItem);
    setNewItem("");
  }

  return (
    <div>
      <div className={styles.list}>
        {
          editMode !== list.id
            ?
            <div className={styles.list__container}>
              <Title id={list.id} onClick={() => setEditMode(list.id)}>
                {list.name}
              </Title>
              <Button onClick={() => removeList(list.id)}>
                <MdOutlineDeleteForever {...iconProps} />
              </Button>
            </div>
            :
            <div className={styles.list__container}>
              <input
                type='text'
                ref={inputRef}
                className={styles.list__title}
                value={newTitle}
                onChange={event => setNewTitle(event.target.value)}
              />
              <Button onClick={handleNewTitle}>
                <MdDone {...iconProps} />
              </Button>
            </div>
        }
        <div className={styles.list__addItem}>
          <TextEntry
            placeholder='Add new item'
            value={newItem}
            onChange={event => setNewItem(event.target.value)}
            onKeyDown={event => event.key === 'Enter' && handleNewName()}
          />
          <Button onClick={handleNewName}>
            <MdOutlineLibraryAdd {...iconProps} />
          </Button>
        </div>
      </div>
      <Items list={list} />
    </div>
  )
}