import Icon from "../primitives/Icon/Icon";

export const colors = [
  { title: "Primary", value: "#09090b" },
  { title: "Secondary", value: "#fafafa" },
  { title: "Action", value: "#2563eb" },
  { title: "Accent", value: "#facc15" },
  { title: "Danger", value: "#dc2626" },
  { title: "Success", value: "#16a34a" },
  { title: "Warning", value: "#f97316" },
];

export const icons = [
  { name: 'ARROWBOTTOMLEFT', element: <Icon name='ARROWBOTTOMLEFT' /> },
  { name: 'ARROWBOTTOMRIGHT', element: <Icon name='ARROWBOTTOMRIGHT' /> },
  { name: 'ARROWDOWN', element: <Icon name='ARROWDOWN' /> },
  { name: 'ARROWLEFT', element: <Icon name='ARROWLEFT' /> },
  { name: 'ARROWRIGHT', element: <Icon name='ARROWRIGHT' /> },
  { name: 'ARROWTOPLEFT', element: <Icon name='ARROWTOPLEFT' /> },
  { name: 'ARROWTOPRIGHT', element: <Icon name='ARROWTOPRIGHT' /> },
  { name: 'ARROWUP', element: <Icon name='ARROWUP' /> },
  { name: 'AVATAR', element: <Icon name='AVATAR' /> },
  { name: 'CHECKCIRCLED', element: <Icon name='CHECKCIRCLED' /> },
  { name: 'CROSSCIRCLED', element: <Icon name='CROSSCIRCLED' /> },
  { name: 'EXCLAMATIONTRIANGLE', element: <Icon name='EXCLAMATIONTRIANGLE' /> },
  { name: 'EXTERNALLINK', element: <Icon name='EXTERNALLINK' /> },
  { name: 'INFOCIRCLED', element: <Icon name='INFOCIRCLED' /> },
  { name: 'SHARE1', element: <Icon name='SHARE1' /> },
  { name: 'TRASH', element: <Icon name='TRASH' /> },
  { name: 'E1XICOFONT', element: <Icon name='E1XICOFONT' />}
]

// import { Meta, ColorPalette, ColorItem } from '@storybook/blocks';
// import themeConfig from "../../tailwind.config.js"
// <Meta title="Atoms/Colors" />
// # color palette
// {themeConfig?.theme?.extend?.colors && (
//   <ColorPalette>
//     {Object.entries(themeConfig.theme.extend.colors).map(([k, v]) => {
//       console.log('k', k);
//       console.log('v', v);
//       return (
//         <ColorItem
//           key={`${k}`}
//           title={`${k}`}
//           // subtitle="Some of the greys"
//           colors={{ [k]: v }}
//         />
//       )
//     })}
//   </ColorPalette>
// )}
