import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
  const [status, setStatus] = useState(initialValue);
  console.log(status)
  

  useEffect(() => {
    try {
      const localStorageItems = localStorage.getItem(itemName);
      let parsedItem = initialValue;

      if (localStorageItems) {
        parsedItem = JSON.parse(localStorageItems);
      } else {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
      }
      parsedItem.showModal = false;
      setStatus(parsedItem);
    } catch (err) {
      setStatus(initialValue);
    }
  }, []);

  return {status, setStatus};
}

export default useLocalStorage;
