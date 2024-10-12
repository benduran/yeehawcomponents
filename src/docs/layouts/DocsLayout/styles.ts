import { css } from '@emotion/css';

export const styles = {
  docsLayout: css`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;

    & > article {
      padding: 1rem;
    }
  `,

  docsContent: css`
    display: grid;
    flex-grow: 1;
    grid-template-columns: max-content 1fr;
    gap: 1rem;

    & > article {
      padding: 1rem;
    }
  `,
};
