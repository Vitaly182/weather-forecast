

const HistoryItem = ({historyData}) => {


    return (
        <div className="history">
            <div className='history__create'>
                <a href={historyData.screen}>{historyData.created_at}</a>
            </div>
        </div>
    )
}

export default HistoryItem