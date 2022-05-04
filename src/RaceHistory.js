import { useEffect, useState } from "react"
import raceService from "./service"

export default function RaceHistory() {
    const [races, setRaces] = useState([])
    useEffect(() => {
        raceService
            .getAll()
            .then(history => setRaces(history))
    }, [])
    return (
        <table id ="listhorses">
            <thead>
                <tr><th>Race history:</th></tr>
                <tr>
                    <th>Date</th>
                    <th>Place</th>
                    <th>Winner</th>
                    <th>Horses</th>
                </tr>
            </thead>
            <tbody>
                {races.map(race => {
                    return <tr key = {race.id}>
                        <td>{race.date.toString().substr(0,10)}</td>
                        <td>{race.place}</td>
                        <td>{race.winner.pickedColor} {race.winner.pickedName}</td>
                        <td>{race.horses.length}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}