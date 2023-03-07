import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import StrikethroughSIcon from "@mui/icons-material/StrikethroughS";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";

import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";

import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";
import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";
import FormatLineSpacingIcon from "@mui/icons-material/FormatLineSpacing";
import FormatSizeIcon from "@mui/icons-material/FormatSize";

import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";

export const Icon = [
  {
    Icons: <FormatBoldIcon />,
    action: "bold",
  },
  {
    Icons: <FormatItalicIcon />,
    action: "italic",
  },
  {
    Icons: <FormatUnderlinedIcon />,
    action: "underline",
  },
  {
    Icons: <StrikethroughSIcon />,
    action: "strikeThrough",
  },
  {
    Icons: <FormatListBulletedIcon />,
    action: "InsertUnorderedList",
  },
  {
    Icons: <FormatListNumberedIcon />,
    action: "insertOrderedList",
  },

  {
    Icons: <UndoIcon />,
    action: "undo",
  },
  {
    Icons: <RedoIcon />,
    action: "redo",
  },
  {
    Icons: <FormatColorFillIcon />,
    action: "Highlight",
  },

  {
    Icons: <FormatIndentDecreaseIcon />,
    action: "outdent",
  },
  {
    Icons: <FormatIndentIncreaseIcon />,
    action: "indent",
  },
  {
    Icons: <FormatLineSpacingIcon />,
    action: "LineHeight",
  },
  {
    Icons: <FormatSizeIcon />,
    action: "FontSize",
  },
];
