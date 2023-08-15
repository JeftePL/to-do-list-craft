import styles from './Viewer.module.css';
import { useContext } from 'react';
import List from 'components/List';
import Results from 'components/Results';
import { ItemsContext } from 'context/ItemsContext';

export default function Viewer() {
  const { searchItem } = useContext(ItemsContext);

  return (
    <div className={styles.viewer}>
      {
        !searchItem
          ?
          <List />
          :
          <Results />
      }
    </div>
  )
}