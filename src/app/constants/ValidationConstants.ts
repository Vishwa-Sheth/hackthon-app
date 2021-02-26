import { Validators } from "@angular/forms";


//Form validations

export var phoneNumberValidation = [
  Validators.required,
  Validators.pattern('^[^0-5][^/S][0-9]{8}$'),
  Validators.maxLength(10),
  Validators.minLength(10),
]


export var emailValidation = [
  Validators.required,
  Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'),
]

export var titleValidation = [
  Validators.required
]

export var nameValidation = [
  Validators.required,
  Validators.pattern('^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$'),
]

export var passwordValidation = [
  Validators.required,
  Validators.pattern('^[A-Z][a-z]+[@]+[0-9]+$'),
  Validators.minLength(8)
]

export var confirmPasswordValidation = [
  Validators.required
]

export var dobValidation = [
  Validators.required,
  //Validators.pattern('^(0[1-9]|1[012])[- /.] (0[1-9]|[12][0-9]|3[01])[- /.] (19|20)\d\d$'),
]

export var agreeTNC = [
  Validators.requiredTrue,
]

export var otpValidation = [
  Validators.required,
  Validators.pattern('^[0-9]{6}$'),
  Validators.maxLength(6),
  Validators.minLength(6),
]

export var pincodeValidation = [
  Validators.required,
  Validators.maxLength(6),
  Validators.minLength(6)
]

export var pancardValidation = [
  //Validators.pattern('^([A-Z]{5}[0-9]{4}[A-Z]{1}) | (.{10})$'),
  Validators.maxLength(10),
  Validators.minLength(10),
]
