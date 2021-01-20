import { memo } from "react";
import { useStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

const Character = memo(
  ({ chr, id, chrsTyped }) => {
    const classes = useStyles();
    let CharTypography;

    if (id == chrsTyped.length) {
      CharTypography = NextCharTypography;
    } else if (id >= chrsTyped.length) {
      CharTypography = Typography;
    } else if (chrsTyped[id] === chr) {
      CharTypography = CorrectTextTypography;
    } else {
      CharTypography = IncorrectTextTypography;
    }

    return (
      <CharTypography className={classes.lyric} color={"textSecondary"}>
        {chr}
      </CharTypography>
    );
  },
  (props, nextProps) => {
    /** Significant pref boost avoiding render
     * We only needs re-render a sliding window of 3 characters
     * from where user needs to type
     */
    if (
      props.id == nextProps.chrsTyped.length - 1 ||
      props.id == nextProps.chrsTyped.length ||
      props.id == nextProps.chrsTyped.length + 1
    ) {
      // Return false to re-render
      return false;
    } else {
      // Return true to avoid re-render
      return true;
    }
  }
);

export default Character;
