import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeEvent, useId, useState } from 'react';
import generic43 from 'assets/img/generic/43.webp';
import { faImage, faXmark } from '@fortawesome/free-solid-svg-icons';
import { cn } from '@hummingbirdui/react';

interface CoverImageProps {
  handleClose: () => void;
  /** Gold: `min-h-37.5 max-h-50` (card modal) / `min-h-37.5 max-h-70` (board modal). */
  imgClassName?: string;
}

/** `.modal-header.relative.p-0` content of the project modals (ProjectDetailsModal.pug) */
const CoverImage = ({
  handleClose,
  imgClassName = 'min-h-37.5 max-h-50'
}: CoverImageProps) => {
  const [image, setImage] = useState<File | null>(null);
  const inputId = useId();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };
  return (
    <>
      <input
        type="file"
        id={inputId}
        className="hidden"
        onChange={handleChange}
      />
      <label className="absolute top-0 start-0" htmlFor={inputId}>
        <span className="inline-block bg-soft/64 hover:bg-soft transition-[background-color] duration-300 dark:text-emphasis rounded-md py-2 px-4 text-md font-extrabold mt-4 ms-4 cursor-pointer">
          <FontAwesomeIcon icon={faImage} className="me-1" />
          Change
        </span>
      </label>

      <button
        type="button"
        className="btn btn-circle absolute end-0 top-0 mt-4 me-4 bg-soft/64 hover:bg-soft transition-[background-color] duration-300"
        onClick={handleClose}
      >
        <FontAwesomeIcon
          icon={faXmark}
          className="text-default dark:text-emphasis"
        />
      </button>
      <img
        src={image ? URL.createObjectURL(image) : generic43}
        alt=""
        className={cn('w-full', imgClassName)}
      />
    </>
  );
};

export default CoverImage;
