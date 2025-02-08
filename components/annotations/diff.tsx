import { AnnotationHandler, InnerLine, BlockAnnotation } from "codehike/code";

export const diff: AnnotationHandler = {
  name: "diff",
  onlyIfAnnotated: true,
  transform: (annotation: BlockAnnotation) => {
    const color = annotation.query == "-" ? "#f85149" : "#3fb950";
    return [annotation, { ...annotation, name: "mark", query: color }];
  },
  Line: ({ annotation, ...props }) => (
    <>
      <div className="box-content opacity-70 select-none relative">
        <div className="absolute -left-3">{annotation?.query}</div>
      </div>
      <InnerLine merge={props} />
    </>
  ),
};
