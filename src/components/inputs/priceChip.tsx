import { Avatar, Box, Chip } from "@mui/material";

const PriceChip = ({ price }: PriceChip) => {
  return (
    <Box>
      <Chip
        avatar={<Avatar>$</Avatar>}
        label={price}
        color="success"
        size="small"
      />
      <Chip size="small" label="MXN" />
    </Box>
  );
};

export { PriceChip };
