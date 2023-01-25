import History from "../history/History";
import GeneralCard from "../generalcard/GeneralCard";
import { useEffect, useState } from "react";
import html2canvas from "html2canvas";


function Common({ weatherData, noData, weatherIcon, city }) {

  const URL_SAVE_SCREEN = process.env.REACT_APP_URL_SAVE_SCREEN
  const URL_HISTORY = process.env.REACT_APP_URL_HISTORY;
  const [showCard, setShowCard] = useState('Charts')
  const [show, setShow] = useState('GeneralCard')
  const [historyData, setHistoryData] = useState([]);
  const [image, setImage] = useState(null)
  const [skipCount, setSkipCount] = useState(true);

 
  let bigChange
  if (show === 'History') {
    bigChange = <History historyData={historyData}/>
  } else if (show === 'GeneralCard') {
    bigChange = <GeneralCard weatherData={weatherData} weatherIcon={weatherIcon} city={city} showCard={showCard}/>
  }

  const Charts = () => {
    setShow('GeneralCard')
    setShowCard('Charts')
  }

  const Cards = () => {
    setShow('GeneralCard')
    setShowCard('Cards')
  }

  const getHistory = async () => {
    try {

      const headers = { 'Content-Type': 'application/json' }
      const res = await fetch(
        `${URL_HISTORY}`, {
          method : "GET",
          mode: 'cors',
          headers: headers
      }
      );
      const history = await res.json();
      setHistoryData(history);
      setShow('History')
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setShow('GeneralCard')
  }, [weatherData])


  const downloadScreen = () => {
    html2canvas(document.body).then(function(canvas) {
      const a = document.createElement('a')
      a.href = canvas.toDataURL("..assets/image/jpeg").replace("image/jpeg, image/octet-stream")
      a.download = 'screen.jpg'
      a.click()
    })
  }



const handleSubmit = async () => {

  const uploadData = new FormData();
  uploadData.append('screen', image);
  
  await fetch(`${URL_SAVE_SCREEN}`, {
    method: 'POST',
    body: uploadData
  })
  .then(res => {
      const status = res.status;
      if (status === 200 | status === 201) {
        alert("Image successfully save")
      } else {
        alert("Something go wrong, image wasn't save")
      }
  })
  .catch(error => console.log(error))
}


useEffect(() => {
  if (skipCount) setSkipCount(false);
  if (!skipCount) handleSubmit(); 
}, [image]);




  return (
    <div className="w-2/4 p-5">
      <ul className="flex ml-auto w-full font-bold">
        <button className="text-xs text-gray-800 ml-auto mr-6 border-b-2 border-green-400 cursor-pointer">
          Weather
        </button>
        <button onClick={() => Charts()} className="text-xs text-gray-800 mr-6 cursor-pointer border-b-2 hover:border-green-400">
          Charts
        </button>
        <button onClick={() => Cards()} className="text-xs text-gray-800 mr-6 cursor-pointer border-b-2 hover:border-green-400">
          Days
        </button>
        <button onClick={() => downloadScreen()} type="submit" className="text-xs text-gray-800 mr-6 cursor-pointer border-b-2 hover:border-green-400">
          Download screen
        </button>
        <label className="text-xs text-gray-800 mr-6 cursor-pointer border-b-2 hover:border-green-400">
          Save screen
          <input type="file" style={{display: 'none'}} onChange={(evt) => setImage(evt.target.files[0])}/>
        </label>
        <button onClick={() => getHistory()} className="text-xs text-gray-800 cursor-pointer border-b-2 hover:border-green-400">
          History screens
        </button>
      </ul>
      <div className="flex flex-col my-10">
        {weatherData.length === 0 && show !== 'History' ? (
          <div className="container p-4 flex items-center justify-center h-1/3 mb-auto">
            <h1 className="text-gray-300 text-4xl font-bold uppercase">
              {noData}
            </h1>
          </div>
        ) : (
          <>
            {bigChange}
          </>
        )}
      </div>
    </div>
  );
}

export default Common;

