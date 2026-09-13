import { useMemo, type JSX } from 'react';
import { TripDetailsTabDetailItem } from 'data/travel-agency/customer/trip';
import { Col, Row } from '@hummingbirdui/react';
import CollapsibleContainer from 'components/common/CollapsibleContainer';
import TripDetailsTabDetailsExpectation from './details-tab/TripDetailsTabDetailsExpectation';
import TripDetailsTabDetailsIncluded from './details-tab/TripDetailsTabDetailsIncluded';
import TripDetailsTabDetailsDeparture from './details-tab/TripDetailsTabDetailsDeparture';
import TripDetailsListItem from './details-tab/TripDetailsListItem';
import TripDetailsTabDetailsAccessibility from './details-tab/TripDetailsTabDetailsAccessibility';
import TripDetailsTabDetailsPolicy from './details-tab/TripDetailsTabDetailsPolicy';
import TripDetailsSummary from './details-tab/TripDetailsSummary';
import TripDetailsMapCluster from './details-tab/TripDetailsMapCluster';

interface TripDetailsTabDetailsContentProps {
  tripDetailsItems: TripDetailsTabDetailItem;
}

interface CollapsibleContainerContentProps {
  id: string;
  title: string;
  defaultOpen: boolean;
  content: JSX.Element;
  className?: string;
}

const collapsibleContainerContent = (
  tripDetailsItems: TripDetailsTabDetailItem
): CollapsibleContainerContentProps[] => {
  return [
    {
      id: 'collapseWhatToExpect',
      title: 'What to expect',
      defaultOpen: true,
      content: (
        <TripDetailsTabDetailsExpectation
          expectations={tripDetailsItems.expectation}
        />
      )
    },
    {
      id: 'collapseIncluded',
      title: 'What are included or excluded',
      defaultOpen: false,
      className: 'mt-6',
      content: (
        <TripDetailsTabDetailsIncluded
          includedItems={tripDetailsItems.includeOrExclude}
        />
      )
    },
    {
      id: 'collapseDeparture',
      title: 'Departure and return',
      defaultOpen: false,
      className: 'mt-6',
      content: (
        <TripDetailsTabDetailsDeparture
          departureItems={tripDetailsItems.departOrReturn}
        />
      )
    },
    {
      id: 'collapseAccessibility',
      title: 'Accessibility',
      defaultOpen: false,
      className: 'mt-6',
      content: (
        <TripDetailsTabDetailsAccessibility
          accessibility={tripDetailsItems.accessibility}
        />
      )
    },
    {
      id: 'collapseAdditionalInfo',
      title: 'Additional Information',
      className: 'mt-6',
      defaultOpen: false,
      content: (
        <div className="py-10 px-6">
          <ul className="list-none mb-0 p-0">
            {tripDetailsItems.additional.map(item => (
              <TripDetailsListItem key={item.id}>
                {item.additionalItem}
              </TripDetailsListItem>
            ))}
          </ul>
        </div>
      )
    },
    {
      id: 'collapsePolicy',
      title: 'Policy',
      defaultOpen: false,
      className: 'mt-6',
      content: (
        <TripDetailsTabDetailsPolicy policies={tripDetailsItems.policy} />
      )
    }
  ];
};

/** `+TripDetails` in phoenix-tailwind mixins/travel-agency/trip/TripDetails.pug */
const TripDetailsTabDetailsContent = ({
  tripDetailsItems
}: TripDetailsTabDetailsContentProps) => {
  const contents = useMemo(() => {
    return collapsibleContainerContent(tripDetailsItems);
  }, [tripDetailsItems]);
  return (
    <Row className="justify-between gx-0 gy-8">
      <Col xl={7}>
        {contents.map(item => (
          <CollapsibleContainer
            key={item.id}
            id={item.id}
            collapseTitle={item.title}
            titleClass="text-base sm:text-lg text-highlight"
            className={item.className}
            containerSize="trip"
            defaultOpen={item.defaultOpen}
          >
            {item.content}
          </CollapsibleContainer>
        ))}
      </Col>
      <Col xl={4}>
        <TripDetailsMapCluster />
        <TripDetailsSummary tourSummary={tripDetailsItems.tourSummary} />
      </Col>
    </Row>
  );
};

export default TripDetailsTabDetailsContent;
