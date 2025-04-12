import React from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";

interface AttentionItem {
  assetCode: string;
  department: string;
  service: string;
  status: "Urgent" | "High" | "Medium" | "Low";
}

// Props interface for the component
interface AttentionTableComponentProps {
  items?: AttentionItem[];
}

const getStatusColor = (status: string): string => {
  switch (status) {
    case "Urgent":
      return "#ffebee";
    case "High":
      return "#fff3e0";
    case "Medium":
      return "#fffde7";
    case "Low":
      return "#e8f5e9";
    default:
      return "#f5f5f5";
  }
};

const getStatusTextColor = (status: string): string => {
  switch (status) {
    case "Urgent":
      return "#d32f2f";
    case "High":
      return "#e65100";
    case "Medium":
      return "#827717";
    case "Low":
      return "#1b5e20";
    default:
      return "#424242";
  }
};

const AttentionTableComponent: React.FC<AttentionTableComponentProps> = ({
  items = [
    {
      assetCode: "MED-1234",
      department: "Cardiology",
      service: "Maintenance",
      status: "Urgent",
    },
    {
      assetCode: "MED-2356",
      department: "Radiology",
      service: "Repair",
      status: "High",
    },
    {
      assetCode: "MED-7890",
      department: "Laboratory",
      service: "Calibration",
      status: "Medium",
    },
    {
      assetCode: "MED-4567",
      department: "Emergency",
      service: "Replacement",
      status: "Low",
    },
  ],
}) => {
  return (
    <Box sx={{ p: 3, pt: 0 }}>
      <Paper
        elevation={0}
        sx={{
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ px: 3, py: 2 }}
        >
          <Typography variant="h6" fontWeight="medium">
            Need Attention
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            size="small"
            sx={{
              borderRadius: 50,
              textTransform: "none",
              px: 2,
            }}
          >
            Add New
          </Button>
        </Stack>

        <TableContainer>
          <Table sx={{ minWidth: 650 }}>
            <TableHead sx={{ bgcolor: "#f5f5f5" }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 500 }}>Asset Code</TableCell>
                <TableCell sx={{ fontWeight: 500 }}>Department</TableCell>
                <TableCell sx={{ fontWeight: 500 }}>Service</TableCell>
                <TableCell sx={{ fontWeight: 500 }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.assetCode}
                  </TableCell>
                  <TableCell>{item.department}</TableCell>
                  <TableCell>{item.service}</TableCell>
                  <TableCell>
                    <Chip
                      label={item.status}
                      size="small"
                      sx={{
                        bgcolor: getStatusColor(item.status),
                        color: getStatusTextColor(item.status),
                        borderRadius: 1,
                        fontSize: "0.75rem",
                        fontWeight: 500,
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default AttentionTableComponent;
