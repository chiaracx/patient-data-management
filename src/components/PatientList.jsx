import { useEffect, useState } from "react";
import ProfileCard from "./Card.jsx";
import EditModal from "./modals/EditModal.jsx";
import AddPatientModal from "./modals/AddPatient.jsx";
import addIcon from "../assets/addIcon.svg";

const PatientList = () => {
  const [profiles, setProfiles] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    fetch("https://63bedcf7f5cfc0949b634fc8.mockapi.io/users")
      .then((res) => res.json())
      .then((data) => setProfiles(data))
      .catch((error) => console.error("Error while loading patient profiles:", error));
  }, []);

    const handleEdit = (patient) => {
        setSelectedPatient(patient);
    }

    const handleSave = (updatedPatient) => {
        setProfiles((prevProfiles) =>
            prevProfiles.map((patient) =>
            patient.id === updatedPatient.id ? updatedPatient : patient
            )
        );
    }
    const handleClose = () => {
        setSelectedPatient(null);
    }

    const handleAddProfile = (newPatient) => {
      setProfiles((prev) => [...prev, newPatient]);
    };

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
        <AddPatientModal
          onClose={() => setIsAddModalOpen(false)}
          onSave={handleAddProfile}
        />
      )}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-6">
      {profiles.map((patient, index) => (
        <ProfileCard
            key={index}
            name={patient.name}
            avatar={patient.avatar}
            description={patient.description}
            website={patient.website}
            createdDate={patient.createdAt}
            id={patient.id}
            patient={patient}
            onEdit={() => handleEdit(patient)}
        />
      ))}
      {selectedPatient && (
        <EditModal
          patient={selectedPatient}
          onClose={handleClose}
          onSave={handleSave}
        />
      )}
    </div>
  </div>
     
  );
};

export default PatientList;
