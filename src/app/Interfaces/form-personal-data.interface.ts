
export interface PersonalDataI {
    name: string;
    surname: string;
    secondSurname: string;
    dateBirth: string | number;
    phoneNumber: string | number;
    gender: string;

    contryTax: string;
    rfc: string;
    UScitizen: boolean;

    addressData: AddressDataI;

    salary: number | string;
    occupation: string;
    jobName: string;
    jobActivity: string;
    seniority: string;
    jobExperience: string;
    publicCharges: string | boolean;

    photo: string;
    typeDocument: string;
    frontDocument: string;
    backDocument: string;
    acceptAdvice: string | boolean;

    indexProgress: string;
    indexStep?:number;
}

export interface AddressDataI {

    country: string;
    zipCode: number | string;
    state: string;
    city: string;
    suburb: string;
    townhall: string;
    street: string;
}