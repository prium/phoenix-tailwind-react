import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input } from '@hummingbirdui/react';
import { ChangeEvent } from 'react';

interface GanttSearchBoxProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
}

/**
 * `+GanttSearchBox` in mixins/gantt-chart/GanttChart.pug.
 *
 * Not `components/common/SearchBox`: the gold nests a `[data-gantt-search-dismiss]`
 * clear button *inside* `.search-box`, and `plugins/gantt.css` keys its
 * `display: none` off `.gantt-search-box .btn-close`, so the element has to be a
 * descendant of the search box (SearchBox takes no children).
 */
const GanttSearchBox = ({ value, onChange, onClear }: GanttSearchBoxProps) => (
  <div className="search-box gantt-search-box">
    <form className="relative" onSubmit={event => event.preventDefault()}>
      <Input
        type="search"
        className="search-input search form-control-sm"
        placeholder="Search..."
        aria-label="Search"
        data-gantt-search
        value={value}
        onChange={onChange}
      />
      <FontAwesomeIcon icon={faSearch} className="search-box-icon" />
    </form>
    <div
      data-gantt-search-dismiss
      className="btn-close absolute end-0 top-1/2 left-1/2 -translate-1/2 cursor-pointer shadow-none me-1"
      onClick={onClear}
    >
      <button className="btn btn-link p-0" aria-label="Close" type="button" />
    </div>
  </div>
);

export default GanttSearchBox;
