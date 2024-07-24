import classes from "../screens/Schedule/Schedule.module.css";

const EventsList = ({ data, dataHeader }) => {
  console.log(dataHeader);
  return (
    <div>
      <table border="2" className={classes.eventsTable}>
        <thead className={classes.tableHead}>
          <tr>
            {dataHeader.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className={classes.tableBody}>
          {data.map((item, index) => (
            <tr key={index}>
              {Object.entries(item).map(([key, value]) => {
                if (key === "game") {
                  return <td>{value?.name}</td>;
                } else {
                  return <td>{value}</td>;
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventsList;
