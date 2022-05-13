import React, { useEffect, useState } from 'react';
import './App.css';
import MaterialList from './components/MaterialList/MaterialList';
import { useDispatch } from 'react-redux'
import { newMaterial } from './store/material'
import { newClass } from './store/class'
import { SelectChangeEvent } from '@mui/material';

const App = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>("");
  const [materialClass, setMaterialClass] = useState("1");
  const dispatch = useDispatch()


const handleChange = (event: SelectChangeEvent) => {
  setMaterialClass(event.target.value as string);
};


  useEffect((): void => {
    const getData = async (): Promise<void> => {
      try {
        setLoading(true);
        const [materialFetch, classFetch] = await Promise.all(
          [
            fetch(
              `/api/fw_material`, 
          {
          headers: {
            'X-ApiKey': 'ZGF0IGdpYnQgZWluIGJvbnVzcHVua3Q='
          }
        }
            ), fetch(`/api/fw_materialclass`, 
            {
            headers: {
              'X-ApiKey': 'ZGF0IGdpYnQgZWluIGJvbnVzcHVua3Q='
            }
          })
          ]
        );
        if (!materialFetch.ok || !classFetch.ok) {
          setLoading(false);
          throw new Error(
            `Oh No! A failure occured fetching ${
              !materialFetch.ok
                ? `Material Data ${materialFetch.status}`
                : `Class Material: ${classFetch.status}`
            }`
          );
        }
        let materialData = await materialFetch.json();
        let classData = await classFetch.json();
          dispatch(
            newMaterial(
              {materialData}
            ))
            dispatch(
              newClass(
                {classData}
              ))
        setError(null);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);



  return (<MaterialList loading={loading} handleChange={handleChange} materialClass={materialClass} />)


}

export default App;
