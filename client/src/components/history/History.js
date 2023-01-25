import { useState, useEffect } from "react";
import HistoryItem from "../historyitem/HistoryItem";


const History = ({historyData}) => {
    const [title, setTitle] = useState('NO HISTORY YET')

    useEffect(() => {
        if (historyData) {
            setTitle('HISTORY')
        } else {
            setTitle('NO HISTORY YET')
        }
      }, [historyData])


    return (

        <div>
            <h1 style={{ textAlign: 'center', margin: '15px' }}>
                {title}
            </h1>

            <div className='history'>
                <h1 style={{ textAlign: 'center' }}>
                    DATE OF CREATION
                </h1>
            </div>

            {historyData.map(historyData =>
                <HistoryItem key={historyData.id} historyData={historyData} />
            )}
            
        </div>
    )
}

export default History