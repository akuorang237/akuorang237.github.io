import React from 'react';
export const Select = ({ children, onValueChange, defaultValue }) => (
  <select onChange={(e) => onValueChange(e.target.value)} defaultValue={defaultValue} className="border p-2 rounded w-full">
    {children}
  </select>
);
export const SelectTrigger = ({ children }) => <>{children}</>;
export const SelectValue = ({ placeholder }) => <option disabled>{placeholder}</option>;
export const SelectContent = ({ children }) => <>{children}</>;
export const SelectItem = ({ value, children }) => <option value={value}>{children}</option>;
