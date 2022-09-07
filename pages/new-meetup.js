// domain/new-meeting
import NewMeetupForm from '../components/meetups/NewMeetupForm';
const NewMeetupPage = () => {
    function addHandler(enteredData) {
        console.log(enteredData)
    }
    return (
        <NewMeetupForm onAddMeetup={addHandler} />
    )
}
export default NewMeetupPage