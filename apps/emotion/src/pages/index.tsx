import { css } from '@emotion/react';

export default function Page() {
  return <h1 css={styles.title}>Hello World!</h1>;
}

const styles = {
  title: css`
    font-weight: bold;
    font-size: 20px;
    font-style: italic;
  `,
};
