import DetailCard from "./DetailCard";
import Charts from "./Charts";
import Cards from "./Cards";


const GeneralCard = ({weatherData, weatherIcon, city, showCard}) => {

    const re = /12:00:00/

    let componentChange
    if (showCard === 'Charts') {
      componentChange = <Charts weatherData={weatherData} re={re}/>
    } else if (showCard === 'Cards') { 
      componentChange = <Cards weatherData={weatherData} re={re}/>
    }

    return (
        <>
            <h1 className="text-5xl text-gray-800 mt-auto mb-4">
            At this moment
            </h1>,
            <DetailCard weather_icon={weatherIcon} data={weatherData} />,
            <h1 className="text-3xl text-gray-600 mb-4 mt-10">
            More On {city}
            </h1>,
            {componentChange}
        </>
    )
}

export default GeneralCard