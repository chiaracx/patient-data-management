import { useState, useEffect } from 'react';
import { fetchPatients } from '../services/patientService';

export function usePatients() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchPatients().then(setPatients);
  }, []);

  const addPatient = (newPatient) => {
    setPatients(prev => [...prev, newPatient]);
  };

  const updatePatient = (updatedPatient) => {
    setPatients(prev =>
      prev.map(p => (p.id === updatedPatient.id ? updatedPatient : p))
    );
  };

  return { patients, addPatient, updatePatient, setPatients };
}
