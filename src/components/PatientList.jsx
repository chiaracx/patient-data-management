import ProfileCard from "./Card.jsx";

const PatientList = ( {patients, onEdit}) => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-6">
        {patients.map((patient) => (
          <ProfileCard
              key={patient.id}
              patient={patient}
              onEdit={() => onEdit(patient)}
          />
        ))}
    </div>
  );
};

export default PatientList;
