import React from "react";
import {
  Box,
  Typography,
  Chip,
  Paper,
  Stack,
  Button,
  LinearProgress,
  Rating,
  Card,
  CardContent,
} from "@mui/material";
import {
  Add as AddIcon,
  LocalHospital as HospitalIcon,
} from "@mui/icons-material";

interface ClientCardProps {
  clientName: string;
  status: "active" | "inactive";
  onlineStatus: boolean;
  lastUpdated: string;
  contractValue: string;
  performance: number;
  satisfaction: number;
  assetUtilization: number;
  assets: number;
  services: number;
  uptime: string;
}

const ClientCardComponent: React.FC<ClientCardProps> = ({
  clientName = "City General Hospital",
  status = "active",
  onlineStatus = true,
  lastUpdated = "2 mins ago",
  contractValue = "₹2,50,00,000",
  performance = 98.5,
  satisfaction = 4.8,
  assetUtilization = 95.3,
  assets = 487,
  services = 24,
  uptime = "99.9%",
}) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 2,
        my: 2,
        mx: 2,
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
        sx={{ width: "100%" }}
      >
        {/* Left Section */}
        <Box sx={{ flex: { xs: "1 1 100%", md: "0 0 25%" } }}>
          <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
            <Box
              sx={{
                bgcolor: "#3373F3",
                borderRadius: 2,
                p: 1.5,
                mr: 2,
                color: "white",
                position: "relative",
              }}
            >
              <HospitalIcon fontSize="large" />
              <Box
                sx={{
                  position: "absolute",
                  width: 10,
                  height: 10,
                  bgcolor: onlineStatus ? "#4CAF50" : "grey",
                  borderRadius: "50%",
                  bottom: 5,
                  right: 5,
                  border: "2px solid white",
                }}
              />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                {clientName}
              </Typography>
              <Chip
                label={
                  status === "active" ? "Active Client" : "Inactive Client"
                }
                size="small"
                sx={{
                  bgcolor: status === "active" ? "#E6F0FF" : "#F5F5F5",
                  color: status === "active" ? "#3373F3" : "text.secondary",
                  fontWeight: 500,
                  mb: 1,
                }}
              />
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    bgcolor: onlineStatus ? "#4CAF50" : "grey",
                    borderRadius: "50%",
                  }}
                />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mr: 2 }}
                >
                  Online
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  • Last updated {lastUpdated}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography variant="body2" color="text.secondary">
              Annual Contract Value
            </Typography>
            <Typography variant="h5" fontWeight={600}>
              {contractValue}
            </Typography>
          </Box>
        </Box>

        {/* Middle Section - Metrics */}
        <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 50%" } }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            sx={{ width: "100%" }}
          >
            {/* Performance */}
            <Box sx={{ flex: 1, bgcolor: "#F0F6FF", p: 2, borderRadius: 2 }}>
              <Typography variant="body2" color="text.secondary" mb={1}>
                Performance
              </Typography>
              <Typography variant="h5" fontWeight={600}>
                {performance}%
              </Typography>
              <LinearProgress
                variant="determinate"
                value={performance}
                sx={{
                  mt: 1,
                  height: 8,
                  borderRadius: 4,
                  bgcolor: "#D1E0FF",
                  "& .MuiLinearProgress-bar": {
                    bgcolor: "#3373F3",
                  },
                }}
              />
            </Box>

            {/* Satisfaction */}
            <Box sx={{ flex: 1, bgcolor: "#F0FFF0", p: 2, borderRadius: 2 }}>
              <Typography variant="body2" color="text.secondary" mb={1}>
                Satisfaction
              </Typography>
              <Typography variant="h5" fontWeight={600}>
                {satisfaction}/5
              </Typography>
              <Rating
                value={satisfaction}
                precision={0.1}
                readOnly
                size="small"
                sx={{
                  mt: 1,
                  "& .MuiRating-iconFilled": {
                    color: "#4CAF50",
                  },
                }}
              />
            </Box>

            {/* Asset Utilization */}
            <Box sx={{ flex: 1, bgcolor: "#F5F0FF", p: 2, borderRadius: 2 }}>
              <Typography variant="body2" color="text.secondary" mb={1}>
                Asset Utilization
              </Typography>
              <Typography variant="h5" fontWeight={600}>
                {assetUtilization}%
              </Typography>
              <Box sx={{ mt: 1, display: "flex" }}>
                {[...Array(10)].map((_, i) => (
                  <Box
                    key={i}
                    sx={{
                      height: 8,
                      width: 8,
                      borderRadius: "50%",
                      bgcolor:
                        i < Math.floor(assetUtilization / 10)
                          ? "#9C27B0"
                          : "#E1D5E7",
                      mx: 0.25,
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Stack>

          <Stack direction="row" justifyContent="space-around" sx={{ mt: 3 }}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="body2" color="text.secondary">
                Assets
              </Typography>
              <Typography variant="h5" fontWeight={600}>
                {assets}
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="body2" color="text.secondary">
                Services
              </Typography>
              <Typography variant="h5" fontWeight={600}>
                {services}
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="body2" color="text.secondary">
                Uptime
              </Typography>
              <Typography variant="h5" fontWeight={600}>
                {uptime}
              </Typography>
            </Box>
          </Stack>
        </Box>

        {/* Right Section */}
        <Box sx={{ flex: { xs: "1 1 100%", md: "0 0 25%" } }}>
          <Stack spacing={2} sx={{ height: "100%" }}>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              sx={{
                bgcolor: "#3373F3",
                borderRadius: 2,
                textTransform: "none",
                py: 1,
              }}
            >
              Generate Report
            </Button>
            <Card
              sx={{
                borderRadius: 2,
                background: "linear-gradient(135deg, #4A6EF0 0%, #6B92FF 100%)",
                color: "white",
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ opacity: 0.9 }}>
                  XXXXXXXXXXX
                </Typography>
                <Typography variant="h6" sx={{ opacity: 0.9 }}>
                  XXXXXXXXXXX
                </Typography>
              </CardContent>
            </Card>
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
};

export default ClientCardComponent;
