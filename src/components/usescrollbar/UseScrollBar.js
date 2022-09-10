import styles from './UseScrollBar.module.css';
import { Link as LinkRouter } from 'react-router-dom';

const UseScrollBar = () => {
  return (
    <div className={styles.container}>
      <h1>UseScrollBar</h1>

      <LinkRouter to="/">Home</LinkRouter>

    </div>
  )
}

export default UseScrollBar
