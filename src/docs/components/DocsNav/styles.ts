import { css } from '@emotion/css';

export const styles = {
  docsNav: css`
    background-color: var(--color-primary);
    color: var(--color-text-white);
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    & > header {
      flex-shrink: 0;
      margin-bottom: 1rem;
      padding: 0.5rem;
    }
  `,

  links: css`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-height: 0;
    overflow-y: auto;
    --webkit-overflow-scrolling: touch;

    & a {
      padding: 0.5rem;
      text-decoration: none;

      &:hover {
        background-color: var(--color-primary-hover);
      }
    }
  `,

  nestedLinks: css`
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    & a {
      padding-left: 1.5rem;
    }
  `,
};
