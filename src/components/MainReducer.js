export const SEL_PATIENT = "SEL_PATIENT";
export const DESEL_PATIENT = "DESEL_PATIENT";
export const LOAD_PATIENT = "LOAD_PATIENT"


export const managePatient = (state, action) => {

    switch (action.type) {
        case SEL_PATIENT:
            let patient_list = [...state];
            let selected_patient_list = [...state];
            let sel = [...action];
            let idx = selected_patient_list.findIndex(p=>p.uid==patient_list[sel].uid);
            if (!idx >= 0) {
                selected_patient_list = [...selected_patient_list, patient_list[sel]];
                return [...selected_patient_list]
            }
            break;
        case DESEL_PATIENT:
            break;
        case LOAD_PATIENT:
            break;
        default:
            break;
    }
    return [...state]
};
