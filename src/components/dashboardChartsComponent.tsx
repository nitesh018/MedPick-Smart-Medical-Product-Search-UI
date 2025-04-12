import React from 'react';
import { 
  Box, 
  Stack, 
  Typography, 
  Paper, 
  Button, 
  IconButton,
  Tabs,
  Tab,
  CircularProgress
} from '@mui/material';
import { 
  Add as AddIcon,
  CheckCircle as CheckCircleIcon,
  Cancel as CancelIcon,
  RadioButtonUnchecked as RadioButtonUncheckedIcon
} from '@mui/icons-material';

// meta data for bar charts
const servicesData = [
  { time: '07:00', value: 30 },
  { time: '08:00', value: 42 },
  { time: '09:00', value: 78 },
  { time: '10:00', value: 50 },
  { time: '11:00', value: 90 },
  { time: '12:00', value: 45 }
];

const incidentsData = [
  { time: '07:00', value: 40 },
  { time: '08:00', value: 30 },
  { time: '09:00', value: 80 },
  { time: '10:00', value: 45 },
  { time: '11:00', value: 60 },
  { time: '12:00', value: 35 }
];

interface StatCardWithChartProps {
  title: string;
  openCount: number;
  openPercentage: number;
  closedCount: number;
  closedPercentage: number;
  expenditure: string;
  expenditurePercentage: number;
  chartData: { time: string; value: number }[];
}

const StatCardWithChart: React.FC<StatCardWithChartProps> = ({
  title,
  openCount,
  openPercentage,
  closedCount,
  closedPercentage,
  expenditure,
  expenditurePercentage,
  chartData
}) => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 2,
        p: 3,
        width: '100%',
        height: '100%'
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" fontWeight="medium">
          {title}
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          size="small"
          sx={{
            borderRadius: 50,
            textTransform: 'none',
            px: 2
          }}
        >
          Add New
        </Button>
      </Stack>

      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        sx={{
          mb: 2,
          minHeight: 32,
          '& .MuiTab-root': {
            minHeight: 32,
            textTransform: 'none',
            fontSize: '0.75rem',
            p: 1
          }
        }}
      >
        <Tab label="Day" />
        <Tab label="Month" />
        <Tab label="Year" />
      </Tabs>

      <Stack direction="row" spacing={2} mb={2}>
        <Stack direction="column" spacing={2} sx={{ width: '40%' }}>
          <Paper
            elevation={0}
            sx={{
              bgcolor: '#f5fbf8',
              borderRadius: 2,
              p: 2,
              position: 'relative'
            }}
          >
            <Typography variant="body2" fontWeight="medium" color="text.secondary">
              Open
            </Typography>
            <Typography variant="subtitle1" fontWeight="bold" color="primary" sx={{ mt: 1 }}>
              {openCount}
            </Typography>
            <Box sx={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)' }}>
              <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress
                  variant="determinate"
                  value={openPercentage}
                  size={50}
                  thickness={4}
                  sx={{ color: '#4caf50' }}
                />
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="caption" fontWeight="bold" color="text.secondary">
                    {`${openPercentage}%`}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>

          <Paper
            elevation={0}
            sx={{
              bgcolor: '#fff5f5',
              borderRadius: 2,
              p: 2,
              position: 'relative'
            }}
          >
            <Typography variant="body2" fontWeight="medium" color="text.secondary">
              Closed
            </Typography>
            <Typography variant="subtitle1" fontWeight="bold" color="error" sx={{ mt: 1 }}>
              {closedCount}
            </Typography>
            <Box sx={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)' }}>
              <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress
                  variant="determinate"
                  value={closedPercentage}
                  size={50}
                  thickness={4}
                  sx={{ color: '#f44336' }}
                />
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="caption" fontWeight="bold" color="text.secondary">
                    {`${closedPercentage}%`}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>

          <Paper
            elevation={0}
            sx={{
              bgcolor: '#f0f8ff',
              borderRadius: 2,
              p: 2,
              position: 'relative'
            }}
          >
            <Typography variant="body2" fontWeight="medium" color="text.secondary">
              Expenditure
            </Typography>
            <Typography variant="subtitle1" fontWeight="bold" color="primary" sx={{ mt: 1 }}>
              {expenditure}
            </Typography>
            <Box sx={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)' }}>
              <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress
                  variant="determinate"
                  value={expenditurePercentage}
                  size={50}
                  thickness={4}
                  sx={{ color: '#2196f3' }}
                />
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="caption" fontWeight="bold" color="text.secondary">
                    {`${expenditurePercentage}%`}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Stack>

        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'flex-end' }}>
          <Stack direction="row" spacing={1} sx={{ width: '100%', height: '200px', alignItems: 'flex-end' }}>
            {chartData.map((item, index) => (
              <Box
                key={index}
                sx={{
                  height: `${item.value}%`,
                  width: `${100 / chartData.length - 5}%`,
                  bgcolor: '#e3f2fd',
                  borderRadius: 1,
                  mx: 0.5
                }}
              />
            ))}
          </Stack>
        </Box>
      </Stack>

      <Stack direction="row" spacing={1} justifyContent="space-between" sx={{ mt: 1 }}>
        {chartData.map((item, index) => (
          <Typography key={index} variant="caption" color="text.secondary" sx={{ textAlign: 'center', width: `${100 / chartData.length}%` }}>
            {item.time}
          </Typography>
        ))}
      </Stack>
    </Paper>
  );
};

interface DonutChartCardProps {
  title: string;
  date: string;
  segments: {
    label: string;
    value: number;
    color: string;
    icon: React.ReactNode;
    description: string;
  }[];
}

const DonutChartCard: React.FC<DonutChartCardProps> = ({
  title,
  date,
  segments
}) => {
  // Calculate total for percentages
  const total = segments.reduce((sum, segment) => sum + segment.value, 0);

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 2,
        p: 3,
        width: '100%',
        height: '100%'
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h6" fontWeight="medium">
          {title}
        </Typography>
        <Button
          variant="text"
          endIcon={<Box component="span">↓</Box>}
          sx={{
            color: 'text.secondary',
            textTransform: 'none'
          }}
        >
          {date}
        </Button>
      </Stack>

      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
        <Box sx={{ position: 'relative', width: 160, height: 160 }}>
          <svg width="160" height="160" viewBox="0 0 160 160">
            <circle cx="80" cy="80" r="60" fill="none" stroke="#f5f5f5" strokeWidth="20" />
            
            {/* Dynamically create donut chart segments */}
            {segments.map((segment, index) => {
              // Calculate the percentage and angles for the arc hai
              const percentage = segment.value / total;
              const startAngle = index === 0 ? 0 : 
                segments.slice(0, index).reduce((sum, s) => sum + (s.value / total), 0) * 360;
              const endAngle = startAngle + (percentage * 360);
              
              //   radians me kar diye
              const startRad = (startAngle - 90) * Math.PI / 180;
              const endRad = (endAngle - 90) * Math.PI / 180;
              
              // Calculate the coordinates for the arc
              const x1 = 80 + 50 * Math.cos(startRad);
              const y1 = 80 + 50 * Math.sin(startRad);
              const x2 = 80 + 50 * Math.cos(endRad);
              const y2 = 80 + 50 * Math.sin(endRad);
              
              // Determine if the arc is large (> 180 degrees)
              const largeArcFlag = percentage > 0.5 ? 1 : 0;
              
              // Create the SVG path for the arc
              const path = `M 80,80 L ${x1},${y1} A 50,50 0 ${largeArcFlag},1 ${x2},${y2} Z`;
              
              return (
                <path 
                  key={index}
                  d={path} 
                  fill="none"
                  stroke={segment.color}
                  strokeWidth="20"
                />
              );
            })}
            
            {/* Inner white circle to create donut effect */}
            <circle cx="80" cy="80" r="40" fill="white" />
          </svg>
        </Box>
      </Box>
      
      <Stack direction="row" spacing={2} justifyContent="center">
        {segments.map((segment, index) => (
          <Box 
            key={index} 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              flex: 1
            }}
          >
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              color: segment.color,
              mb: 1
            }}>
              {segment.icon}
            </Box>
            <Typography variant="h6" fontWeight="bold" color="text.primary">
              {segment.value}%
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {segment.description}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Paper>
  );
};

const DashboardChartsComponent: React.FC = () => {
  return (
    <Box sx={{ p: 3, pt: 0 }}>
      <Stack 
        direction={{ xs: 'column', md: 'row' }}
        spacing={2}
        sx={{ width: '100%', mb: 2 }}
      >
        <Box sx={{ width: { xs: '100%', md: '50%' } }}>
          <StatCardWithChart
            title="Services"
            openCount={24}
            openPercentage={48}
            closedCount={18}
            closedPercentage={36}
            expenditure="₹45K"
            expenditurePercentage={45}
            chartData={servicesData}
          />
        </Box>
        <Box sx={{ width: { xs: '100%', md: '50%' } }}>
          <DonutChartCard
            title="Calibration Status"
            date="Mar 2025"
            segments={[
              { 
                label: "calibrated", 
                value: 45, 
                color: "#4285F4", 
                icon: <CheckCircleIcon />, 
                description: "Calibrated" 
              },
              { 
                label: "not-calibrated", 
                value: 35, 
                color: "#EA4335", 
                icon: <CancelIcon />, 
                description: "Not Calibrated" 
              },
              { 
                label: "not-required", 
                value: 20, 
                color: "#9AA0A6", 
                icon: <RadioButtonUncheckedIcon />, 
                description: "Not Required" 
              }
            ]}
          />
        </Box>
      </Stack>

      <Stack 
        direction={{ xs: 'column', md: 'row' }}
        spacing={2}
        sx={{ width: '100%' }}
      >
        <Box sx={{ width: { xs: '100%', md: '50%' } }}>
          <StatCardWithChart
            title="Incidents"
            openCount={24}
            openPercentage={48}
            closedCount={18}
            closedPercentage={36}
            expenditure="₹45K"
            expenditurePercentage={45}
            chartData={incidentsData}
          />
        </Box>
        <Box sx={{ width: { xs: '100%', md: '50%' } }}>
          <DonutChartCard
            title="Warranty Status"
            date="Mar 2025"
            segments={[
              { 
                label: "total", 
                value: 50, 
                color: "#34A853", 
                icon: <CheckCircleIcon />, 
                description: "Total" 
              },
              { 
                label: "expires-soon", 
                value: 30, 
                color: "#FBBC05", 
                icon: <CancelIcon />, 
                description: "Expires Soon" 
              },
              { 
                label: "requested", 
                value: 20, 
                color: "#9C27B0", 
                icon: <RadioButtonUncheckedIcon />, 
                description: "Requested" 
              }
            ]}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default DashboardChartsComponent;