import { useState, useEffect } from "react"
import DateLocation from './DateLocation'
import HorsePicker from "./HorsePicker"
import ListHorses from "./ListHorses";
import RaceHistory from "./RaceHistory";
import raceService from "./service"

export default function RaceCreator() {
    const [pickHorses, setPickHorses] = useState(false)

    const [date, setDate] = useState(new Date());
    const [place, setPlace] = useState('');

    const [horses, setHorses] = useState([])

    const [notification, setNotification] = useState('')

    const [races, setRaces] = useState([])

    useEffect(() => {
        raceService
            .getAll()
            .then(history => setRaces(history))
    }, [])

    function handleAdding(name, color) {
        setHorses(horses.concat({ pickedName: name, pickedColor: color }))
    }

    function changeDate(date) {
        setDate(date)
    }

    function changePlace(place) {
        setPlace(place)
    }

    function betHorse(horse) {
        if (window.confirm(`Are you sure you want to bet on ${horse.pickedColor} ${horse.pickedName}?`)) {
            const random = horses[Math.floor(Math.random()*horses.length)]
            const race = {
                date: date,
                place: place,
                horses: horses,
                winner: random
            }
            raceService.create(race)
            setRaces(races.concat(race))
            if (random.pickedName === horse.pickedName && random.pickedColor === horse.pickedColor) {
                setNotification('Your horse won the race!')
            } else {
                setNotification('Your horse lost...')
            }
        }
    }

    function handleGoBack() {
        setHorses([])
        setPickHorses(false)
        setNotification('')
    }

    return (
        <div>
            {!pickHorses ?
            <DateLocation
                date = {date}
                place = {place}
                changeDate = {changeDate}
                changePlace = {changePlace}
                onClick = {() => setPickHorses(true)}/> :
            <div>
                <HorsePicker
                    horses = {horses}
                    handleAdding = {handleAdding}
                    notification = {notification}
                    onClick = {() => handleGoBack()}/>
                <ListHorses
                    horses = {horses}
                    betHorse = {betHorse}/>
                <RaceHistory races = {races}/>
            </div>
            }
        </div>
    );
}