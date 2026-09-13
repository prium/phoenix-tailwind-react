import { cn } from '@hummingbirdui/react';
import { ChangeEvent, useState } from 'react';
import kanban1 from 'assets/img/kanban/bg1.jpg';
import kanban2 from 'assets/img/kanban/bg2.jpg';
import kanban3 from 'assets/img/kanban/bg3.jpg';
import kanban4 from 'assets/img/kanban/bg4.jpg';
import kanban5 from 'assets/img/kanban/bg5.jpg';
import kanban6 from 'assets/img/kanban/bg6.jpg';
import Dropzone from 'components/base/Dropzone';
import { useWizardFormContext } from 'providers/WizardFormProvider';
import { CreateBoardFormData } from './CreateBoardWizardForm';
import {
  ColorSwatch,
  CustomColorButton,
  RandomColorButton
} from './ColorCheckButton';
import imageIcon from 'assets/img/icons/image-icon.png';

export const colors = [
  '#ffffff',
  '#F5F8FF',
  '#EFF2F6',
  '#E3E6ED',
  '#CBD0DD',
  '#85A9FF',
  '#60C6FF',
  '#90D67F',
  '#F48270',
  '#FFCC85',
  '#3874FF',
  '#0097EB',
  '#25B003',
  '#EC1F00',
  '#E5780B',
  '#004DFF',
  '#0080C7',
  '#23890B',
  '#CC1B00',
  '#D6700A',
  '#000000',
  '#222834'
];

const bgImages = [kanban1, kanban2, kanban3, kanban4, kanban5, kanban6];

const ImageSwatch = ({ img, index }: { img: string; index: number }) => {
  const { formData, setFormData } = useWizardFormContext<CreateBoardFormData>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setFormData({
        ...formData,
        backgroundColor: undefined,
        backgroundImage: img
      });
    }
  };

  return (
    <>
      <input
        className="btn-check kanban-swatch-radio"
        type="radio"
        value={img}
        name="board-img"
        id={`img${index}`}
        checked={
          formData.backgroundImage
            ? formData.backgroundImage === img
            : index === 0
        }
        onChange={handleChange}
      />
      <label className="kanban-radio-bg-image w-full" htmlFor={`img${index}`}>
        <img
          className="me-2 cursor-pointer rounded-lg object-cover h-25 w-full"
          src={img}
          alt=""
        />
      </label>
    </>
  );
};

/**
 * Step 3 — background color / image picker. Gold: `Step3` in
 * `../phoenix-tailwind/src/pug/mixins/kanban/KanbanWizardForm.pug`
 * (nav-underline tabs + swatch grid + dropzone-single).
 */
const BackgroundColorForm = () => {
  const { formData, setFormData, formRefs } =
    useWizardFormContext<CreateBoardFormData>();

  const [activeTab, setActiveTab] = useState<'color' | 'bg'>('color');
  const [customBgImage, setCustomBgImage] = useState('');

  return (
    <>
      <p className="mb-6">
        Select a <strong className="font-extrabold">Background</strong> Colour
        or Image. This will also be thumbnail for your Kanban board.{' '}
      </p>
      <form
        id="createBoardForm3"
        data-wizard-form="3"
        noValidate
        ref={el => {
          formRefs.current[2] = el;
        }}
        onSubmit={e => e.preventDefault()}
      >
        <ul
          className="nav nav-underline text-md border-b"
          id="myTabdiv"
          role="tablist"
        >
          <li className="nav-item">
            <a
              className={cn('nav-link', { active: activeTab === 'color' })}
              id="color-tab"
              href="#tab-color"
              role="tab"
              aria-controls="tab-color"
              aria-selected={activeTab === 'color'}
              onClick={e => {
                e.preventDefault();
                setActiveTab('color');
              }}
            >
              {' '}
              <span className="fas fa-palette me-2" />
              Solid color
            </a>
          </li>
          <li className="nav-item">
            <a
              className={cn('nav-link', { active: activeTab === 'bg' })}
              id="bg-tab"
              href="#tab-bg"
              role="tab"
              aria-controls="tab-bg"
              aria-selected={activeTab === 'bg'}
              onClick={e => {
                e.preventDefault();
                setActiveTab('bg');
              }}
            >
              {' '}
              <span className="fas fa-envelope me-2" />
              Image
            </a>
          </li>
        </ul>
        <div className="tab-content mt-18" id="myTabContent">
          <div
            className={cn('tab-pane fade', {
              'show active': activeTab === 'color'
            })}
            id="tab-color"
            role="tabpanel"
            aria-labelledby="color-tab"
          >
            <div className="flex flex-wrap gap-4">
              {colors.map((color, index) => (
                <ColorSwatch key={color} color={color} index={index} />
              ))}
              <CustomColorButton />
              <RandomColorButton />
            </div>
          </div>
          <div
            className={cn('tab-pane fade', {
              'show active': activeTab === 'bg'
            })}
            id="tab-bg"
            role="tabpanel"
            aria-labelledby="bg-tab"
          >
            <div className="row g-4 mb-6">
              {bgImages.map((img, index) => (
                <div className="col-6" key={img}>
                  <ImageSwatch img={img} index={index} />
                </div>
              ))}
              <div className="col-12">
                <input
                  className="btn-check kanban-swatch-radio"
                  type="radio"
                  name="board-custom-image"
                  id="boardCustomImage"
                  readOnly
                />
                <Dropzone
                  multiple={false}
                  noPreview
                  className="dropzone-single p-0 w-full"
                  accept={{
                    'image/*': ['.png', '.gif', '.jpeg', '.jpg']
                  }}
                  onDrop={(acceptedFiles: File[]) => {
                    const image = URL.createObjectURL(acceptedFiles[0]);
                    setCustomBgImage(image);
                    setFormData({
                      ...formData,
                      backgroundColor: undefined,
                      backgroundImage: image
                    });
                  }}
                >
                  <div
                    className="dz-message text-subtle/85 text-center py-0!"
                    data-dz-message=""
                  >
                    <div className="dz-message-text py-4">
                      or, Add a custom background
                      <br />
                      <img className="mt-4" src={imageIcon} width={30} alt="" />
                    </div>
                    <button
                      className="btn dz-upload-btn border-0 absolute z-5 bg-black bg-opacity-50 text-white mt-4 ms-4 px-4"
                      type="button"
                    >
                      Change Picture
                      <span className="fa-solid fa-camera text-sm ms-1" />
                    </button>
                  </div>
                  {customBgImage && (
                    <div className="dz-preview m-0">
                      <div className="rounded-md relative h-36">
                        <input
                          className="btn-check kanban-swatch-radio kanban-custom-bg-radio"
                          type="radio"
                          value="kanban-custom-bg"
                          name="board-img"
                          id="kanban-custom-bg"
                          checked={formData.backgroundImage === customBgImage}
                          onChange={e => {
                            if (e.target.checked) {
                              setFormData({
                                ...formData,
                                backgroundColor: undefined,
                                backgroundImage: customBgImage
                              });
                            }
                          }}
                        />
                        <label
                          className="kanban-radio-bg-image w-full h-full"
                          htmlFor="kanban-custom-bg"
                        >
                          <img
                            className="rounded-md w-full h-full object-cover"
                            src={customBgImage}
                            alt="..."
                            data-dz-thumbnail=""
                          />
                        </label>
                        <button
                          className="btn border-0 absolute top-0 end-0 z-5 bg-black bg-opacity-50 text-white mt-4 me-4 px-4 cursor-pointer"
                          type="button"
                          onClick={e => {
                            e.stopPropagation();
                            setCustomBgImage('');
                          }}
                        >
                          <span className="fa-solid fa-xmark cursor-pointer" />
                        </button>
                      </div>
                    </div>
                  )}
                </Dropzone>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default BackgroundColorForm;
