import { cn } from '@hummingbirdui/react';
import {
  Accept,
  DropEvent,
  FileRejection,
  DropzoneProps as ReactDropZoneProps,
  useDropzone
} from 'react-dropzone';
import Button from './Button';
import imageIcon from 'assets/img/icons/image-icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useMemo,
  useState
} from 'react';
import AttachmentPreview, {
  FileAttachment
} from 'components/common/AttachmentPreview';
import { convertFileToAttachment } from 'helpers/utils';
import ImageAttachmentPreview from 'components/common/ImageAttachmentPreview';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

interface DropzoneProps {
  className?: string;
  size?: 'sm';
  reactDropZoneProps?: ReactDropZoneProps;
  accept?: Accept;
  noPreview?: boolean;
  /**
   * Typography classes for the default `.dz-message` prompt. The gold writes
   * most of them plain (`dz-message text-subtle/85`, 16px/23.84px line box);
   * product-details shrinks its prompt with `font-bold text-md`, which is the
   * default here for the call sites that predate this prop. Pass `''` for the
   * gold's plain prompt — the 3px line-box delta cascades down a long page.
   */
  messageClassName?: string;
  defaultFiles?: File[];
  multiple?: boolean;
  previewHight?: number;
  previewWidth?: number;
  setPhotos?: Dispatch<SetStateAction<File[]>>;
  onDrop?: <T extends File>(
    acceptedFiles: T[],
    fileRejections: FileRejection[],
    event: DropEvent
  ) => void;
}

const Dropzone = ({
  className,
  size,
  onDrop,
  accept,
  defaultFiles = [],
  noPreview,
  messageClassName = 'font-bold text-md',
  reactDropZoneProps,
  multiple = true,
  previewHight,
  previewWidth,
  setPhotos,
  children
}: PropsWithChildren<DropzoneProps>) => {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<FileAttachment[]>([]);

  const handleRemoveFile = (index: number) => {
    setFiles(files.filter((file, ind) => index !== ind));
    setPreviews(previews.filter((file, ind) => index !== ind));
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (...args) => {
      const [acceptedFiles] = args;
      setFiles(acceptedFiles);
      setPreviews(acceptedFiles.map(file => convertFileToAttachment(file)));
      if (onDrop) {
        onDrop(...args);
      }
    },
    multiple: multiple,
    accept,
    ...reactDropZoneProps
  });

  const imageOnly = useMemo(() => {
    return Boolean(accept && accept['image/*']);
  }, [accept]);

  useEffect(() => {
    if (defaultFiles.length > 0) {
      setFiles(defaultFiles);
    }
  }, [defaultFiles]);

  useEffect(() => {
    if (files.length > 0) {
      setPhotos && setPhotos(files);
    }
  }, [files]);

  return (
    <>
      <div
        {...getRootProps()}
        className={cn(className, 'dropzone', {
          'dropzone-sm': size === 'sm',
          'dropzone-multiple': multiple
        })}
      >
        <input {...getInputProps()} />
        {children ? (
          <>{children}</>
        ) : (
          <div className={cn('dz-message text-subtle/85', messageClassName)}>
            Drag your {imageOnly ? 'photo' : 'files'} here{' '}
            <span className="text-muted">or </span>
            <Button variant="link" className="p-0" type="button">
              Browse from device
            </Button>
            <br />
            <img
              className="mt-4 me-2"
              src={imageIcon}
              width={size === 'sm' ? 24 : 40}
              alt=""
            />
          </div>
        )}
      </div>
      {!imageOnly &&
        previews.map((file, index) => (
          <div
            key={index}
            className={cn(
              'border-b border-subtle flex items-center justify-between py-6'
            )}
          >
            <AttachmentPreview attachment={file} />

            <button className="btn p-0" onClick={() => handleRemoveFile(index)}>
              <FontAwesomeIcon icon={faTrashAlt} className="text-base" />
            </button>
          </div>
        ))}

      {imageOnly && !noPreview && files.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {files.map((file, index) => (
            <ImageAttachmentPreview
              key={file.name}
              image={URL.createObjectURL(file)}
              previewWidth={previewWidth}
              previewHight={previewHight}
              handleClose={() => handleRemoveFile(index)}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Dropzone;
