import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Icon } from '@iconscout/react-unicons';
import { Col, Input, Row } from '@hummingbirdui/react';
import IconCard from 'components/cards/IconCard';
import { useMemo, useState } from 'react';

type IconEntry = [name: string, icon: IconProp | Icon | string];

interface IconCardListProps {
  /** a list of icon names (feather) or a name → icon component map */
  icons: string[] | { [key: string]: IconProp } | { [key: string]: Icon };
  iconFamily: 'font-awesome' | 'unicons' | 'feather';
  /** gold `+IconListHeader` renders a search field over the list */
  search?: boolean;
}

/**
 * Gold `#icon-list` (`../phoenix-tailwind/src/pug/mixins/icons/IconCards.pug`):
 * the searchable grid of `+IconCard`s. The gold filters it with list.js; here
 * the field filters on icon name in React.
 */
const IconCardList = ({
  icons,
  iconFamily,
  search = true
}: IconCardListProps) => {
  const [query, setQuery] = useState('');

  const entries = useMemo<IconEntry[]>(
    () =>
      Array.isArray(icons)
        ? icons.map(name => [name, name])
        : (Object.entries(icons) as IconEntry[]),
    [icons]
  );

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return needle
      ? entries.filter(([name]) => name.toLowerCase().includes(needle))
      : entries;
  }, [entries, query]);

  return (
    <>
      {search && (
        <div className="text-end mb-4">
          <Input
            type="search"
            placeholder="Search"
            value={query}
            onChange={event => setQuery(event.target.value)}
            className="inline-block rounded-lg w-62.5"
            aria-label="Search icons"
          />
        </div>
      )}
      <Row>
        {visible.map(([name, icon]) => (
          <Col xs={12} sm={6} md={4} lg={3} key={name}>
            <IconCard icon={icon} iconFamily={iconFamily} name={name} />
          </Col>
        ))}
      </Row>
      {visible.length === 0 && (
        <div className="text-center">
          <p className="fallback font-bold text-lg mb-0">No icons found</p>
        </div>
      )}
    </>
  );
};

export default IconCardList;
