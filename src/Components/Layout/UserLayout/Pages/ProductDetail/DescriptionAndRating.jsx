import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PropTypes from "prop-types";

const DescriptionAndRating = ({ description }) => {
  const tabList = [
    {
      id: 1,
      name: "description",
    },
    {
      id: 2,
      name: "Review",
    },
  ];
  return (
    <Tabs className='dark:text-secondary-text-dark dark:bg-semi-dark min-h-screen mb-5'>
      <TabList>
        {tabList?.map((tab) => (
          <Tab key={tab?.id}>{tab?.name}</Tab>
        ))}
      </TabList>

      <TabPanel className='mt-10'>
        <p>{description}</p>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
    </Tabs>
  );
};

DescriptionAndRating.propType = {
  description: PropTypes.string,
};

export default DescriptionAndRating;
