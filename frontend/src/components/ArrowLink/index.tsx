import React, { FC } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

type Props = {
  text: string;
  color: string;
  link: string;
};

export const ArrowLink: FC<Props> = ({ text, link, color }) => (
  <Link href={link}>
    <a>
      <span className={styles.text} style={{ color }}>
        {text}
      </span>
      <svg
        width="24"
        height="8"
        viewBox="0 0 24 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.3536 4.35355C23.5488 4.15829 23.5488 3.84171 23.3536 3.64645L20.1716 0.464466C19.9763 0.269204 19.6597 0.269204 19.4645 0.464466C19.2692 0.659728 19.2692 0.976311 19.4645 1.17157L22.2929 4L19.4645 6.82843C19.2692 7.02369 19.2692 7.34027 19.4645 7.53553C19.6597 7.7308 19.9763 7.7308 20.1716 7.53553L23.3536 4.35355ZM0 4.5H23V3.5H0V4.5Z"
          fill={color}
        />
      </svg>
    </a>
  </Link>
);
