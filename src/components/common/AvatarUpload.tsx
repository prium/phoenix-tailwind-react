import { ChangeEvent, useState } from 'react';
import Avatar, { Size, Status } from 'components/base/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@hummingbirdui/react';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

interface AvatarUploadProps {
  size: Size;
  src: string;
  className?: string;
  status?: Status;
  thumbnail?: boolean;
  onChange?: () => void;
  imageClassName?: string;
}

const AvatarUpload = ({
  size,
  src,
  status,
  thumbnail,
  onChange,
  className,
  imageClassName
}: AvatarUploadProps) => {
  const [image, setImage] = useState<File | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
      if (onChange) {
        onChange();
      }
    }
  };
  return (
    <div className={cn('inline-flex', className)}>
      <input
        className="hidden"
        id="avatarFile"
        type="file"
        accept="image/*"
        onChange={handleChange}
      />
      <label
        className="cursor-pointer hover-actions-trigger"
        htmlFor="avatarFile"
      >
        <Avatar
          size={size}
          status={status}
          src={image ? URL.createObjectURL(image) : src}
          thumbnail={thumbnail}
          imageClassName={imageClassName}
        />
        <div className="h-full w-full bg-black/56 absolute top-0 rounded-full justify-center items-center hover-actions">
          <FontAwesomeIcon icon={faCamera} className="text-white text-2xl" />
        </div>
      </label>
    </div>
  );
};

export default AvatarUpload;
