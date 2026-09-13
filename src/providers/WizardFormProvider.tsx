import { UseWizardFormResult } from 'hooks/useWizardForm';
import { Context, PropsWithChildren, createContext, use } from 'react';

interface WizardFormContextInterface<T> extends UseWizardFormResult<T> {}
interface WizardFormProviderInterface<T>
  extends WizardFormContextInterface<T> {}

export const WizardFormContext = createContext(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  {} as WizardFormContextInterface<any>
);

const WizardFormProvider = <T,>({
  children,
  ...rest
}: PropsWithChildren<WizardFormProviderInterface<T>>) => {
  return <WizardFormContext value={{ ...rest }}>{children}</WizardFormContext>;
};

export const useWizardFormContext = <T,>() =>
  use(WizardFormContext as Context<WizardFormContextInterface<T>>);

export default WizardFormProvider;
