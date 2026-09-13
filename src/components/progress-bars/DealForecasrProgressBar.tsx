const segments = [
  {
    label: '$21.0k',
    title: 'Appointment',
    now: 20.72,
    labelClass: 'mb-2 text-subtle font-semibold text-md w-[20.72%]',
    barClass: 'progress w-[20.72%] bg-primary-dark border-e-2'
  },
  {
    label: '$3.4k',
    title: 'Qualified',
    now: 35.76,
    labelClass: 'mb-2 text-subtle font-semibold text-md w-[35.76%]',
    barClass: 'progress w-[35.76%] bg-primary border-e-2'
  },
  {
    label: '$15.1k',
    title: 'Closed Won',
    now: 25.38,
    labelClass: 'mb-2 text-subtle font-semibold text-md w-[25.38%]',
    barClass: 'progress w-[25.38%] bg-success border-e-2'
  },
  {
    label: '$4.6k',
    title: 'Contact Sent',
    now: 25.14,
    labelClass: 'mb-2 text-subtle font-semibold text-md w-[25.14%]',
    barClass: 'progress w-[25.14%] bg-info'
  }
];

/** `+DealForecastProgress` in mixins/dashboard/CRM/Crm.pug */
const DealForecasrProgressBar = () => {
  return (
    <div className="w-full">
      <div className="flex flex-start">
        {segments.map(segment => (
          <p key={segment.title} className={segment.labelClass}>
            {segment.label}
          </p>
        ))}
      </div>
      <div className="progress-stacked gap-0 mb-4 rounded-lg h-2.5">
        {segments.map(segment => (
          <div
            key={segment.title}
            className={segment.barClass}
            role="progressbar"
            aria-valuenow={segment.now}
            aria-valuemin={0}
            aria-valuemax={100}
            title={segment.title}
          />
        ))}
      </div>
    </div>
  );
};

export default DealForecasrProgressBar;
