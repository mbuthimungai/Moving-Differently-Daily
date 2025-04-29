import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import colors from "../colors";
const LocationIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={124}
    height={124}
    fill="none"
    {...props}
  >
    <Circle cx={62} cy={62} r={62} fill={colors.secondaryColor} />
    <Circle cx={62} cy={62} r={62} fill={colors.white} fillOpacity={0.5} />
    <Path
      fill={colors.secondaryColor}
      stroke={colors.primaryColor}
      d="M59.46 85.688a1363.13 1363.13 0 0 0-6.646-9.595m6.646 9.595-.413.283.412-.283Zm0 0-6.646-9.595m0 0c-3.363-4.822-5.676-8.14-7.253-10.778m7.253 10.778L45.56 65.315m0 0c-1.22-2.043-1.981-3.65-2.44-5.209m2.44 5.21-2.44-5.21m0 0c-.457-1.554-.621-3.084-.621-4.981m.621 4.981-.621-4.981m0 0C42.5 44.835 50.786 36.5 61 36.5M42.5 55.125 61 36.5m0 0c10.214 0 18.5 8.336 18.5 18.625M61 36.5l18.5 18.625m0 0c0 1.897-.164 3.427-.621 4.981m.621-4.981-.621 4.981m0 0c-.459 1.558-1.22 3.166-2.44 5.21m2.44-5.21-2.44 5.21m0 0c-1.576 2.638-3.89 5.955-7.253 10.777m7.253-10.778-7.253 10.778m0 0c-1.872 2.685-4.07 5.835-6.646 9.595l6.646-9.595ZM61 63.593c4.651 0 8.417-3.794 8.417-8.468 0-4.674-3.766-8.469-8.417-8.469s-8.417 3.795-8.417 8.469c0 4.674 3.766 8.469 8.417 8.469Z"
    />
  </Svg>
);
export default LocationIcon;
