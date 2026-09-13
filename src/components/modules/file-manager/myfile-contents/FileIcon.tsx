import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faFileCode,
  faFileCsv,
  faFileExcel,
  faFileInvoice,
  faFilePdf,
  faFileWord,
  faFileZipper,
  faFolder
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@hummingbirdui/react';
import { File } from 'data/file-manager';

/** type → glyph exactly as in mixins/file-manager/MyFile.pug (note `xlx`). */
const iconByType: Record<string, IconDefinition> = {
  folder: faFolder,
  doc: faFileWord,
  xls: faFileExcel,
  'source-code': faFileInvoice,
  zip: faFileZipper,
  html: faFileCode,
  pdf: faFilePdf,
  xlx: faFileInvoice,
  csv: faFileCsv
};

interface FileIconProps {
  file: File;
  /** gold size class — `text-md` in the table, `text-4xl` in the grid box */
  className?: string;
  /** the box/table icons are `text-subtle`; the details panel leaves them default */
  muted?: boolean;
}

/**
 * The file-type glyph of `+MyFile` / `+MyFilesTableRow`. Folder id 3 ("Brand
 * Identity") is the one highlighted folder in the gold demo data.
 */
const FileIcon = ({ file, className, muted = true }: FileIconProps) => {
  const icon = iconByType[file.type];
  if (!icon) return null;

  return (
    <FontAwesomeIcon
      icon={icon}
      className={cn(
        file.type === 'folder' && file.id === 3
          ? 'text-info-light'
          : muted && 'text-subtle',
        className
      )}
    />
  );
};

export default FileIcon;
