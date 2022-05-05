import { useState } from "react"

export default function HorsePicker({handleAdding, notification, onClick}) {
    const [name, setName] = useState('')
    const [horseColor, setHorseColor] = useState('Red')

    const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Brown', 'Black', 'White', 'Pink', 'Purple']

    const handleColorChange = (event) => {
        setHorseColor(event.target.value)
    }

    return (
        <table id = "pickhorse">
            <tbody>
                <tr><td className="inputheader">Enter horse name:</td></tr>
                <tr>
                    <td><input onChange={e => setName(e.target.value)} /></td>
                </tr>
                <tr><td className="inputheader">Choose horse color:</td></tr>
                <tr>
                    <td>
                        <select value = {horseColor} onChange = {handleColorChange}>
                            {colors.map((color, index) => 
                                <option key = {index} value={color.value}>{color}</option>
                            )}
                        </select>
                    </td>
                </tr>
                <tr>
                    <td><button type = "submit" onClick={() => handleAdding(name, horseColor)}>Add</button></td>
                </tr>
                <tr><td><button type = "submit" onClick={onClick}>Back</button></td></tr>
                <tr><td>{notification !== '' ? <div className="notification">{notification}</div> : <div></div>}</td></tr>
            </tbody>
        </table>
    )
}