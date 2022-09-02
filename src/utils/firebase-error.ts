type FirebaseMessageErrors =
  | "auth/email-already-in-use"
  | "auth/email-already-exists"
  | "auth/user-not-found"
  | "auth/invalid-email"
  | "auth/invalid-password"
  | "auth/invalid-display-name"
  | "auth/wrong-password"
  | "auth/too-many-requests";

enum ErrorMessage {
  EMAIL_ALREADY_IN_USE = "This email is already in use, please choose another one",
  EMAIL_ALREADY_EXISTS = "This email already exists",
  USER_NOT_FOUND = "User not found",
  INVALID_EMAIL = "Invalid email",
  INVALID_PASSWORD = "Invalid password",
  INVALID_DISPLAY_NAME = "Invalid username",
  WRONG_PASSWORD = "Wrong password",
  MANY_REQUESTS = "Too many attemps, please try again later",
  UNKNOWN_ERROR = "Unknown error, please reload page",
}

export const getFirebaseMessageError = (
  code: FirebaseMessageErrors
): ErrorMessage => {
  switch (code) {
    case "auth/email-already-in-use":
      return ErrorMessage.EMAIL_ALREADY_IN_USE;
    case "auth/email-already-exists":
      return ErrorMessage.EMAIL_ALREADY_EXISTS;
    case "auth/user-not-found":
      return ErrorMessage.USER_NOT_FOUND;
    case "auth/invalid-email":
      return ErrorMessage.INVALID_EMAIL;
    case "auth/invalid-password":
      return ErrorMessage.INVALID_PASSWORD;
    case "auth/invalid-display-name":
      return ErrorMessage.INVALID_DISPLAY_NAME;
    case "auth/wrong-password":
      return ErrorMessage.WRONG_PASSWORD;
    case "auth/too-many-requests":
      return ErrorMessage.MANY_REQUESTS;
    default:
      return ErrorMessage.UNKNOWN_ERROR;
  }
};
