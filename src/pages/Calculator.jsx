import { useEffect, useState } from "react";
import Numbers from "../components/calculator/Numbers";

export default function Calculator() {
  const [preState, setPreState] = useState("");
  const [curState, setCurState] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  const inputNum = (e) => {
    if (curState.includes(".") && e.target.innerText === ".") return;

    if (total) {
      setPreState("");
    }
    curState
      ? setCurState((pre) => pre + e.target.innerText)
      : setCurState(e.target.innerText);
    setTotal(false);
  };

  useEffect(() => {
    setInput(curState);
  }, [curState]);

  useEffect(() => {
    setInput("0");
  }, []);

  const operatorType = (e) => {
    setTotal(false);
    setOperator(e.target.innerText);
    if (curState === "") return;
    if (preState !== "") {
      equals();
    } else {
      setPreState(curState);
      setCurState("");
    }
  };

  const equals = () => {
    if (total) {
      setTotal(false);
      return;
    }
    if (curState === "" || preState === "" || operator === null) return;
    let cal;
    switch (operator) {
      case "/":
        if (curState === "0") {
          cal = "NaN";
        } else {
          cal = String(parseFloat(preState) / parseFloat(curState));
        }
        break;

      case "+":
        cal = String(parseFloat(preState) + parseFloat(curState));
        break;
      case "x":
        cal = String(parseFloat(preState) * parseFloat(curState));
        break;
      case "-":
        cal = String(parseFloat(preState) - parseFloat(curState));
        break;
      default:
        return;
    }
    setInput("");
    setPreState(cal);
    setCurState("");
  };

  const minusPlus = () => {
    if (curState.charAt(0) === "-") {
      setCurState(curState.substring(1));
    } else {
      setCurState("-" + curState);
    }
  };
  const percent = () => {
    preState
      ? setCurState(String((parseFloat(curState) / 100) * preState))
      : setCurState(String(parseFloat(curState) / 100));
  };

  const reset = () => {
    setPreState("");
    setCurState("");
    setInput("0");
    setOperator(null);
  };

  return (
    <section className="px-4 mt-5">
      <div className="max-w-[26rem] mx-auto bg-neutral-300">
        {/* Place holder will be here */}
        <div className="grid py-4 bg-gray-500">
          <p className="ml-auto px-4 text-4xl text-white">
            {input !== "" || input === "0" ? input : preState}
          </p>
        </div>
        <Numbers
          inputNum={inputNum}
          operatorType={operatorType}
          minusPlus={minusPlus}
          percent={percent}
          reset={reset}
          equals={equals}
        />
      </div>
    </section>
  );
}
