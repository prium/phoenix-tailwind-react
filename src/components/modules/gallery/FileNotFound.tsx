import illustration47 from 'assets/img/spot-illustrations/47.png';
import illustration47Dark from 'assets/img/spot-illustrations/47_dark.png';

const FileNotFound = () => {
  return (
    <div className="text-center">
      <img src={illustration47} className="dark:hidden" alt="" />
      <img src={illustration47Dark} className="hidden dark:block" alt="" />
      <h2 className="mt-8">Opps! No matches found.</h2>
      <p>
        Try a different search or adjust the filters to find a file by type,
        owner, and other criteria.
      </p>
    </div>
  );
};

export default FileNotFound;
