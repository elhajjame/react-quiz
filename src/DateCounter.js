import { useReducer } from "react";
import "./index.css";
// import { type } from "@testing-library/user-event/dist/type";
// import { useReducer, useState } from "react";
// function reducer(state, action) {
//   console.log(state, action);
//   if (action.type === "inc") return state + action.payload;
//   if (action.type === "dec") return state - action.payload;
//   if (action.type === "setCount") return action.payload;
// }
// function DateCounter() {
//   // const [count, setCount] = useState(0);
//   //reducer is a function 0 is the initial state
//   // so the useReducer it return count which is the initial state and
//   //  dispatch function that can use to update the state
//   // so the idea of the reducer is to take current state plus action and based on that return the next state
//   const initialState = { count: 0, step: 1 };
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const {count, step}=state
//   // const [step, setStep] = useState(1);

//   // This mutates the date object.
//   const date = new Date("june 21 2027");
//   date.setDate(date.getDate() + count);

//   const dec = function () {
//     dispatch({ type: dec, payload: -1 });

//     // setCount((count) => count - 1);
//     // setCount((count) => count - step);
//   };

//   const inc = function () {
//     dispatch({ type: inc, payload: 1 });
//     // setCount((count) => count + 1);
//     // setCount((count) => count + step);
//   };

//   const defineCount = function (e) {
//     dispatch({ type: "setCount", payload: Number(e.target.value) });
//     // setCount(Number(e.target.value));
//   };

//   const defineStep = function (e) {
//     setStep(Number(e.target.value));
//   };

//   const reset = function () {
//     // setCount(0);
//     setStep(1);
//   };

//   return (
//     <div className="counter">
//       <div>
//         <input
//           type="range"
//           min="0"
//           max="10"
//           value={step}
//           onChange={defineStep}
//         />
//         <span>{step}</span>
//       </div>

//       <div>
//         <button onClick={dec}>-</button>
//         <input value={count} onChange={defineCount} />
//         <button onClick={inc}>+</button>
//       </div>

//       <p>{date.toDateString()}</p>

//       <div>
//         <button onClick={reset}>Reset</button>
//       </div>
//     </div>
//   );
// }

// 1. Reducer function

// 1. Reducer function
// 2. Initial state
const initialState = { count: 0, step: 1 };
function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return {
        ...state,
        count: state.count + state.step,
      };

    case "dec":
      return {
        ...state,
        count: state.count - state.step,
      };

    case "setCount":
      return {
        ...state,
        count: action.payload,
      };

    case "setStep":
      return {
        ...state,
        step: action.payload,
      };
    case "reset":
      return  initialState ;
    default:
      throw new Error("unknown error");
  }
}

// 3. Component
export default function DateCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { count, step } = state;

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec" });
  };

  const inc = function () {
    dispatch({ type: "inc" });
  };

  const defineCount = function (e) {
    dispatch({
      type: "setCount",
      payload: Number(e.target.value),
    });
  };

  const defineStep = function (e) {
    dispatch({
      type: "setStep",
      payload: Number(e.target.value),
    });
  };

  const reset = function () {
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />

        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>

        <input value={count} onChange={defineCount} />

        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
