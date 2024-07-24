import styles from './myButton.module.css'

interface IMyButtonProps {
    name?: string
    type?: 'button' | 'submit' | 'reset'
    onClick?: () => void;
  }
  
  
  export default function MyButton({ type='button', onClick, name='default' }:IMyButtonProps) {
   console.log(styles);
   
   
    return (
      <button type={type} onClick={onClick} className={styles.myButton}>
        {name}
      </button>
    );
  }