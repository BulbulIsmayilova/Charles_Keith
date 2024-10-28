import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function RangeSlider({ setValue, value, handleSliderChange }) {
  const handleSliderChangeCommitted = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        min={0}
        max={500}
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleSliderChange}
        onChangeCommitted={handleSliderChangeCommitted}
        valueLabelDisplay="auto"
        sx={{
          color: "#333",
          "& .MuiSlider-thumb": {
            backgroundColor: "#333",
            width: 12,
            height: 12,
            "&:hover": {
              boxShadow: "0px 0px 0px 8px rgba(0, 0, 0, 0.16)",
            },
          },
          "& .MuiSlider-rail": {
            color: "#33333380",
          },
          "& .MuiSlider-valueLabel": {
            backgroundColor: "#333",
          },
        }}
      />
      <div>
        <span>Min Price: {value[0]}</span>
        <span style={{ float: "right" }}>Max Price: {value[1]}</span>
      </div>
    </Box>
  );
}
