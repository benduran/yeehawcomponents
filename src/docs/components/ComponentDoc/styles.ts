import { css } from '@emotion/css';

import { colors } from '../../../styles';

export const styles = {
  componentDocRoot: css`
    height: 100%;
    overflow-y: auto;
    width: 100%;
    --webkit-overflow-scrolling: touch;

    & > h1 {
      margin-bottom: 2rem;
    }
  `,

  componentExampleRoot: css`
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    position: relative;

    &:after {
      background-color: ${colors.COLOR_GRAY};
      bottom: 0;
      content: '';
      display: block;
      height: 4px;
      left: 0;
      position: absolute;
      right: 0;
    }

    &:last-of-type {
      margin-bottom: 0;

      &:after {
        display: none;
      }
    }
  `,

  componentExampleName: css`
    margin-bottom: 0.5rem;
  `,

  componentExampleDescription: css`
    border-bottom: 1px solid var(--color-gray-light);
    margin-bottom: 1rem;
    padding-bottom: 1rem;
  `,

  componentExampleCode: css`
    border-bottom: 1px solid var(--color-gray-light);
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    margin-bottom: 1rem;
    padding-bottom: 1rem;

    & > div[role='button'] {
      align-items: center;
      background-color: var(--color-gray-xlight);
      display: flex;
      justify-content: center;
      padding: 0.25rem;

      & > div {
        align-items: center;
        display: flex;
        gap: 1rem;
      }

      &:hover {
        background-color: var(--color-gray-light);
        cursor: pointer;
      }
    }
  `,
};
