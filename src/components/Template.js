
import { createMachine, assign, interpret } from "xstate";
import { useMachine } from "@xstate/react";

export const callMachin = createMachine({
  id: "counter",
  initial: "active",
  context: {
    count: 0,
  },
  states: {
    active: {
      on: {
        INC: {
            actions: assign({ count: ctx => ctx.count + 1 })
        },
        DEC: {
            actions: assign({ count: ctx => ctx.count - 1 })
        },
      },
    },
  },
});

export default function Template() {
    console.log(callMachin);
  const [state, send] = useMachine(callMachin);
  const handleIncrease = () => {
    send("INC");
    console.log(state.context.count);
  };
  const handleDecrease = () => {
    send("DEC");
    console.log(state.context.count);
  };

  console.log(state);
  return (
    <div>
      <input
      type="text"
        value={state.context.count}
        style={{ display: "block", margin: "auto" }}
      />
      <br />
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>DEcrease</button>
    </div>
  );
}
