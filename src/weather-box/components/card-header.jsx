// eslint-disable-next-line react/prop-types
export const CardHeader = ({ city, date }) => (
    <div className="card-header">
      <h1 className="header-title">{city}</h1>
      <p className="header-date">{date}</p>
    </div>
  );