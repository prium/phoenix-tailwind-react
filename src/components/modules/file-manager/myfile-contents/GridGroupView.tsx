import { File } from 'data/file-manager';
import { Fragment } from 'react';
import FileBox from './FileBox';

const KNOWN_TYPES = ['folder', 'image', 'video', 'doc', 'zip', 'csv', 'xlx'];

/** App-only "view as group" layout behind the gold `#viewAsGroup` switch. */
const GridGroupView = ({ data }: { data: File[] }) => {
  const groups = [
    { title: 'Folder', data: data.filter(file => file.type === 'folder') },
    { title: 'Images', data: data.filter(file => file.type === 'image') },
    { title: 'Videos', data: data.filter(file => file.type === 'video') },
    {
      title: 'Files',
      data: data.filter(file =>
        ['doc', 'zip', 'csv', 'xlx'].includes(file.type)
      )
    },
    {
      title: 'Others',
      data: data.filter(file => !KNOWN_TYPES.includes(file.type))
    }
  ];

  return (
    <>
      {groups.map(
        (group, index) =>
          group.data.length > 0 && (
            <Fragment key={group.title}>
              <h4 className="mb-4">{group.title}</h4>
              <div className="files-container mb-4">
                {group.data.map(file => (
                  <FileBox file={file} key={file.id} />
                ))}
              </div>
              {index < groups.length - 1 && <hr className="my-8" />}
            </Fragment>
          )
      )}
    </>
  );
};

export default GridGroupView;
