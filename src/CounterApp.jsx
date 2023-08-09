import {useState} from "react";
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {
      const [counter, setCounter] = useState(value)
      /*sum +1 counter*/
      const addCounter = () => setCounter(c => c + 1)
      /*rest -1 counter*/
      const restCounter = () => counter > 0 ? setCounter(counter - 1) : setCounter(0)
      /*assign counter to 0*/
      const resetCounter = () => setCounter(value)

      return (
          <div>
            <h1>Counter APP</h1>
            <h2>{counter}</h2>
            <div className={'buttonContainer'}>
              <button
                  aria-label={'btnAdd'}
                  onClick={addCounter}
              >+1
              </button>
              <button
                  aria-label={'btnRest'}
                  onClick={restCounter}
              >-1
              </button>
              <button
                  aria-label={'btnReset'}
                  onClick={resetCounter}
              >Reset
              </button>

            </div>

          </div>
      );
    }
;

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;