import Button from 'components/base/Button';
import dayjs from 'dayjs';
import { getNumbersInRange } from 'helpers/utils';
import { Col, Input, Row, Select, cn } from '@hummingbirdui/react';

const Label = ({
  htmlFor,
  bold,
  children
}: {
  htmlFor?: string;
  bold?: boolean;
  children: string;
}) => (
  <label
    htmlFor={htmlFor}
    className={cn(
      'form-label text-highlight text-base ps-0 capitalize leading-sm',
      bold && 'font-bold'
    )}
  >
    {children}
  </label>
);

/** `+PersonalInfo` in phoenix-tailwind mixins/e-commerce/profile/PersonalInfo.pug */
const EcomProfilePersonalInfo = () => {
  return (
    <form>
      <Row className="gx-4 gy-6 mb-8">
        <Col xs={12} lg={6}>
          <Label htmlFor="fullName">Full name</Label>
          <Input id="fullName" type="text" placeholder="Full name" />
        </Col>
        <Col xs={12} lg={6}>
          <Label htmlFor="gender">Gender</Label>
          <Select id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="non-binary">Non-binary</option>
            <option value="not-to-say">Prefer not to say</option>
          </Select>
        </Col>
        <Col xs={12} lg={6}>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="text" placeholder="Email" />
        </Col>
        <Col xs={12} lg={6}>
          <Row className="g-2 lg:gy-0">
            <label className="form-label text-highlight text-base ps-1 capitalize leading-sm mb-1">
              Date of birth
            </label>
            <Col xs={6} sm={2} lg={3} xl={2}>
              <Select id="date">
                {Array.from(Array(30).keys()).map(date => (
                  <option value={date + 1} key={date}>
                    {date + 1}
                  </option>
                ))}
              </Select>
            </Col>
            <Col xs={6} sm={2} lg={3} xl={2}>
              <Select id="month">
                {dayjs.months().map(month => (
                  <option value={month} key={month}>
                    {month.slice(0, 3)}
                  </option>
                ))}
              </Select>
            </Col>
            <Col xs={12} sm={8} lg={6} xl={8}>
              <Select id="year">
                {getNumbersInRange(1990, 2023).map(year => (
                  <option value={year} key={year}>
                    {year}
                  </option>
                ))}
              </Select>
            </Col>
          </Row>
        </Col>
        <Col xs={12} lg={6}>
          <Label htmlFor="phone" bold>Phone</Label>
          <Input id="phone" type="text" placeholder="+1234567890" />
        </Col>
        <Col xs={12} lg={6}>
          <Label htmlFor="alternative_phone" bold>Alternative phone</Label>
          <Input id="alternative_phone" type="text" placeholder="+1234567890" />
        </Col>
        <Col xs={12} lg={4}>
          <Label htmlFor="facebook" bold>Facebook</Label>
          <Input id="facebook" type="text" placeholder="Facebook" />
        </Col>
        <Col xs={12} lg={4}>
          <Label htmlFor="instagram" bold>Instagram</Label>
          <Input id="instagram" type="text" placeholder="Instagram" />
        </Col>
        <Col xs={12} lg={4}>
          <Label htmlFor="twitter" bold>Twitter</Label>
          <Input id="twitter" type="text" placeholder="Twitter" />
        </Col>
      </Row>
      <div className="text-end">
        <Button type="submit" variant="primary" className="px-12">
          Save changes
        </Button>
      </div>
    </form>
  );
};

export default EcomProfilePersonalInfo;
