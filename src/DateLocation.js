import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateLocation({date, place, changeDate, changePlace, onClick}) {

    return (
        <table id = "pickhorse">
            <tbody>
                <tr><td className="inputheader">Select date:</td></tr>
                <tr>
                    <td>
                    <DatePicker
                            showTimeSelect
                            dateFormat="MMMM d, yyyy h:mmaa"
                            filterDate={d => {
                                return new Date() < d;
                            }}
                            isClearable
                            selected={date}
                            onChange={date => changeDate(date)}
                        />
                    </td>
                </tr>
                <tr><td className="inputheader">Enter location:</td></tr>
                <tr>
                    <td><input value = {place} onChange = {e => changePlace(e.target.value)} /></td>
                </tr>
                <tr><td><button type="submit" onClick = {onClick}>Create</button></td></tr>
            </tbody>
        </table>
    );
}