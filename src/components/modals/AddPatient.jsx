import { useState } from "react";
import '../../styles/Modal.css';

const AddPatientModal = ({ onClose, onSave }) => {
    const [formData, setFormData] = useState({
        name: "",
        avatar: "",
        description: "",
        website: "",    
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.description) {
            alert("Please fill in all required fields.");
            return;
        }
        const newPatient = {
            ...formData,
            createdAt: new Date().toISOString(),
        };
        onSave(newPatient);
        onClose();
    }

    return(
        <>
            <div className="modal-backdrop" onClick={onClose} />
            <div className="modal-container modal--edit fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                <form
                onSubmit={handleSubmit}
                className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md"
                >
                    <div className="modal--header">
                        <h2 className="modal--title text-xl font-bold mb-4">New Patient</h2>
                    </div>

                    <div className="modal--content">
                        <label className="modal--field block">
                            Name:
                            <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border rounded"
                            required
                            />
                        </label>

                        <label className="modal--field block">
                            Avatar URL:
                            <input
                            type="url"
                            name="avatar"
                            value={formData.avatar}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border rounded"
                            />
                        </label>

                        <label className="modal--field block">
                            Description:
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Enter a brief description"
                                className="w-full mt-1 p-2 border rounded"
                                rows={4}
                                required
                            />
                        </label>

                        <label className="modal--field block">
                            Website:
                            <input
                                type="url"
                                name="website"
                                value={formData.website}
                                onChange={handleChange}
                                placeholder="https://example.com"
                                className="w-full mt-1 p-2 border rounded"
                            />
                        </label>
                    </div>

                    <div className="mmodal--footer flex justify-center gap-4 mt-6">
                        <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700">Save</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default AddPatientModal;