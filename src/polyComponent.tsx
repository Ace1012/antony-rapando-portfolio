import * as React from "react";

interface PolyOwnProps<E extends React.ElementType> {
  children?: React.ReactNode;
  as?: E;
}

type PolyProps<E extends React.ElementType> = PolyOwnProps<E> & Omit<React.ComponentProps<E>, keyof PolyOwnProps<E>>;

const PolyComponent = <E extends React.ElementType = "div">({ children, as }: PolyProps<E>) => {
  const Component = as || "div";
  return <Component className="poly">{children}</Component>;
};

export default PolyComponent;
