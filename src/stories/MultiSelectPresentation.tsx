import { useState } from "react";
import Select from "../select";
import { CustomItemsAndMultiSelect as CustomItems } from "../select/stories";

export default function MultiSelectPresentation() {
  const [value, setValue] = useState(['k3'])
  const [options] = useState(CustomItems.args?.options)
  return (
    <>
      <Select
        multi
        value={value}
        options={options}
        onChange={setValue}
        render={CustomItems.args?.render}
      />

    </>
  )
}