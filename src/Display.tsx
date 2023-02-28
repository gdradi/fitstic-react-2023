export const Display: React.FunctionComponent<{
    counter: number
  }> = (props) => {
    console.log("Display!");
    return <div className="display">
      <span className="hint">Valore: </span>
      <span className="value">{props.counter}</span>
    </div>
  };