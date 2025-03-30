// import React from 'react'
// import {Cloud, renderSimpleIcon, fetchSimpleIcons, SimpleIcon} from 'react-icon-cloud'
// import IconCloud from "@/components/magicui/icon-cloud";
// const useIcons = (slugs: string[]) => {
//   const [icons, setIcons] = React.useState()
//   React.useEffect(() => {fetchSimpleIcons({slugs}).then(setIcons)}, [])

//   if (icons) {
//     return Object.values(icons.simpleIcons).map((icon) => renderSimpleIcon({
//       icon,
     
//       size: 42,
//       aProps: {
//         href: undefined,
//         target: undefined,
//         rel: undefined,
//         onClick: (e: any) => e.preventDefault(),
//       }
//     }))
//   }
  
//   return <a>Loading</a>
// }

// const slugs = [
//   "typescript",
//   "javascript",
//   "dart",
//   "java",
//   "react",
//   "flutter",
//   "android",
//   "html5",
//   "css3",
//   "nodedotjs",
//   "express",
//   "nextdotjs",
//   "prisma",
//   "amazonaws",
//   "postgresql",
//   "firebase",
//   "nginx",
//   "vercel",
//   "testinglibrary",
//   "jest",
//   "cypress",
//   "docker",
//   "git",
//   "jira",
//   "github",
//   "gitlab",
//   "visualstudiocode",
//   "androidstudio",
//   "sonarqube",
//   "figma",
// ]
// const DynamicIconCloud = () => {
//   const icons = useIcons(slugs)

//   return <Cloud>
//     {icons}
//   </Cloud>}/
import React from 'react'
import { Cloud, renderSimpleIcon, fetchSimpleIcons, SimpleIcon } from 'react-icon-cloud'

const useIcons = (slugs: string[]) => {
  const [icons, setIcons] = React.useState()
  React.useEffect(() => { fetchSimpleIcons({ slugs }).then(setIcons) }, [])

  if (icons) {
    return Object.values(icons.simpleIcons).map((icon) => renderSimpleIcon({
      icon,
      size: 70,
      aProps: {
        onClick: (e: any) => e.preventDefault()
      }
    }))
  }

  return <a>Loading</a>
}

const slugs = [
  'amazonaws',
  'android',
  'androidstudio',
  'antdesign',
  'typescript',
  'vercel',
  'visualstudiocode',
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "instagram",
  "androidstudio",
  "sonarqube",
  "figma",
]

const DynamicIconCloud = () => {
  const icons = useIcons(slugs)

  return (
    <Cloud
      options={{
        keepStatic: true,       // Keeps the cloud rotating even when not hovered
        initialSpeed: 0.2,       // Adjust the speed of rotation (positive or negative for direction)
        maxSpeed: 0.3,           // Max speed for rotation
        zoom: 1, 
        reverse: true,
        depth: 1,
        wheelZoom: false,
        imageScale: 2,
        activeCursor: "default",
        tooltip: "native",
        initial: [0.1, -0.1],
        clickToFront: 500,
        tooltipDelay: 0,
        outlineColour: "#0000",
        maxSpeed: 0.04,
        minSpeed: 0.02,                // Adjust zoom level (1 is default)
      }}
    >
      {icons}
    </Cloud>
  )
}

export default DynamicIconCloud;
