import { getList } from "../servises/getList";
import { useEffect, useState } from "react";

export const useList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)

  const handleInitialLoad = async () => {
    setLoading(true);
    try {
      const data = await getList();
      setList(data.documents);
      setError()
    } catch (error) {
      setError("could not fetch Todo list Please reload the page");
    }

    setLoading(false);
  };
  const handleReload = async () => {
    try {
      const data = await getList();
      setList(data.documents);
      setError()
    } catch (_) {
      setError("could not reload Todo list");
    }
   
  };

  useEffect(() => {
    handleInitialLoad();
  }, []);

  return { list, reloadData: handleReload, loading, error };
};
