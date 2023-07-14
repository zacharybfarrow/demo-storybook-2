import { MainColors } from "../../../../atoms/atoms";
import Icon from "../../Icon";
import "./stackedIcons.css";

export default function IconRadius1Radius3() {
  return (
    <div style={{ position: "relative" }}>
      <Icon
        name="MaskedIconsFonts01"
        className="stacked-icon"
        fill={MainColors["PRIMARY"]}
        height="10em"
        width="10em"
      />
      <Icon
        name="MaskedIconsFonts03"
        className="stacked-icon"
        fill={MainColors["ACTION"]}
        height="10em"
        width="10em"
      />
    </div>
  );
}
