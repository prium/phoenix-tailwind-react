import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import ReactSelect from 'components/base/ReactSelect';
import Button from 'components/base/Button';

const multipleSelectCode = `
import ReactSelect from 'components/base/ReactSelect';

function MultipleSelect(){
  return(
    <>
      <Field.Label>Multiple</Field.Label>
      <ReactSelect
        options={[
          {
            value: 'Massachusetts Institute of Technology',
            label: 'Massachusetts Institute of Technology'
          },
          { value: 'University of Chicago', label: 'University of Chicago' },
          { value: 'GSAS Open Labs At Harvard', label: 'GSAS Open Labs At Harvard' },
          {
            value: 'California Institute of Technology',
            label: 'California Institute of Technology'
          }
        ]}
        isMulti
        placeholder="Select organizer..."
      />
    </>
  )
}
`;

const singleSelectCode = `
import ReactSelect from 'components/base/ReactSelect';

function SingleSelect(){
  return(
    <>
      <Field.Label>Single</Field.Label>
      <ReactSelect
        options={[
          {
            value: 'Massachusetts Institute of Technology',
            label: 'Massachusetts Institute of Technology'
          },
          { value: 'University of Chicago', label: 'University of Chicago' },
          { value: 'GSAS Open Labs At Harvard', label: 'GSAS Open Labs At Harvard' },
          {
            value: 'California Institute of Technology',
            label: 'California Institute of Technology'
          }
        ]}
        placeholder="Select organizer..."
      />
    </>
  )
}
`;

const validationCode = `
import ReactSelect from 'components/base/ReactSelect';
import Button from 'components/base/Button';

function Validation(){
  return(
    <form>
      <Field.Label>Multiple</Field.Label>
      <ReactSelect
        options={[
          {
            value: 'Massachusetts Institute of Technology',
            label: 'Massachusetts Institute of Technology'
          },
          { value: 'University of Chicago', label: 'University of Chicago' },
          { value: 'GSAS Open Labs At Harvard', label: 'GSAS Open Labs At Harvard' },
          {
            value: 'California Institute of Technology',
            label: 'California Institute of Technology'
          }
        ]}
        isMulti
        placeholder="Select organizer..."
        required
      />
      <Field.Label className="mt-4">Single</Field.Label>
      <ReactSelect
        options={[
          {
            value: 'Massachusetts Institute of Technology',
            label: 'Massachusetts Institute of Technology'
          },
          { value: 'University of Chicago', label: 'University of Chicago' },
          { value: 'GSAS Open Labs At Harvard', label: 'GSAS Open Labs At Harvard' },
          {
            value: 'California Institute of Technology',
            label: 'California Institute of Technology'
          }
        ]}
        placeholder="Select organizer..."
        required
      />
      <Button type="submit" variant="primary" className="mt-4">Submit</Button>
    </form>
  )
}
`;

const AdvanceSelectExample = () => {
  return (
    <div className="mb-9">
      <DocPageHeader
        title="Advance Select"
        description={`${
          import.meta.env.VITE_TITLE
        }-React uses React Select for advance select component. React Select is a flexible and beautiful Select Input control for ReactJS with multiselect, autocomplete, async and creatable support.`}
        link={{
          text: 'React Select Documentation',
          url: 'https://react-select.com/home'
        }}
      />
      <DocPagesLayout>
        <PhoenixDocCard className="overflow-visible mb-4">
          <PhoenixDocCard.Header title="Multiple Select Example">
            <p className="mb-0">
              <code>ReactSelect</code> is the app wrapper around{' '}
              <code>react-select</code>; it renders the same{' '}
              <code>choices</code> markup the static theme produces, so the
              control matches the rest of the form skin. Labels around it are
              plain hb-react <code>Field.Label</code>s.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body
            code={multipleSelectCode}
            scope={{ ReactSelect }}
          />
        </PhoenixDocCard>
        <PhoenixDocCard className="overflow-visible mb-4">
          <PhoenixDocCard.Header title="Single Select Example" />
          <PhoenixDocCard.Body
            code={singleSelectCode}
            scope={{ ReactSelect }}
          />
        </PhoenixDocCard>
        <PhoenixDocCard className="overflow-visible">
          <PhoenixDocCard.Header title="Validation Example">
            <p className="mb-0">
              <code>required</code> is forwarded to the hidden native select, so
              the surrounding <code>&lt;form&gt;</code> validates it with the
              browser’s own constraint validation.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body
            code={validationCode}
            scope={{ ReactSelect, Button }}
          />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default AdvanceSelectExample;
