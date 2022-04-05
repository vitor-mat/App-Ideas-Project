import React, { ReactNode } from 'react';

const HeadingList = {
  h1:{
      setComponent ( children: ReactNode ){
        return(
          <h1>
            {children}
          </h1>
        )
      }
  },
  h2:{
      setComponent ( children: ReactNode ){
        return(
          <h2>
            {children}
          </h2>
        )
      }
  },
  h3:{
      setComponent ( children: ReactNode ){
        return(
          <h3>
            {children}
          </h3>
        )
      }
  },
  h4:{
      setComponent ( children: ReactNode ){
        return(
          <h4>
            {children}
          </h4>
        )
      }
  },
  h5:{
      setComponent ( children: ReactNode ){
        return(
          <h5>
            {children}
          </h5>
        )
      }
  },
  h6:{
      setComponent ( children: ReactNode ){
        return(
          <h6>
            {children}
          </h6>
        )
      }
  }
}

interface PropsType{
  variant: string;
}

export const Heading: React.FC<PropsType> = ({ children, variant="h1" }) => {

  let HeadingElement = HeadingList["h1"];

  switch(variant){
    case "h2":
      HeadingElement = HeadingList["h2"];
      break;
    case "h3":
      HeadingElement = HeadingList["h3"];
      break;
    case "h4":
      HeadingElement = HeadingList["h4"];
      break;
    case "h5":
      HeadingElement = HeadingList["h5"];
      break;
    case "h6":
      HeadingElement = HeadingList["h6"];
      break;
  }

  return HeadingElement.setComponent(children)
}