import { useState } from "react";
import Select from "../select";
import { CustomItems } from "../select/stories";




export default function SingleSelectPresentation() {
  const [value, setValue] = useState('k3')
  const [options] = useState(CustomItems.args?.options)
  return (
    <>
      <Select
        value={value}
        options={options}
        onChange={setValue}
        render={CustomItems.args?.render}
      />

    </>
  )
}