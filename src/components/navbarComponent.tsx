import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Avatar,
  Chip,
  Select,
  MenuItem,
  SelectChangeEvent,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  KeyboardArrowDown as ArrowDownIcon,
  Notifications as NotificationsIcon,
  Apps as AppsIcon,
} from "@mui/icons-material";

interface NavbarProps {
  currentPage?: string;
}

const NavbarComponent: React.FC<NavbarProps> = ({
  currentPage = "Dashboard",
}) => {
  const [location, setLocation] = React.useState("Vijayanagar");

  const handleLocationChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "white",
        color: "black",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left section - Page Title */}
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
          }}
        >
          {currentPage}
        </Typography>

        {/* Right section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* Organization Chip */}
          <Chip
            avatar={<Avatar sx={{ bgcolor: "#1e2533" }}>B</Avatar>}
            label="Non Bio Medical"
            variant="outlined"
            sx={{
              borderRadius: "20px",
              padding: "5px 10px",
              bgcolor: "#f5f5f5",
              height: "40px",
              "& .MuiChip-label": {
                padding: "10 8px 0 4px",
                fontWeight: 500,
              },
            }}
          />

          {/* Location Selector */}
          <Select
            value={location}
            onChange={handleLocationChange}
            displayEmpty
            IconComponent={ArrowDownIcon}
            sx={{
              height: "40px",
              minWidth: "120px",
              bgcolor: "#f5f5f5",
              borderRadius: "20px",
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              "& .MuiSelect-select": {
                paddingRight: "32px",
              },
            }}
          >
            <MenuItem value="Vijayanagar">Vijayanagar</MenuItem>
            <MenuItem value="Jayanagar">Jayanagar</MenuItem>
            <MenuItem value="Malleshwaram">Malleshwaram</MenuItem>
          </Select>

          {/* Apps Icon */}
          <IconButton size="medium" sx={{ bgcolor: "#f5f5f5" }}>
            <AppsIcon />
          </IconButton>

          {/* Notifications Icon */}
          <IconButton size="medium" sx={{ bgcolor: "#f5f5f5" }}>
            <NotificationsIcon />
          </IconButton>

          {/* User Avatar */}
          <Avatar sx={{ bgcolor: "#1e2533" }}>A</Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarComponent;
