import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  userId: JSON.parse(localStorage.getItem("userId")) || null,
  loading: false,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        userId: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        userId: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        userId: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        userId: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("userId", JSON.stringify(state.userId));
  }, [state.userId]);

  return (
    <AuthContext.Provider
      value={{
        userId: state.userId,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
