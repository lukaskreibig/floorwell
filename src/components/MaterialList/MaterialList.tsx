import React, { ReactNode } from 'react'
import MaterialTable from './MaterialTable/MaterialTable'
import MaterialDropdown from './MaterialDropdown/MaterialDropdown'
import { SelectChangeEvent } from '@mui/material';
import './../../App.css';


type Props = {
  loading: boolean;
  materialClass: string;
  handleChange: (event: SelectChangeEvent<string>, child: ReactNode) => void;
  reset: boolean;
  resetTable: Function;
};

const MaterialList: React.FC<Props> = ({loading, handleChange, materialClass}) => {

  return (
  
      <div className="table">
        {loading ? "Loading..." : <> <MaterialDropdown handleChange={handleChange} materialClass={materialClass} /> <MaterialTable materialClass={materialClass} /> </>}
      </div>
  )
}

export default MaterialList

