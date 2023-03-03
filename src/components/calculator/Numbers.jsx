import React from "react";

export default function Numbers({
  inputNum,
  operatorType,
  minusPlus,
  percent,
  reset,
  equals
}) {
  return (
    <div>
      {/* numbers will be here */}
      <div className="grid grid-cols-4">
        <div className="flex flex-col items-stretch">
          <div
            onClick={reset}
            className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500"
          >
            AC
          </div>
          <div
            onClick={inputNum}
            className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500"
          >
            7
          </div>
          <div
            onClick={inputNum}
            className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500"
          >
            4
          </div>
          <div
            onClick={inputNum}
            className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500"
          >
            1
          </div>
        </div>
        <div className="flex flex-col items-stretch">
          <div
            onClick={minusPlus}
            className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500"
          >
            +/-
          </div>
          <div
            onClick={inputNum}
            className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500"
          >
            8
          </div>
          <div
            onClick={inputNum}
            className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500"
          >
            5
          </div>
          <div
            onClick={inputNum}
            className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500"
          >
            2
          </div>
        </div>
        <div className="flex flex-col items-stretch">
          <div
            onClick={percent}
            className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500"
          >
            %
          </div>
          <div
            onClick={inputNum}
            className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500"
          >
            9
          </div>
          <div
            onClick={inputNum}
            className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500"
          >
            6
          </div>
          <div
            onClick={inputNum}
            className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500"
          >
            3
          </div>
        </div>
        <div
          onClick={operatorType}
          className="flex flex-col items-stretch text-white bg-orange-400"
        >
          <div className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500">
            /
          </div>
          <div
            onClick={operatorType}
            className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500"
          >
            x
          </div>
          <div
            onClick={operatorType}
            className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500"
          >
            -
          </div>
          <div
            onClick={operatorType}
            className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500"
          >
            +
          </div>
        </div>
      </div>
      {/* Footer and the stuff will be here */}
      <div className="grid grid-cols-4">
        <div
          onClick={inputNum}
          className="col-span-2 border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500"
        >
          0
        </div>
        <div className="border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500">
          .
        </div>
        <div
          onClick={equals}
          className=" border text-center py-8  font-semibold cursor-pointer text-2xl border-gray-500"
        >
          =
        </div>
      </div>
    </div>
  );
}
