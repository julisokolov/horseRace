export default function ListHorses({horses, betHorse}) {
    return (
        <table id ="listhorses">
            <thead>
                <tr><th>Horses in the race:</th></tr>
            </thead>
            <tbody>
                {horses.map(horse => {
                    return <tr key = {horse.pickedName}>
                        <td>{horse.pickedColor} {horse.pickedName}<button onClick={() => betHorse(horse)}>Bet</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}