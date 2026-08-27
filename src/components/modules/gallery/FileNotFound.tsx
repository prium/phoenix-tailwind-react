import illustration47 from 'assets/img/spot-illustrations/47.png';
import illustration47Dark from 'assets/img/spot-illustrations/47_dark.png';

const FileNotFound = () => {
  return (
    <div className='text-center'>
      <img src={illustration47} className="d-dark-none" alt="" />
      <img src={illustration47Dark} className="d-light-none" alt="" />
      <h2 className="mt-5">Opps! No matches found.</h2>
      <p>
        Try a different search or adjust the filters to find a file by type,
        owner, and other criteria.
      </p>
    </div>
  );
};

export default FileNotFound;
