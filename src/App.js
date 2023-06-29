
import './App.css';
function Fun({ name, nameforClass, income = 400000 }) {
  return (
    <>
      <div className={nameforClass}>{name}:{income}</div>
      <hr />
    </>
  );
}

function App() {
  return (
    <div>
      Hello<Fun name={"Chandan"} nameforClass={"class1"} income={200000} />
      <Fun name={"Raushan"} nameforClass={"calss2"} />  Gyus </div>

  );
}

export default App;
