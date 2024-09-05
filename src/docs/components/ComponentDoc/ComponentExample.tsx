import { PropsWithChildren, useState } from 'react';
import { IoChevronDownCircle, IoChevronUpCircle } from 'react-icons/io5';

import { CodeSnippet } from '../CodeSnippet';
import classes from './componentdoc.module.css';

export interface ComponentExampleProps extends PropsWithChildren {
  /**
   * Example code for a user to view and / or copy
   */
  code: string;

  /**
   * Detailed description about the example
   */
  description: React.ReactNode;

  /**
   * Human-friendly name of the example
   */
  name: string;
}

export function ComponentExample({ children, code, description, name }: ComponentExampleProps) {
  /** state */
  const [showCodeSnippet, setShowCodeSnippet] = useState(false);

  /** local variables */
  const CodeSnippetIcon = showCodeSnippet ? IoChevronUpCircle : IoChevronDownCircle;

  return (
    <div className={classes.componentExampleRoot} id={name}>
      <h3 className={classes.componentExampleName}>{name}</h3>
      <div className={classes.componentExampleDescription} id={`${name}-description`}>
        {description}
      </div>
      <div className={classes.componentExampleCode}>
        <div
          aria-label='View code snippet'
          onClick={() => setShowCodeSnippet(prev => !prev)}
          onKeyDown={e => {
            if (e.key === 'Space') setShowCodeSnippet(prev => !prev);
          }}
          role='button'
          tabIndex={0}
        >
          <div>
            <CodeSnippetIcon />
            View Code Snippet
            <CodeSnippetIcon />
          </div>
        </div>
        {showCodeSnippet && (
          <CodeSnippet allowCopy language='typescript' snippet={code.split('/* ---FENCE--- */')[1]?.trim() ?? ''} />
        )}
      </div>
      {children}
    </div>
  );
}
