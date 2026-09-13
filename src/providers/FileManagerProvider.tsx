import { File, fileCollection as filesData } from 'data/file-manager';
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  use,
  useState
} from 'react';
import { useLocation } from 'react-router';

interface FileManagerContextInterface {
  fileCollection: File[];
  setFileCollection: Dispatch<SetStateAction<File[]>>;
  showFileDetails: boolean;
  setShowFileDetails: Dispatch<SetStateAction<boolean>>;
  checkedFileIds: number[];
  setCheckedFileIds: Dispatch<SetStateAction<number[]>>;
  isGridView: boolean;
  isGrouped: boolean;
  setIsGrouped: Dispatch<SetStateAction<boolean>>;
}

export const FileManagerContext = createContext(
  {} as FileManagerContextInterface
);

const FileManagerProvider = ({ children }: PropsWithChildren) => {
  const { pathname } = useLocation();
  const [fileCollection, setFileCollection] = useState<File[]>(filesData);
  // the details column is visible at 2xl on first paint, like the gold
  const [showFileDetails, setShowFileDetails] = useState(true);
  const [checkedFileIds, setCheckedFileIds] = useState<number[]>([]);
  const [isGrouped, setIsGrouped] = useState(false);

  return (
    <FileManagerContext
      value={{
        fileCollection,
        setFileCollection,
        showFileDetails,
        setShowFileDetails,
        checkedFileIds,
        setCheckedFileIds,
        isGridView: !pathname.endsWith('list-view'),
        isGrouped,
        setIsGrouped
      }}
    >
      {children}
    </FileManagerContext>
  );
};

export const useFileManagerContext = () => use(FileManagerContext);

export default FileManagerProvider;
