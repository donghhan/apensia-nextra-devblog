import {
  AnnotationHandler,
  InnerLine,
  Pre,
  RawCode,
  highlight,
} from "codehike/code";
import React from "react";

export function HoverContainer(props: { children: React.ReactNode }) {
  return <div className="hover-container">{props.children}</div>;
}

function Link(props: { href?: string; children?: React.ReactNode }) {
  if (props.href?.startsWith("hover:")) {
    const hover = props.href.slice("hover:".length);
    return (
      <span className="..." data-hover={hover}>
        {props.children}
      </span>
    );
  } else {
    return <a {...props} />;
  }
}

export const hover: AnnotationHandler = {
  name: "hover",
  onlyIfAnnotated: true,
  Line: ({ annotation, ...props }) => (
    <InnerLine
      merge={props}
      className="..."
      data-line={annotation?.query || ""}
    />
  ),
};
