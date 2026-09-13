import {
  UilEstate,
  UilMap,
  UilMapPinAlt,
  UilWindsock
} from '@iconscout/react-unicons';
import { Card, cn } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import LeadInfoItem from 'components/info-items/LeadInfoItem';

const LeadAddressCard = ({ className }: { className?: string }) => {
  return (
    <Card className={cn(className)}>
      <Card.Body>
        <div className="flex items-center mb-8">
          <h3>Address</h3>
          <Button variant="link">Edit</Button>
        </div>
        <LeadInfoItem
          className="mb-6"
          label="Street"
          icon={UilEstate}
          value="38/2 Penelope street"
        />
        <LeadInfoItem
          className="mb-6"
          label="Zip code"
          icon={UilMapPinAlt}
          value="1425"
        />
        <LeadInfoItem
          className="mb-6"
          label="City"
          icon={UilMap}
          value="Qualimando"
        />
        <LeadInfoItem
          label="Country"
          icon={UilWindsock}
          value="United Empire of Brekania"
        />
      </Card.Body>
    </Card>
  );
};

export default LeadAddressCard;
