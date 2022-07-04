import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";

export default function Hero(){
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <div className = "flex flex-row flex-wrap justify-center items-start">
      {/* text container */}
      <div className = "w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        <RoughNotationGroup show ={true}>
          <RainbowHighlight color={colors[0]}>
            <h1 className ="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Developer
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
      <div className = "w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        <RoughNotationGroup show ={true}>
          <RainbowHighlight color={colors[1]}>
            <h1 className ="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Scientist
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
      <div className = "w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        <RoughNotationGroup show ={true}>
          <RainbowHighlight color={colors[3]}>
            <h1 className ="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              DataFiend
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
      <div className = "w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        <RoughNotationGroup show ={true}>
          <RainbowHighlight color={colors[4]}>
            <h1 className ="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Craftswoman
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
    </div>
  )
}