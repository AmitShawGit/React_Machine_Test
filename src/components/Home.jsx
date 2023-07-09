import React from 'react'
// Two array has been given display the aaray element dynamically in radio button

let sports = ["Cricket", "FootBall", "Golf"];
let days = ["monday", "tuesday", "wednesday"];


const Home = () => {
    let [sport, setSport] = React.useState();
    let [day, setDays] = React.useState();

    let inputSport = (e) => {
        setSport(e.target.value);
        console.log(e.target.value);
    }
    let inputDay = (f) => {
        setDays(f.target.value)
        console.log(f);
    }

    return (
        <div>
            <p>You Selected {sport} which will played on {day}</p>
            {sports.map((elem, id) => {
                return (<>
                    <div key={id}>
                        <input type="radio" id={elem} name="game" value={elem} onChange={inputSport} />
                        <label htmlFor={elem}>{elem}</label>
                    </div>

                </>)
            })}
            {days.map((elem, id) => {
                return (<>
                    <div key={id}>
                        <input type="radio" id={elem} name="day" value={elem} onChange={inputDay} />
                        <label htmlFor={elem}>{elem}</label>
                    </div>

                </>)
            })}
        </div>
    )
}

export default Home;
