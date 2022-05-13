import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [material, setMaterial] = useState<any>(null);
  const [materialClass, setMaterialClass] = useState<any>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>("");

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
        setMaterial(materialData);
        setMaterialClass(classData);
        setError(null);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  console.log("Material", material)
  console.log("MaterialClass", materialClass)


  return (null)


}

export default App;
