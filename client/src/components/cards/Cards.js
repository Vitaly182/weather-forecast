import SummaryCard from "../summarycard/SummaryCard";


const Cards = ({weatherData, re}) => {
  
     return (
        <ul className="grid grid-cols-2  gap-2">
              {weatherData.list.slice(0, 32).map((days, index) => {
                if (days.dt_txt.match(re)) {
                    return <SummaryCard key={index} day={days} />;
                  }
                  return null;
                })}
              </ul>
    );
};

export default Cards;