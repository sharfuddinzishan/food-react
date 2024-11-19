import { useState } from "react";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import orderBg from "../../../assets/shop/banner2.jpg";
import useMenu from "../../../hooks/useMenu";
import Cover from "../../Shared/Cover/Cover";
import OrderTab from "../OrderTab/OrderTab";
const Order = () => {
  const { category } = useParams();
  const { filteredMenu, loading } = useMenu();
  const tabIndex = category
    ? ["salad", "pizza", "soup", "desserts", "drinks", "offered"].indexOf(
        category
      )
    : 0;
  const [defaultTabIndex, setDefaultTabIndex] = useState(tabIndex);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (!filteredMenu) {
    return <p>No menu data found.</p>;
  }
  const {
    desserts = [],
    soup = [],
    salad = [],
    pizza = [],
    drinks = [],
    offered = [],
  } = filteredMenu;

  return (
    <>
      <Cover title={"Our Order"} img={orderBg} />
      <Tabs
        selectedIndex={defaultTabIndex}
        onSelect={(index) => setDefaultTabIndex(index)}
      >
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Deserts</Tab>
          <Tab>Drinks</Tab>
          <Tab>Offered</Tab>
        </TabList>

        <TabPanel>
          <OrderTab items={salad} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={offered} />
        </TabPanel>
      </Tabs>
    </>
  );
};

export default Order;
