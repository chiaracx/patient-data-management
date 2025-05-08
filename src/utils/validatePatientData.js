export function validatePatientData(patient) {
    const errors = {};

    if (!patient.name) {
        errors.name = "Name is required";
    } else if (patient.name.length < 3) {
        errors.name = "Name must be at least 3 characters long";
    }

    if (!patient.description) {
        errors.description = "Description is required";
    } else if (patient.description.length < 10) {
        errors.description = "Description must be at least 10 characters long";
    }

    if (patient.website && !/^https?:\/\/.+\..+/.test(patient.website)) {
        errors.website = "Website URL must be a valid URL";
    }

    return errors;
}