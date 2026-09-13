import { Input, Textarea } from '@hummingbirdui/react';

/**
 * "Drop us a line" column — `+Address` in landing-1/Address.pug, reused
 * verbatim by `+Contact` in landing-2/Contact.pug.
 */
const QueryForm = () => (
  <>
    <h3 className="mb-4">Drop us a line</h3>
    <p className="mb-12">
      If you have any query or suggestion , we are open to learn from you, Lets
      talk, reach us anytime.
    </p>
    <form className="row g-6">
      <div className="col-12">
        <Input
          className="bg-soft"
          type="text"
          name="name"
          placeholder="Name"
          required
        />
      </div>
      <div className="col-12">
        <Input
          className="bg-soft"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
      </div>
      <div className="col-12">
        <Textarea
          className="bg-soft"
          rows={6}
          name="message"
          placeholder="Message"
          required
        />
      </div>
      <div className="col-12 grid">
        <button className="btn btn-outline-primary" type="submit">
          Submit
        </button>
      </div>
      <div className="feedback" />
    </form>
  </>
);

export default QueryForm;
