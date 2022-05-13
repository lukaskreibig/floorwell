import React, { ReactNode } from 'react'
import MaterialTable from './MaterialTable/MaterialTable'
import { useSelector } from 'react-redux'
import MaterialDropdown from './MaterialDropdown/MaterialDropdown'
import { SelectChangeEvent } from '@mui/material';

type Props = {
  loading: boolean;
  materialClass: string;
  handleChange: (event: SelectChangeEvent<string>, child: ReactNode) => void;
};

const MaterialList: React.FC<Props> = ({loading, handleChange, materialClass}) => {
  return (
  
      <div>
        {loading ? "Loading..." : <> <MaterialDropdown handleChange={handleChange} /> <MaterialTable materialClass={materialClass} /> </>}
      </div>
  )
}

export default MaterialList

