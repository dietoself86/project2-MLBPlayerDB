import React from 'react'

function Result({ result, openPopup }) {
    
    return (
        <div className='result' onClick={() => openPopup(result.PlayerID)}>
            <img src={result.PhotoUrl} />
            <h3>{result.FirstName} {result.LastName}</h3>
        </div>
    )
}

export default Result
