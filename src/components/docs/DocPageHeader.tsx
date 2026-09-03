import { PropsWithChildren } from 'react';
import FeatherIcon from 'feather-icons-react';
import { cn } from '@hummingbirdui/react';

interface DocPageHeaderProps {
  title: string;
  description?: string;
  id?: string;
  className?: string;
  link?: {
    url: string;
    text: string;
  };
}

const DocPageHeader = ({
  title,
  description,
  children,
  link,
  id,
  className = 'mb-5'
}: PropsWithChildren<DocPageHeaderProps>) => {
  return (
    <div className={cn(className)} id={id}>
      <h2 className="mb-2 leading-sm">{title}</h2>
      {description && (
        <p className="text-lg text-subtle font-semibold lead mb-2">
          {description}
        </p>
      )}
      {children}
      {link && (
        <a
          href={link.url}
          className="btn btn-link p-0"
          rel="noreferrer"
          target="_blank"
        >
          {link.text}
          <FeatherIcon icon="chevron-right" size={16} />
        </a>
      )}
    </div>
  );
};

export default DocPageHeader;
