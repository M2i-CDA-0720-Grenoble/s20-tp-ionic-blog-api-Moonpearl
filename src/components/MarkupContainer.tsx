import React, { FC } from "react";

interface MarkupContainerProps {
  html: string,
  className?: string,
}

const MarkupContainer: FC<MarkupContainerProps> = ({ html, ...props }) =>
  <div dangerouslySetInnerHTML={{ __html: html }} {...props} />
;

export default MarkupContainer;
