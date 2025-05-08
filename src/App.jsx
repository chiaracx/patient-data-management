import { useState } from 'react'
import { usePatients } from './hooks/usePatients.js'
import { useModal } from './hooks/useModal.js'
import PatientForm from './components/PatientForm.jsx'
import PatientList from './components/PatientList.jsx'
import addIcon from './assets/addIcon.svg'

function App() {
  const { patients, addPatient, updatePatient } = usePatients();
  const { isOpen, openModal, closeModal } = useModal();
  const [selectedPatient, setSelectedPatient] = useState(null);

  const onEdit  = (patient) => {
    setSelectedPatient(patient);
    openModal();
  }

  return (
    <div className="container mx-auto">
      <h1 className="app--title">Your Patient Data Manager</h1>
      <div className="flex justify-center p-6">
        <button onClick={() => {setSelectedPatient(null); openModal()}} className="button--add-patient flex justify-center items-center gap-x-2 bg-green-700 text-white px-4 py-2 rounded-2xl hover:bg-green-800"  >
          <img className="w-5 h-5 rounded-full" src={addIcon} alt="Add Patient Icon"/>
          Add Patient
        </button>
      </div>
      <PatientList patients={patients} onEdit={onEdit} />

      {isOpen && (
          <PatientForm
            patient={selectedPatient}
            
            onSave={(data) => {
              selectedPatient ? updatePatient(data) : addPatient(data);
            }}
            onClose={closeModal}
          />
        )}
     </div>
  )
}

export default App
