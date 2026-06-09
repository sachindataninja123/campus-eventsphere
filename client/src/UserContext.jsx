import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const API_URL = "http://localhost:8000/api/user";

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);


  const authConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };


 
  const getCurrentUser = async () => {
    try {
      setLoading(true);

      const { data } = await axios.get(`${API_URL}/auth/me`, authConfig);

      if (data.success) {
        setUser(data.user);
      }
    } catch (error) {
      console.log(error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };


  const login = async (email, password) => {
    try {
      setLoading(true);

      const { data } = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });

      if (data.success) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
        setUser(data.user);
      }

      return data;
    } catch (error) {
      return error.response.data;
    } finally {
      setLoading(false);
    }
  };


  const register = async (userData) => {
    try {
      setLoading(true);

      const { data } = await axios.post(`${API_URL}/register`, userData);

      console.log(data);

      return data;
    } catch (error) {
      return error.response.data;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setUser(null);
  };

 
  const getEvents = async () => {
    try {
      setLoading(true);

      const { data } = await axios.get(`${API_URL}/event/get-events`);

      if (data.success) {
        setEvents(data.events);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  
  const createEvent = async (formData) => {
    try {
      setLoading(true);

      const { data } = await axios.post(
        `${API_URL}/event/create-event`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        },
      );

      if (data.success) {
        getEvents();
      }

      return data;
    } catch (error) {
      return error.response.data;
    } finally {
      setLoading(false);
    }
  };

  
  const deleteEvent = async (id) => {
    try {
      setLoading(true);

      const { data } = await axios.delete(
        `${API_URL}/event/delete-event/${id}`,
        authConfig,
      );

      if (data.success) {
        getEvents();
      }

      return data;
    } catch (error) {
      return error.response.data;
    } finally {
      setLoading(false);
    }
  };

  
  const updateEvent = async (id, formData) => {
    try {
      setLoading(true);

      const { data } = await axios.put(
        `${API_URL}/event/update-event/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        },
      );

      if (data.success) {
        getEvents();
      }

      return data;
    } catch (error) {
      return error.response.data;
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    getEvents();

    if (token) {
      getCurrentUser();
    }
  }, [token]);

  return (
    <AppContext.Provider
      value={{
        user,
        token,
        events,
        loading,

        login,
        register,
        logout,

        getEvents,
        createEvent,
        updateEvent,
        deleteEvent,

        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
