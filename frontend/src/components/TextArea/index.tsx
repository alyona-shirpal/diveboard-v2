import React, { FC } from 'react';
import styles from '../Input/CommonInput/styles.module.scss';
import stylesTextArea from './styles.module.scss';

type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  error?: string;
  setError?: React.Dispatch<React.SetStateAction<string>>;
  disabled?: boolean
  height?: number;
  width?: number
  placeholder?: string;
};

export const TextArea: FC<Props> = ({
  value,
  setValue,
  error,
  setError,
  placeholder,
  height,
  width,
  disabled,
}) => {
  const getTextAreaStyle = (errorValue: string) => {
    if (errorValue) {
      return ` ${styles.error} ${stylesTextArea.textArea}`;
    }
    return stylesTextArea.textArea;
  };

  const textAreaStyle = {
    padding: '16px 16px 16px 16px',
    height: `${height}px`,
    width: `${width}px`,
  };

  return (
    <>
      <textarea
        style={textAreaStyle}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          if (setError) {
            setError('');
          }
        }}
        className={getTextAreaStyle(error)}
        placeholder={placeholder}
        disabled={disabled}
      />
      {error && <span className={styles.errorText}>{error}</span>}
    </>

  );
};
