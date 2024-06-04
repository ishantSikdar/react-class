import './App.css'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom, jobsAtom, messagingAtom, networkAtom, notificationAtom, totalCountSelector } from './store'

function App() {

  // hardcoded values
  // const networkCount = useRecoilValue(networkAtom);   // gets only state value
  // const jobCount = useRecoilValue(jobsAtom);  
  // const messagesCount = useRecoilValue(messagingAtom);
  // const [notifCount, setNotifCount] = useRecoilState(notificationAtom); // gets both value and update value function


  // async recoil state management
  const notifications = useRecoilValue(countAtom);

  return (
    <>
      <button>Home</button>
      <button>Network ({notifications.network})</button>
      <button>Jobs ({notifications.jobs})</button>
      <button>Messages ({notifications.messaging})</button>
      <button>Notifications ({notifications.notifications})</button>
      <button>Me</button>

      {/* <UpdateButton /> */}
    </>
  )
}


function UpdateButton() {
  const totalCount = useRecoilValue(totalCountSelector); // retrieving value of selector
  const setJobCount = useSetRecoilState(jobsAtom); // gets the update value function
  return <button onClick={
    () => setJobCount(p => p + 1)}
  >Me ({totalCount})
  </button>
}
export default App
