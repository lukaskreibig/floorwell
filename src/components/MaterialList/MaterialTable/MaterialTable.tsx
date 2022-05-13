import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";

type Props = {
  materialClass: string;
};

const MaterialTable: React.FC<Props> = ({ materialClass }) => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const createData = (
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ) => {
    return { name, calories, fat, carbs, protein };
  };

  let materialSlice = [];
  materialSlice = useSelector((state: any) => state.materialSlice);
  console.log(materialSlice);

  console.log(
    materialSlice.materialSlice.length !== 0
      ? console.log(
          materialSlice.materialSlice[0].materialData.filter(
            (data: any) => data.idMaterialClass == materialClass
          )
        )
      : "Null"
  );
  console.log(materialClass);

  return (
    <div>
      {materialSlice.materialSlice.length !== 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell align="right">Nr.</StyledTableCell>
                <StyledTableCell align="right">Materialklasse</StyledTableCell>
                <StyledTableCell align="right">Dekor</StyledTableCell>
                <StyledTableCell align="right">Name</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {materialSlice.materialSlice[0].materialData
                .filter(
                  (data: any) => data.idMaterialClass === Number(materialClass)
                )
                .map((row: any, index: number) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.idMaterial}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.Class}</StyledTableCell>
                    <StyledTableCell align="right">{row.Decor}</StyledTableCell>
                    <StyledTableCell align="right">{row.Name}</StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : null}
    </div>
  );
};

export default MaterialTable;
