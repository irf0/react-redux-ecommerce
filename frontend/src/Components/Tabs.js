import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export function ProductDescription() {
  return (
    <Typography sx={{ p: 2 }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde
      minima, cupiditate accusantium totam id? Expedita quibusdam quidem quo,
      commodi quas magnam quisquam voluptate, facere, ipsam sapiente ipsum nihil
      culpa odit dignissimos provident cumque hic! Repellendus deleniti qui
      aperiam, officiis tempora ab quaerat minima nostrum modi obcaecati,
      deserunt accusantium doloremque ullam. Consectetur, quas sapiente.
    </Typography>
  );
}

export function Reviews() {
  return (
    <Typography sx={{ p: 2 }}>
      <ul>
        <li>Great product, highly recommended!</li>
        <li>The quality is top-notch.</li>
        <li>Fast shipping and great customer service.</li>
      </ul>
    </Typography>
  );
}

export function DescTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Product Description" />
          <Tab label="Reviews" />
        </Tabs>
      </Box>
      {value === 0 && <ProductDescription />}
      {value === 1 && <Reviews />}
    </Box>
  );
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Product Description" />
          <Tab label="Reviews" />
        </Tabs>
      </Box>
    </Box>
  );
}
