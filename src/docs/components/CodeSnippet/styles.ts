import { css } from '@emotion/css';

export const styles = {
  copyBtn: css`
    background-color: var(--color-primary);
    border: none;
    color: var(--color-text-white);
    font-size: 0.8rem;
    padding: 0.5rem;
    position: absolute;
    right: 1rem;
    top: 1.5rem;
    width: 7rem;
    z-index: 1;

    &:hover {
      background-color: var(--color-primary-hover);
      cursor: pointer;
    }
  `,
  root: css`
    position: relative;
  `,
};
