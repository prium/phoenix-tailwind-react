import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import Dropzone from 'components/base/Dropzone';

const singleFileUploadCode = `
import Dropzone from 'components/base/Dropzone';

function SingleFileUpload(){
  return (
    <Dropzone multiple={false} onDrop={acceptedFiles => console.log(acceptedFiles)} />
  )
}
`;
const multipleFileUploadCode = `
import Dropzone from 'components/base/Dropzone';

function SingleFileUpload(){
  return (
    <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)} />
  )
}
`;

const FileUploaderExample = () => {
  return (
    <div className="mb-9">
      <DocPageHeader
        title="File Uploader"
        description={`${
          import.meta.env.VITE_TITLE
        }-React uses React Dropzone for file-uploader. React Dropzone provides a simple react hook to create a HTML5-compliant drag'n'drop zone for files.`}
        link={{
          text: 'React Dropzone Documentation',
          url: 'https://react-dropzone.js.org/'
        }}
      />
      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Single File Upload">
            <p className="mb-0">
              <code>Dropzone</code> is the app wrapper around{' '}
              <code>react-dropzone</code> and renders the theme’s dropzone
              markup. hb-react also ships a{' '}
              <a
                href="https://react.hbui.dev/docs/advanced-forms/file-uploader"
                target="_blank"
                rel="noreferrer"
              >
                FileUploader
              </a>
              , but the pages in this project use this one.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body
            code={singleFileUploadCode}
            scope={{ Dropzone }}
          />
        </PhoenixDocCard>
        <PhoenixDocCard>
          <PhoenixDocCard.Header title="Multiple File Upload" />
          <PhoenixDocCard.Body
            code={multipleFileUploadCode}
            scope={{ Dropzone }}
          />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default FileUploaderExample;
