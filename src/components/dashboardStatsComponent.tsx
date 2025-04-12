import React from "react";
import {
  Box,
  Stack,
  Typography,
  Paper,
  Button,
  Avatar,
  Chip,
  IconButton,
} from "@mui/material";
import {
  BarChart as BarChartIcon,
  Warning as WarningIcon,
  Delete as DeleteIcon,
  Group as GroupIcon,
  MoreVert as MoreVertIcon,
} from "@mui/icons-material";

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  bgColor: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value, bgColor }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 2,
        p: 2,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Avatar sx={{ bgcolor: bgColor, width: 40, height: 40 }}>{icon}</Avatar>
      <Box>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="h5" fontWeight="bold">
          {value}
        </Typography>
      </Box>
    </Paper>
  );
};

interface DowntimeCardProps {
  title: string;
  subtitle: string;
  value: string;
}

const DowntimeCard: React.FC<DowntimeCardProps> = ({
  title,
  subtitle,
  value,
}) => {
  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 2,
        p: 3,
        width: "100%",
        height: "100%",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={1}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <Box
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              bgcolor: "#ff5252",
            }}
          />
          <Typography variant="subtitle1" fontWeight="medium">
            {title}
          </Typography>
        </Stack>
        <IconButton size="small">
          <MoreVertIcon />
        </IconButton>
      </Stack>
      <Typography variant="body2" color="text.secondary" mb={2}>
        {subtitle}
      </Typography>
      <Typography variant="h4" fontWeight="bold">
        {value}
      </Typography>
    </Paper>
  );
};

interface TrackingCardProps {
  title: string;
  version: string;
  description: string;
  isNew?: boolean;
  users?: number;
}

const TrackingCard: React.FC<TrackingCardProps> = ({
  title,
  version,
  description,
  isNew = false,
  users = 3,
}) => {
  // Create array of user avatar colors
  const userColors = ["#FF4081", "#7C4DFF", "#00BCD4", "#FFC107"];

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 2,
        p: 3,
        width: "100%",
        height: "100%",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={1}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar sx={{ bgcolor: "#e3f2fd", color: "#2196f3" }}>
            <Box
              component="div"
              sx={{
                width: 24,
                height: 24,
                borderRadius: 1,
                bgcolor: "#2196f3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          </Avatar>
          <Typography variant="subtitle1" fontWeight="medium">
            {title} {version}
          </Typography>
          {isNew && (
            <Chip
              label="New"
              size="small"
              sx={{
                bgcolor: "#e3f2fd",
                color: "#2196f3",
                height: 24,
                fontSize: "0.75rem",
              }}
            />
          )}
        </Stack>
        <IconButton size="small">
          <MoreVertIcon />
        </IconButton>
      </Stack>
      <Typography variant="body2" color="text.secondary" mb={2}>
        {description}
      </Typography>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={-0.5}>
          {userColors.slice(0, users).map((color, index) => (
            <Avatar
              key={index}
              sx={{
                width: 24,
                height: 24,
                bgcolor: color,
                border: "2px solid #fff",
                fontSize: "0.75rem",
              }}
            >
              {index === users - 1 && users > 3 ? "+" + (users - 3) : ""}
            </Avatar>
          ))}
        </Stack>
        <Button
          variant="contained"
          size="small"
          endIcon={
            <Box component="span" sx={{ ml: -0.5, mr: -0.5 }}>
              →
            </Box>
          }
          sx={{
            bgcolor: "#1976d2",
            textTransform: "none",
            px: 2,
          }}
        >
          Learn More
        </Button>
      </Stack>
    </Paper>
  );
};

interface EmptyCardProps {
  title: string;
}

const EmptyCard: React.FC<EmptyCardProps> = ({ title }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 2,
        p: 3,
        width: "100%",
        height: "100%",
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar sx={{ bgcolor: "#e3f2fd", color: "#2196f3" }}>
            <Box
              component="div"
              sx={{
                width: 24,
                height: 24,
                borderRadius: 1,
                bgcolor: "#2196f3",
              }}
            />
          </Avatar>
          <Typography variant="subtitle1" fontWeight="medium">
            {title}
          </Typography>
        </Stack>
        <IconButton size="small">
          <MoreVertIcon />
        </IconButton>
      </Stack>
    </Paper>
  );
};

interface DashboardStatsComponentProps {
  assets?: number;
  notWorking?: number;
  discarded?: number;
  departments?: number;
  downtimeHours?: string;
}

const DashboardStatsComponent: React.FC<DashboardStatsComponentProps> = ({
  assets = 487,
  notWorking = 24,
  discarded = 18,
  departments = 12,
  downtimeHours = "17:45:30",
}) => {
  return (
    <Box sx={{ px: 3, pt: 3, pb: 0 }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        sx={{ width: "100%", mb: 2 }}
      >
        <StatCard
          icon={<BarChartIcon />}
          title="Assets"
          value={assets}
          bgColor="#e3f2fd"
        />
        <StatCard
          icon={<WarningIcon />}
          title="Not Working"
          value={notWorking}
          bgColor="#ffebee"
        />
        <StatCard
          icon={<DeleteIcon />}
          title="Discarded"
          value={discarded}
          bgColor="#fff8e1"
        />
        <StatCard
          icon={<GroupIcon />}
          title="Department"
          value={departments}
          bgColor="#e8f5e9"
        />
      </Stack>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        sx={{ width: "100%", mb: 2 }}
      >
        <Box sx={{ width: { xs: "100%", md: "33.33%" } }}>
          <DowntimeCard
            title="Cumulative Downtime"
            subtitle="Time wasted due to downtime"
            value={downtimeHours}
          />
        </Box>
        <Box sx={{ width: { xs: "100%", md: "33.33%" } }}>
          <TrackingCard
            title="User Asset Tracking"
            version="2.0"
            description="Update tracking for monitoring and maintenance"
            isNew={true}
          />
        </Box>
        <Box sx={{ width: { xs: "100%", md: "33.33%" } }}>
          <EmptyCard title="XXXXXXXXXXXXXXXX" />
        </Box>
      </Stack>
    </Box>
  );
};

export default DashboardStatsComponent;
