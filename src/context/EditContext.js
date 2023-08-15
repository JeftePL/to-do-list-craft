import { createContext, useEffect, useRef, useState } from "react";

export const EditContext = createContext();
EditContext.displayName = "Edit Mode";

export default function EditProvider({ children }) {
  const [editMode, setEditMode] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if(inputRef.current) {
      inputRef.current.focus();
    }
  }, [editMode, inputRef])

  return (
    <EditContext.Provider value={{ editMode, setEditMode, inputRef }}>
      {children}
    </EditContext.Provider>
  )
}