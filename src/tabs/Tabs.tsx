import * as React from 'react';
import TabContent, { TabContentProps } from './TabContent';
import './Tabs.css';

interface TabsProps {
  pages: TabContentProps[];
}

const Tabs = ({ pages }: TabsProps): JSX.Element => {
  const [activeTab, setActiveTab] = React.useState(0);

  const openTab = (event: React.MouseEvent<HTMLButtonElement>): void => {
    if (!(event.target instanceof HTMLButtonElement)) {
      return;
    }
    setActiveTab(parseInt(event.target.dataset.index as string, 10));
  };

  return (
    <div>
      <div className="tab">
        {pages.map((tab, i) => (
          <button
            type="button"
            key={tab.title}
            className={`tab-button ${i === activeTab ? 'active' : ''}`}
            onClick={openTab}
            data-index={i}
          >
            {tab.title}
          </button>
        ))}
      </div>
      {pages[activeTab] && <TabContent {...pages[activeTab]} />}
    </div>
  );
};

export default Tabs;
