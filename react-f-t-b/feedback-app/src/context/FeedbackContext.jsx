import { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const BASE_URL = 'http://localhost:8080/feedback';

  const fetchFeedback = async () => {
    // const resp = await fetch(BASE_URL + '?sleep=1000');
    const resp = await fetch(BASE_URL);
    const data = await resp.json();
    setFeedback(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  // set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      const resp = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
      });
      if (resp.ok) {
        setFeedback(feedback.filter((item) => item.id !== id));
      } else {
        console.err(`Error deleting by id=${id}`);
      }
    }
  };

  const addFeedback = async (newFeedback) => {
    newFeedback.id = uuidv4();

    const resp = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });
    const data = await resp.json();

    setFeedback([data, ...feedback]);
  };

  const updateFeedback = async (id, updItem) => {
    updItem.id = id;
    const resp = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updItem),
    });
    if (resp.ok) {
      const data = await resp.json();
      setFeedback(feedback.map((item) => (item.id === id ? data : item)));
    } else {
      console.err(`Error updating by id=${id}`);
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
