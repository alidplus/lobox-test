import { useState } from "react";
import Select from "../select";
import { CustomItems } from "../select/stories";




export default function SelectPresentation() {
  const [value, setValue] = useState(CustomItems.args?.value)
  const [options] = useState(CustomItems.args?.options)
  return (
    <Select
      value={value}
      options={options}
      onChange={item => setValue(item.key)}
      render={CustomItems.args?.render}
    />
  )
}