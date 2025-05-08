import { useEffect, useState } from "react";
import ProfileCard from "./Card.jsx";
import PatientForm from "./PatientForm.jsx";
import { usePatients } from "../hooks/usePatients.js";
import addIcon from "../assets/addIcon.svg";

const PatientList = () => {
  const { patients, addPatient, updatePatient, setPatients } = usePatients();

  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const handleEdit = (patient) => {
        setSelectedPatient(patient);
    }

    const handleClose = () => {
        setSelectedPatient(null);
    }

  return (
    
  <div>
    <div className="flex justify-center p-6">
      <button
        onClick={() => setIsAddModalOpen(true)}
        className="button--add-patient flex justify-center items-center gap-x-2 bg-green-700 text-white px-4 py-2 rounded-2xl hover:bg-green-800"
      >
        <img
        className="w-5 h-5 rounded-full"
        src={addIcon}
        alt="Add Patient Icon"
        onError={(e) => (e.target.src = defaultAvatar)}
        />
        Add Patient
      </button>
    </div>
    {isAddModalOpen && (
        <PatientForm
          patient={null}
          onClose={() => setIsAddModalOpen(false)}
          onSave={addPatient}
        />
      )}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-6">
      {patients.map((patient, index) => (
        <ProfileCard
            key={index}
            patient={patient}
            onEdit={() => handleEdit(patient)}
        />
      ))}
      {selectedPatient && (
        <PatientForm
          patient={selectedPatient}
          onClose={handleClose}
          onSave={updatePatient}
        />
      )}
    </div>
  </div>
     
  );
};

export default PatientList;
