export const urls = {
    APP: {
        LOGIN: "/login",
        REGISTER: "/register",
        FORGOTTEN_PASSWORD: "/forgottenPassword",
        UPDATE_PASSWORD: "/updatePassword",
        DASHBOARD: "/",
        PROFILE: "/profile",
        SUBSCRIBE: "/subscribe",
        SUCCESS: "/success",
        CANCELED: "/canceled",
    },
    API: {
        LOGIN: "/users/login",
        REGISTER: "/users/register",
        FORGOTTEN_PASSWORD: "/users/sendEmailToResetPassword",
        CHECK_TOKEN: "/users/checkToken",
        UPDATE_PASSWORD: "/users/updatePassword",
        PROFILE: "/users/updateProfile",
        GET_ALL_FOLDERS: "/folders/getAll",
        GET_ALL_NOTES: "/notes/getAll",
        CREATE_FOLDER: "/folders/createFolder",
        CREATE_NOTE: "/notes/createNote",
        DELETE_FOLDER: "/folders/deleteFolder",
        DELETE_NOTE: "/notes/deleteNote",
        UPDATE_NOTE: "/notes/updateNote",
        UPDATE_FOLDER: "/notes/updateFolder",
        CHECKOUT: "/checkout/createSession",
        VERIFY_PAYMENT: "/checkout/verifyPayment",
        GET_EMAILS_TO_SHARE: "/commons/getEmailsToShare",
        SHARE_NOTE: "/commons/shareNote",
    },
}
