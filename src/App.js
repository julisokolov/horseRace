import RaceCreator from './RaceCreator'

/*
•	Users are able to create a race (place and time)
•	Users are able to enter horses participating in (name color)
•	All horses entered are also stored in the database
•	You can bet only on one horse
•	Horse race: system computes race results with a random function.
•	The system shows the user race results: the user wins upon picking the winner horse and loses in all other circumstances.
•	All race results will be saved to the database
•	All race results can be browsed in the UI (bonus points)
•	At least some of the application is covered by tests (bonus points)
•	Application is deployed (to heroku, aws etc) (bonus points)
*/

function App() {
	return (
		<div>
			<RaceCreator/>
		</div>
	);
}

export default App;
