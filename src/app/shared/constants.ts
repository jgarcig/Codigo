
export const PURE_EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

// export const PHONE_REGEXP = /^[0-9]*$/;
export const PHONE_REGEXP = /^[0-9]{10}$/;

export const NAME_REGEXP = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

export const POSTAL_CODE_REGEXP = /\d{5}/;

export const ADDRESS_REGEXP = /^[0-9]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

export const LOCATION_REGEXP = /^[A-z ]+$/;

export const RFC_REGEXP = /^[A-Z&Ñ]{3,4}[0-9]{2}(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])[A-Z0-9]{2}[0-9A]$/;


