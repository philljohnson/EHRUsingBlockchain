export interface doctorID{
    $class : string,
    DoctorId : string
}

export interface Address{
    
    $class: string,
    number: string,
    street: string,
    city: string,
    country: string,
    PinCode: string
}

export interface DoctorProfile{
    $class : string,
    profile_id: string,
    Doctor: doctorID,
    firstName: string,
    lastName: string,
    EmailAddress: string,
    Dob: number,
    Qualifications: string[],
    ImageURL: string,
    address : Address
}