import * as React from 'react';

export interface TabContentProps {
  title: string;
  content: JSX.Element | string;
}

const TabContent = ({ content }: TabContentProps): JSX.Element => (
  <div className="tab-content">
    <div>{content}</div>
  </div>
);
export default TabContent;
