// <?xml version="1.0" encoding="utf-8"?>

// <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
// <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
// <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
// 	 width={width} height={height} viewBox="0 0 512 512"  xml:space="preserve">
// <style type="text/css">
// <![CDATA[
// 	.st0{fill:#000000;}
// ]]>
// </style>
// <g>
// 	<path classname="st0" d="M0,0v512h512V0H0z M464,464H307.891V332.422H204.109V464H48V48h416V464z"/>
// 	<polygon classname="st0" points="228.859,232.422 283.141,232.422 283.141,183.563 332,183.563 332,129.281 283.141,129.281 
// 		283.141,80.422 228.859,80.422 228.859,129.281 180,129.281 180,183.563 228.859,183.563 	"/>
// 	<rect x="99.406" y="192.422" classname="st0" width="40.063" height="72.828"/>
// 	<rect x="99.406" y="363.594" classname="st0" width="40.063" height="72.828"/>
// 	<rect x="372.531" y="192.422" classname="st0" width="40.063" height="72.828"/>
// 	<rect x="372.531" y="363.594" classname="st0" width="40.063" height="72.828"/>
// </g>
// </svg>
import { defaultIconProps, IconProps } from "../types";

export default function HospitalIcon(props: IconProps) {
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
			<path d="M0,0v512h512V0H0z M464,464H307.891V332.422H204.109V464H48V48h416V464z"/>
			<polygon points="228.859,232.422 283.141,232.422 283.141,183.563 332,183.563 332,129.281 283.141,129.281 
				283.141,80.422 228.859,80.422 228.859,129.281 180,129.281 180,183.563 228.859,183.563 	"/>
			<rect x="99.406" y="192.422" width="40.063" height="72.828"/>
			<rect x="99.406" y="363.594" width="40.063" height="72.828"/>
			<rect x="372.531" y="192.422" width="40.063" height="72.828"/>
			<rect x="372.531" y="363.594" width="40.063" height="72.828"/>
    </svg>
  )
}