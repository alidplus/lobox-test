import { defaultIconProps, IconProps } from "../types";

export default function GameIcon(props: IconProps) {
  const {
    width,
    height,
    fill
  } = {
    ...defaultIconProps,
    ...props
  }

  return (
    <svg fill={fill} width={width} height={height} viewBox="0 0 512 512">
			<path d="M510.441,322.894l-29.76-126.56c-15.073-56.252-66.047-95.363-124.286-95.363H155.604
				c-58.239,0-109.212,39.11-124.285,95.363l-29.76,126.56c-7.618,36.303,13.34,72.524,48.626,84.001l1.74,0.558
				c32.658,10.632,68.288-3.07,85.429-32.831l25.894-38.289c6.502-11.288,18.538-18.25,31.55-18.25h122.406
				c13.012,0,25.048,6.962,31.549,18.25l25.894,38.289c17.142,29.761,52.779,43.463,85.438,32.831l1.732-0.558
				C497.1,395.418,518.06,359.197,510.441,322.894z M191.046,238.081h-41.689v41.696h-36.295v-41.696H71.373v-36.279h41.689v-41.68
				h36.295v41.68h41.689V238.081z M374.728,151.436c12.626,0,22.847,10.221,22.847,22.848c0,12.61-10.221,22.831-22.847,22.831
				c-12.61,0-22.831-10.221-22.831-22.831C351.897,161.656,362.118,151.436,374.728,151.436z M329.049,242.801
				c-12.61,0-22.839-10.23-22.839-22.856c0-12.602,10.229-22.831,22.839-22.831c12.618,0,22.839,10.229,22.839,22.831
				C351.889,232.572,341.668,242.801,329.049,242.801z M374.728,288.471c-12.61,0-22.831-10.221-22.831-22.831
				c0-12.627,10.221-22.848,22.831-22.848c12.626,0,22.847,10.221,22.847,22.848C397.575,278.25,387.354,288.471,374.728,288.471z
				M420.406,242.801c-12.61,0-22.832-10.23-22.832-22.856c0-12.602,10.222-22.831,22.832-22.831
				c12.618,0,22.847,10.229,22.847,22.831C443.253,232.572,433.024,242.801,420.406,242.801z"/>
    </svg>
  )
}