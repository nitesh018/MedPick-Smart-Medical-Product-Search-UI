import React from "react";
import { Box, CssBaseline } from "@mui/material";
import SidebarComponent from "./components/sidebarComponent";
import NavbarComponent from "./components/navbarComponent";
import ClientCardComponent from "./components/clientCardComponent";
import DashboardStatsComponent from "./components/dashboardStatsComponent";
import AttentionTableComponent from "./components/attentionTableComponent";
import DashboardChartsComponent from "./components/dashboardChartsComponent";

const App: React.FC = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <SidebarComponent />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          bgcolor: "#f5f5f5",
          minHeight: "100vh",
        }}
      >
        <NavbarComponent currentPage="Dashboard" />
        <ClientCardComponent
          clientName="City General Hospital"
          status="active"
          onlineStatus={true}
          lastUpdated="2 mins ago"
          contractValue="₹2,50,00,000"
          performance={98.5}
          satisfaction={4.8}
          assetUtilization={95.3}
          assets={487}
          services={24}
          uptime="99.9%"
        />
        <DashboardStatsComponent />

        <DashboardChartsComponent />
        <AttentionTableComponent />
      </Box>
    </Box>
  );
};

export default App;
