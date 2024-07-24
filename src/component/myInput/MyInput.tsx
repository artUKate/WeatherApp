import styles from "./myInput.module.css";

interface IInputProps {
  label?: string;
  name?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function MyInput({ 
  label = 'default', 
  name='input', 
  type='text', 
  placeholder='default',
  value,
  onChange
}: IInputProps) {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{label}</label>
      <input 
        type={type} 
        name={name} 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
}