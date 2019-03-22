export interface MedicalEmergency {
    id: string,
    patient_id: string,
    doctor_id: string,
    medical_center_id: string,
    date: string,
    priority: string,
    state: string,
    photo: string,
    patient_description: string,
    doctor_description: string,
    address: string,
    coordLat: string,
    coordLong: string
}