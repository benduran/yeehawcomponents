import { useEffect, useRef, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Prism as SyntaxHighlighter, SyntaxHighlighterProps } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { styles } from './styles';

export interface CodeSnippetProps extends Pick<SyntaxHighlighterProps, 'language'> {
  /**
   * If true, displays a copy button and allows a user
   * to copy the code snippet
   */
  allowCopy?: boolean;

  /**
   * Code snippet to highlight
   */
  snippet: string;
}

/**
 * Displays a code snippet and an optional copy button
 */
export function CodeSnippet({ allowCopy = false, snippet, ...rest }: CodeSnippetProps) {
  /** state */
  const [copied, setCopied] = useState(false);

  /** refs */
  const copyTimeoutRef = useRef<NodeJS.Timeout | null | void>(null);

  /** effects */
  useEffect(() => {
    if (!copied) return;

    if (copyTimeoutRef.current) {
      copyTimeoutRef.current = clearTimeout(copyTimeoutRef.current);
    }

    copyTimeoutRef.current = setTimeout(() => setCopied(false), 3000);
  }, [copied]);

  return (
    <div className={styles.root}>
      {allowCopy && (
        <CopyToClipboard onCopy={() => setCopied(true)} text={snippet}>
          <button className={styles.copyBtn} type='button'>
            {copied ? 'Copied!' : 'Copy Snippet'}
          </button>
        </CopyToClipboard>
      )}
      <SyntaxHighlighter {...rest} customStyle={{ fontSize: '12px' }} style={dracula}>
        {snippet}
      </SyntaxHighlighter>
    </div>
  );
}
