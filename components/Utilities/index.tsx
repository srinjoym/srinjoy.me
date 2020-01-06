import React, {FunctionComponent} from "react"

type ButtonProps = {
  text: String
}

export const Button:FunctionComponent<ButtonProps> = ({text}) => (
  <button className="bg-transparent hover:bg-blue-500 text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded">
    {text}
  </button>
)
