export interface IDataRow {
  jour: number;
  Nom: string;
  Description: string;
  Vegan:boolean; 
}

const api = () => {
  const getEntreeDuJour = ():Promise<IDataRow[]> => {
    return fetch("http://localhost:8000/api/entreesdujour", {
      method: "GET",
    }).then((res) => res.json());
  };
  return {
    getEntreeDuJour,
  };
};

export default api();
