import React from 'react';

function Popup({ selected, closePopup }) {
  return (
    <section className='popup'>
      <div className='content'>
        <h2>
          {selected.FirstName} {selected.LastName}- <span>#{selected.Jersey}</span>
        </h2>
        <p className='bio'>{selected.BirthDate}</p>
        <p className='bio'>
          {selected.BirthCity}, {selected.BirthCountry}
        </p>

        <div className='stats'>
          <img src={selected.PhotoUrl} />
          <div>
            <h3>Position:</h3>
            <p>{selected.Position}</p>
          </div>
          <div>
            <h3>Height:</h3>
            <p>{selected.Height}"</p>
          </div>
          <div>
            <h3>Weight:</h3>
            <p>{selected.Weight}lbs</p>
          </div>
          <div>
            <h3>Bats:</h3>
            <p>{selected.BatHand}</p>
          </div>
          <div>
            <h3>Throws:</h3>
            <p>{selected.ThrowHand}</p>
          </div>
          
        </div>
        <button className='close' onClick={closePopup}>
          Close
        </button>
      </div>
    </section>
  );
}

export default Popup;
