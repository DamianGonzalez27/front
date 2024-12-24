import { Box, Button, ButtonGroup, IconButton } from "@mui/material";
import { useCallback, useState } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const CounterInput = ({ counter = 0, stock }: InitialCounter) => {
  const [actualCounter, setActualCounter] = useState<number>(counter);

  const addCounter = useCallback(() => {
    setActualCounter((prev) => (prev < stock ? prev + 1 : stock));
  }, []);

  const subtractCounter = useCallback(() => {
    setActualCounter((prev) => (prev > 0 ? prev - 1 : 0));
  }, []);

  return (
    <Box>
      <ButtonGroup aria-label="Basic button group" sx={{ boxShadow: 1 }}>
        <IconButton color="success" onClick={addCounter}>
          <FaPlusCircle />
        </IconButton>
        <Button color="info" disabled>
          {actualCounter}
        </Button>
        <IconButton color="error" onClick={subtractCounter}>
          <FaMinusCircle />
        </IconButton>
      </ButtonGroup>
    </Box>
  );
};

export { CounterInput };
