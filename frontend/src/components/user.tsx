import React, { useState } from "react";
import FormLayout from "./form-layout";
import { AppBar, Tabs, Tab, Typography, Box, Button } from "@material-ui/core";
import { RouteComponentProps } from "@reach/router";

const TabPanel = (props: any) => {
  const { children, value, index, type, ...other } = props;

  return (
    <Box
      className="col-12 d-flex justify-content-center py-3"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      role="tabpanel"
    >
      {value === index && <FormLayout type={type} />}
    </Box>
  );
};

const User: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  const [index, setIndex] = useState(0);

  const a11yProps = (index: any) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`
    };
  };
  const handleChange = (event: React.ChangeEvent<{}>, newIndex: number) => {
    setIndex(newIndex);
  };

  return (
    <div className="container mx-auto">
      <div className="col-12">
        <AppBar position="static">
          <Tabs
            value={index}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Registro" {...a11yProps(0)} />
            <Tab label="Login" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={index} index={0} type="register"></TabPanel>
        <TabPanel value={index} index={1} type="login">
          Item Two
        </TabPanel>
      </div>
    </div>
  );
};

export default User;
