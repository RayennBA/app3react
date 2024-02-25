import './App.css';
import Detail from './Components/detail';
import light from './Assets/Icons/bolt-solid.svg';
import memory  from './Assets/Icons/brain-solid.svg';
import verbal  from './Assets/Icons/comment-regular.svg';
import visual  from './Assets/Icons/eye-regular.svg';


function App() {
  return (
    <div className="App">
      <div class="result">
        <p class="score">Your Result :</p>
        <div className='circle'>
          <p>76 </p>
          <p> of 100</p>
          </div>
        <h2 class="level">Great</h2>
        <p class="percentile">You scored higher than 65% of the people who have taken these tests.</p>
      </div>


      <div className="summary">
        <h3>Summary</h3>
        <div className='summ'>
          <Detail 
          image = {light}
          nom = {"Reaction"}
          number = {"80"}
          bgColor= "209, 142, 142"
          textColor= "195, 70, 70"
          />
          <Detail
          image = {memory}
          nom = {"Memory"}
          number = {"92"}
          bgColor= "246, 240, 134"
          textColor= "213, 186, 8"
          />
          <Detail 
          image = {verbal}
          nom = {"Verbal"}
          number = {"61"}
          bgColor= "84, 224, 80"
          textColor= "13, 138, 9"
          />
          <Detail
          image = {visual}
          nom = {"Visual"}
          number = {"61"}
          bgColor= "43, 131, 255"
          textColor= "42, 27, 255"
          />
          <button>Continue</button>
        </div>
      </div>
    </div>

  )
 
}

export default App;
