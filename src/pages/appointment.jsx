// states and hooks
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Appointment() {

  const [activePeriod, setActivePeriod] = useState(null)
  const [schedules, setSchedules] = useState([])

  const handlePeriodClick = (period) => {
    setActivePeriod(period)

    if (period === "Manhã"){
      setSchedules([
        '08:00', '08:30' , '09:00' , '09:30' , '10:00' , '10:30' , '11:00' , '11:30' , '12:00' , '12:30'  
      ])
    } else if (period === "Tarde"){
      setSchedules([
        '14:00' , '14:30' , '15:00' , '15:30' , '16:00' , '16:30' , '17:00' , '17:30' , '18:00', '18:30'  
      ])
    } else if (period === "Noite"){
      setSchedules([
         '19:00' , '19:30' , '20:00' , '20:30'   
      ])
    }
  }



  return (
    <div className="form">
      <div className="logo">logo here</div>
      <div className="appointmentPg">
        <div className="dayPeriod">
          <h3
            onClick={() => handlePeriodClick('Manhã')}
            className={activePeriod === 'Manhã' ? 'active' : ''}
          >
            Manhã
          </h3>
          <h3
            onClick={() => handlePeriodClick('Tarde')}
            className={activePeriod === 'Tarde' ? 'active' : ''}
          >
            Tarde
          </h3>
          <h3
            onClick={() => handlePeriodClick('Noite')}
            className={activePeriod === 'Noite' ? 'active' : ''}
          >
            Noite
          </h3>
        </div>
        {schedules.length > 0 && (
          <div className="schedules">
            <h4>Available Schedules:</h4>
            <ul>
              {schedules.map((schedule, index) => (
                <li key={index}>{schedule}</li>                          /* Link to the hour to schedule */
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="buttons-links">
        <Link to="/appointments">
          <svg
            width="59"
            height="59"
            viewBox="0 0 59 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="29.5" cy="29.5" r="29.5" fill="#021BFF" fill-opacity="0.62" />
            <path
              d="M22.2083 14V17.125M36.7917 14V17.125M17 35.875V20.25C17 19.4212 17.3292 18.6263 17.9153 18.0403C18.5013 17.4542 19.2962 17.125 20.125 17.125H38.875C39.7038 17.125 40.4987 17.4542 41.0847 18.0403C41.6708 18.6263 42 19.4212 42 20.25V35.875M17 35.875C17 36.7038 17.3292 37.4987 17.9153 38.0847C18.5013 38.6708 19.2962 39 20.125 39H38.875C39.7038 39 40.4987 38.6708 41.0847 38.0847C41.6708 37.4987 42 36.7038 42 35.875M17 35.875V25.4583C17 24.6295 17.3292 23.8347 17.9153 23.2486C18.5013 22.6626 19.2962 22.3333 20.125 22.3333H38.875C39.7038 22.3333 40.4987 22.6626 41.0847 23.2486C41.6708 23.8347 42 24.6295 42 25.4583V35.875M29.5 27.5417H29.5111V27.5528H29.5V27.5417ZM29.5 30.6667H29.5111V30.6778H29.5V30.6667ZM29.5 33.7917H29.5111V33.8028H29.5V33.7917ZM26.375 30.6667H26.3861V30.6778H26.375V30.6667ZM26.375 33.7917H26.3861V33.8028H26.375V33.7917ZM23.25 30.6667H23.2611V30.6778H23.25V30.6667ZM23.25 33.7917H23.2611V33.8028H23.25V33.7917ZM32.625 27.5417H32.6361V27.5528H32.625V27.5417ZM32.625 30.6667H32.6361V30.6778H32.625V30.6667ZM32.625 33.7917H32.6361V33.8028H32.625V33.7917ZM35.75 27.5417H35.7611V27.5528H35.75V27.5417ZM35.75 30.6667H35.7611V30.6778H35.75V30.6667Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
        <Link to="/profile">
          <svg
            width="59"
            height="59"
            viewBox="0 0 59 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="29.5" cy="29.5" r="29.5" fill="#BAAEAE" />
            <path
              d="M34.2506 18.8077C34.2506 20.0828 33.7501 21.3056 32.8592 22.2072C31.9683 23.1089 30.7599 23.6154 29.5 23.6154C28.2401 23.6154 27.0317 23.1089 26.1408 22.2072C25.2499 21.3056 24.7494 20.0828 24.7494 18.8077C24.7494 17.5326 25.2499 16.3098 26.1408 15.4081C27.0317 14.5065 28.2401 14 29.5 14C30.7599 14 31.9683 14.5065 32.8592 15.4081C33.7501 16.3098 34.2506 17.5326 34.2506 18.8077ZM20 36.9077C20.0407 34.385 21.0595 31.9797 22.8367 30.2103C24.6138 28.4409 27.007 27.4493 29.5 27.4493C31.993 27.4493 34.3862 28.4409 36.1633 30.2103C37.9405 31.9797 38.9593 34.385 39 36.9077C36.0196 38.2907 32.7788 39.0045 29.5 39C26.1099 39 22.8922 38.2513 20 36.9077Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Appointment;