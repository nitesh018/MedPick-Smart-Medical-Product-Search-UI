import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Collapse,
  Divider,
} from "@mui/material";

import {
  Dashboard as DashboardIcon,
  Inventory as AssetsIcon,
  BugReport as IncidentsIcon,
  MiscellaneousServices as ServicesIcon,
  Chat as RequestIcon,
  Group as UsersIcon,
  Assessment as ReportsIcon,
  ContactSupport as ContactUsIcon,
  Logout as LogoutIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
} from "@mui/icons-material";

interface SidebarItem {
  text: string;
  icon: React.ReactNode;
  hasSubmenu?: boolean;
}

const SidebarComponent: React.FC = () => {
  const [openAssets, setOpenAssets] = useState(false);
  const [openUsers, setOpenUsers] = useState(false);
  const [openReports, setOpenReports] = useState(false);

  const handleToggleAssets = () => {
    setOpenAssets(!openAssets);
  };

  const handleToggleUsers = () => {
    setOpenUsers(!openUsers);
  };

  const handleToggleReports = () => {
    setOpenReports(!openReports);
  };

  const sidebarItems: SidebarItem[] = [
    { text: "Dashboard", icon: <DashboardIcon /> },
    { text: "Assets", icon: <AssetsIcon />, hasSubmenu: true },
    { text: "Incidents", icon: <IncidentsIcon /> },
    { text: "Services", icon: <ServicesIcon /> },
    { text: "Request", icon: <RequestIcon /> },
    { text: "Users", icon: <UsersIcon />, hasSubmenu: true },
    { text: "Reports", icon: <ReportsIcon />, hasSubmenu: true },
    { text: "Contact Us", icon: <ContactUsIcon /> },
    { text: "Log Out", icon: <LogoutIcon /> },
  ];

  const drawerWidth = 240;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          bgcolor: "#1e2533",
          color: "white",
        },
      }}
    >
      <Box
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          component="div"
          sx={{ fontWeight: "light", color: "white" }}
        >
          Vajra
        </Typography>
      </Box>
      <Divider sx={{ bgcolor: "rgba(255,255,255,0.1)" }} />
      <List>
        {sidebarItems.map((item) => (
          <React.Fragment key={item.text}>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  if (item.text === "Assets") handleToggleAssets();
                  else if (item.text === "Users") handleToggleUsers();
                  else if (item.text === "Reports") handleToggleReports();
                }}
                sx={{
                  color: "white",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                <ListItemIcon sx={{ color: "white", minWidth: "40px" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
                {item.hasSubmenu && (
                  <>
                    {(item.text === "Assets" && openAssets) ||
                    (item.text === "Users" && openUsers) ||
                    (item.text === "Reports" && openReports) ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon />
                    )}
                  </>
                )}
              </ListItemButton>
            </ListItem>
            {item.text === "Assets" && (
              <Collapse in={openAssets} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4, color: "white" }}>
                    <ListItemText primary="Asset List" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4, color: "white" }}>
                    <ListItemText primary="Add Asset" />
                  </ListItemButton>
                </List>
              </Collapse>
            )}
            {item.text === "Users" && (
              <Collapse in={openUsers} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4, color: "white" }}>
                    <ListItemText primary="User List" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4, color: "white" }}>
                    <ListItemText primary="User Roles" />
                  </ListItemButton>
                </List>
              </Collapse>
            )}
            {item.text === "Reports" && (
              <Collapse in={openReports} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4, color: "white" }}>
                    <ListItemText primary="Asset Reports" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4, color: "white" }}>
                    <ListItemText primary="Incident Reports" />
                  </ListItemButton>
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
};

export default SidebarComponent;
