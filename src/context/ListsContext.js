import { createContext, useContext, useEffect, useState } from "react";
import fetchLists from "services/lists";
import { v4 as uuid } from "uuid";

export const ListsContext = createContext();
ListsContext.displayName = "Lists";

export default function ListsProvider({ children }) {

  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetchLists()
    .then(data => {
      setLists(data);
    })
    .catch(error => {
      console.error('Error:', error);
    })
  }, []);

  return (
    <ListsContext.Provider value={{ lists, setLists }}>
      {children}
    </ListsContext.Provider>
  )
};

export function useListsContext() {
  const { lists, setLists } = useContext(ListsContext);
  const regex = /\S/;

  function currentList() {
    return lists.find(list => list.view);
  }

  function setViewList(id) {
    setLists(previousLists => previousLists.map(list => {
      if (list.id === id) {
        return {
          ...list,
          view: true
        }
      }
      return {
        ...list,
        view: false
      }
    }));
  }

  function addList() {
    const newList = {
      id: uuid(),
      name: "Untitled",
      items: [],
      view: false
    }
    setLists(previousLists => [...previousLists, newList]);
    setViewList(newList.id);
  }

  function removeList(id) {
    const index = lists.findIndex(list => list.id === id);

    if (index !== -1) {
      const prevIndex = index - 1;
      const nextIndex = index + 1;
      if (prevIndex >= 0) {
        setViewList(lists[prevIndex].id);
      } else if (nextIndex < lists.length) {
        setViewList(lists[nextIndex].id);
      }
      setLists(previousLists => previousLists.filter(list => list.id !== id));
    }
  }

  function setListTitle(id, newTitle) {
    setLists(previousLists => previousLists.map(list => {
      if (list.id === id && newTitle && regex.test(newTitle)) {
        return {
          ...list,
          name: newTitle
        }
      }
      return list;
    }));
  }

  return {
    currentList,
    setViewList,
    addList,
    removeList,
    setListTitle
  }
}