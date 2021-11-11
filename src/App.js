import Card from "./UI/Card/Card";
import Form from "./Components/Form";
import classes from './App.css';

function App() {
  return (
      <Card classname={classes.login}>
          <Form />
      </Card>
  )
}

export default App;
