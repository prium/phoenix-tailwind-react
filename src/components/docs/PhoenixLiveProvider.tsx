import React, { PropsWithChildren } from 'react';
import * as Hummingbird from '@hummingbirdui/react';
import { LiveProvider } from 'react-live';
import { transformTSCode } from 'helpers/utils';

export interface PhoenixLiveProviderProps {
  code?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  scope?: { [key: string]: any };
  noInline?: boolean;
  transformCode?: (code: string) => string | Promise<string>;
}

const PhoenixLiveProvider = ({
  children,
  code,
  noInline,
  scope,
  transformCode
}: PropsWithChildren<PhoenixLiveProviderProps>) => {
  return (
    <LiveProvider
      code={code}
      /* every `@hummingbirdui/react` export is in scope, so the examples
         read exactly like the import the docs tell you to write */
      scope={{ ...Hummingbird, ...React, ...scope }}
      noInline={noInline}
      transformCode={
        transformCode
          ? transformCode
          : code => transformTSCode(code.replace(/^import.*$/gm, ''))
      }
      language="jsx"
    >
      {children}
    </LiveProvider>
  );
};

export default PhoenixLiveProvider;
