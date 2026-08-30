import { faCreditCard } from '@fortawesome/free-regular-svg-icons';
import {
  faChevronRight,
  faEarthAmericas,
  faListCheck,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router';

const ProjectDetailsSummary = () => {
  return (
    <>
      <div className="mb-6 xl:mb-12">
        <table className="leading-sm mb-6 sm:mb-0 xl:mb-6">
          <tbody>
            <tr>
              <td className="py-1" colSpan={2}>
                <div className="flex">
                  <FontAwesomeIcon
                    icon={faEarthAmericas}
                    className="me-2 text-subtle text-md"
                  />
                  <h5 className="text-default">Public project</h5>
                </div>
              </td>
            </tr>
            <tr>
              <td className="align-top py-1">
                <div className="flex">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="me-2 text-subtle text-md"
                  />
                  <h5 className="text-default mb-0 whitespace-nowrap">Client :</h5>
                </div>
              </td>
              <td className="ps-1 py-1">
                <Link className="font-semibold block leading-sm" to="#!">
                  Gobble the Bleep Inc
                </Link>
              </td>
            </tr>
            <tr>
              <td className="align-top py-1">
                <div className="flex">
                  <FontAwesomeIcon
                    icon={faCreditCard}
                    className="me-2 text-subtle text-md"
                  />
                  <h5 className="text-default mb-0 whitespace-nowrap">Budget : </h5>
                </div>
              </td>
              <td className="font-bold ps-1 py-1 text-highlight">$8,742</td>
            </tr>
          </tbody>
        </table>
        <table className="leading-sm">
          <tbody>
            <tr>
              <td className="align-top py-1 text-default whitespace-nowrap font-bold">
                Started :{' '}
              </td>
              <td className="text-subtle text-opacity-85 font-semibold ps-4">
                17th Nov, 2020
              </td>
            </tr>
            <tr>
              <td className="align-top py-1 text-default whitespace-nowrap font-bold">
                Deadline :
              </td>
              <td className="text-subtle text-opacity-85 font-semibold ps-4">
                21st May, 2028
              </td>
            </tr>
            <tr>
              <td className="align-top py-1 text-default whitespace-nowrap font-bold">
                Progress :
              </td>
              <td className="text-warning font-semibold ps-4">80%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faListCheck}
            className="me-2 text-subtle text-md"
          />
          <h5 className="text-emphasis mb-0 me-2">
            91<span className="text-default font-normal ms-2">tasks</span>
          </h5>
          <Link className="font-bold text-md mt-1" to="#!">
            See tasks{' '}
            <FontAwesomeIcon icon={faChevronRight} className="me-2 text-sm" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsSummary;
