// utility.js

// Save data to sessionStorage
export const saveToSessionStorage = (key, data) => {
    try {
      const serializedData = JSON.stringify(data);
      sessionStorage.setItem(key, serializedData);
    } catch (error) {
      console.error(`Error saving to sessionStorage: ${error.message}`);
    }
  };
  
  // Retrieve data from sessionStorage
  export const retrieveFromSessionStorage = (key) => {
    try {
      const serializedData = sessionStorage.getItem(key);
      return serializedData ? JSON.parse(serializedData) : null;
    } catch (error) {
      console.error(`Error retrieving from sessionStorage: ${error.message}`);
      return null;
    }
  };
  