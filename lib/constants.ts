export const PASSWORD_MIN_LENGTH = 4;
export const PASSWORD_REGEX = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[#?!@$%^&*-]).+$"
)
export const PASSWORD_ERROR_MESSAGE = "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"