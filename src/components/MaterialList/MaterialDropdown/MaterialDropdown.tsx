import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useSelector } from "react-redux";
import { ReactNode } from "react";
import "./../../../App.css";
import { Button } from "@mui/material";

type Props = {
  handleChange: (event: SelectChangeEvent<string>, child: ReactNode) => void;
  materialClass: string;
};

const MaterialDropdown: React.FC<Props> = ({ materialClass, handleChange }) => {
  let classSlice = [];
  classSlice = useSelector((state: any) => state.classSlice);

  return (
    <div className="dropdown">
      {classSlice.classAPI.length !== 0 ? (
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Materialklasse
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={materialClass}
              label="Materialklasse"
              onChange={handleChange}
            >
              {classSlice.classAPI[0].classData.map((data: any) => (
                <MenuItem
                  value={data.idMaterialClass}
                  key={data.idMaterialClass}
                >
                  {data.Class}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      ) : null}

      <Button variant="outlined">Zurücksetzen</Button>
    </div>
  );
};

export default MaterialDropdown;
