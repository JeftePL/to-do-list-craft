import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { ListsContext } from "./ListsContext";

export const ItemsContext = createContext();
ItemsContext.displayName = "Items";

export default function ItemsProvider({ children }) {
  const [searchItem, setSearchItem] = useState("");

  return (
    <ItemsContext.Provider value={{ searchItem, setSearchItem }}>
      {children}
    </ItemsContext.Provider>
  )
}

export function useItemsContext() {
  const { lists, setLists } = useContext(ListsContext);
  const { searchItem } = useContext(ItemsContext);
  const regex = /\S/;

  function addItem(id, newItem) {
    if (newItem && regex.test(newItem)) {
      setLists(previousLists => previousLists.map(list => {
        if (list.id === id) {
          return {
            ...list,
            items: [...list.items, { id: uuid(), name: newItem, done: false }]
          }
        }
        return list;
      }));
    }
  }

  function deleteItem(listId, itemId) {
    setLists(previousLists => previousLists.map(list => {
      if (list.id === listId) {
        return {
          ...list,
          items: list.items.filter(item => item.id !== itemId)
        }
      }
      return list;
    }));
  }

  function setItemName(listId, itemId, newName) {
    setLists(previousLists => previousLists.map(list => {
      if (list.id === listId && regex.test(newName)) {
        return {
          ...list,
          items: list.items.map(item => {
            if (item.id === itemId) {
              return {
                ...item,
                name: newName
              }
            }
            return item;
          })
        }
      }
      return list;
    }))
  }

  function setStatusItem(listId, itemId) {
    setLists(previousLists => previousLists.map(list => {
      if (list.id === listId) {
        return {
          ...list,
          items: list.items.map(item => {
            if (item.id === itemId) {
              return {
                ...item,
                done: !item.done
              }
            }
            return item;
          })
        }
      }
      return list;
    }));
  }

  function itemsDone(list) {
    const sumTotal = list.reduce((total, item) => total + !item.done, 0);
    return sumTotal;
  }

  function filteredItems() {
    const filteredList = lists.map(list => {
      return {
        ...list, items: list.items.filter(item =>
          item.name.toLowerCase().includes(searchItem.toLowerCase())
        )
      };
    });
    return filteredList;
  }

  return {
    addItem,
    deleteItem,
    setItemName,
    setStatusItem,
    itemsDone,
    filteredItems
  }
}