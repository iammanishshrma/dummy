const userEndpoints = {
    SignUp: `${process.env.NEXT_PUBLIC_USER_SERVICE}${process.env.NEXT_PUBLIC_API_PREFIX}front/user/signup`,
    LoginMob: `${process.env.NEXT_PUBLIC_USER_SERVICE}${process.env.NEXT_PUBLIC_API_PREFIX}front/user/login_mobile`,
    VerifyOtp: `${process.env.NEXT_PUBLIC_USER_SERVICE}${process.env.NEXT_PUBLIC_API_PREFIX}front/user/verify_registration`,
    SignIn: `${process.env.NEXT_PUBLIC_USER_SERVICE}${process.env.NEXT_PUBLIC_API_PREFIX}front/user/login_pass`,
    getUser: `${process.env.NEXT_PUBLIC_USER_SERVICE}${process.env.NEXT_PUBLIC_API_PREFIX}front/user/profile`,
    getOtp: `${process.env.NEXT_PUBLIC_USER_SERVICE}${process.env.NEXT_PUBLIC_API_PREFIX}front/user/send_otp`,
    resendOtp: `${process.env.NEXT_PUBLIC_USER_SERVICE}${process.env.NEXT_PUBLIC_API_PREFIX}front/user/resend_otp`,
    forgetpwdOtp: `${process.env.NEXT_PUBLIC_USER_SERVICE}${process.env.NEXT_PUBLIC_API_PREFIX}front/user/forget-password`,
    getMobileOtp: `${process.env.NEXT_PUBLIC_USER_SERVICE}${process.env.NEXT_PUBLIC_API_PREFIX}front/user/mobile-otp`,
    verifyMobileOtp: `${process.env.NEXT_PUBLIC_USER_SERVICE}${process.env.NEXT_PUBLIC_API_PREFIX}front/user/verify-mobile`,
    getEmailOtp: `${process.env.NEXT_PUBLIC_USER_SERVICE}${process.env.NEXT_PUBLIC_API_PREFIX}front/user//email-otp`,
    verifyEmailOtp: `${process.env.NEXT_PUBLIC_USER_SERVICE}${process.env.NEXT_PUBLIC_API_PREFIX}front/user/verify-email`,
    updateProfile: `${process.env.NEXT_PUBLIC_USER_SERVICE}${process.env.NEXT_PUBLIC_API_PREFIX}front/user/profile`,
    resetPasswordMobile: `${process.env.NEXT_PUBLIC_USER_SERVICE}${process.env.NEXT_PUBLIC_API_PREFIX}front/user/reset-mobile`,
    verityResetPasswordMobile: `${process.env.NEXT_PUBLIC_USER_SERVICE}${process.env.NEXT_PUBLIC_API_PREFIX}front/user/verify-resetMobile`,
    mobileChangePasswordReset: `${process.env.NEXT_PUBLIC_USER_SERVICE}${process.env.NEXT_PUBLIC_API_PREFIX}front/user/reset-password`,
    resetPasswordEmail: `${process.env.NEXT_PUBLIC_USER_SERVICE}${process.env.NEXT_PUBLIC_API_PREFIX}front/user/reset-email`,
    verityResetPasswordEmail: `${process.env.NEXT_PUBLIC_USER_SERVICE}${process.env.NEXT_PUBLIC_API_PREFIX}front/user/verify-resetEmail`,
    emailChangePasswordReset: `${process.env.NEXT_PUBLIC_USER_SERVICE}${process.env.NEXT_PUBLIC_API_PREFIX}front/user/reset-password`,
    userChangePassword: `${process.env.NEXT_PUBLIC_USER_SERVICE}${process.env.NEXT_PUBLIC_API_PREFIX}front/user/change-password`,
    addAddress: `${process.env.NEXT_PUBLIC_USER_SERVICE}${process.env.NEXT_PUBLIC_API_PREFIX}front/user/address`,
    editAddress: `${process.env.NEXT_PUBLIC_USER_SERVICE}${process.env.NEXT_PUBLIC_API_PREFIX}front/user/address`,
    getAddress: `${process.env.NEXT_PUBLIC_USER_SERVICE}${process.env.NEXT_PUBLIC_API_PREFIX}front/user/address`,
    deleteAddressById: `${process.env.NEXT_PUBLIC_USER_SERVICE}${process.env.NEXT_PUBLIC_API_PREFIX}front/user/address`,
    makeDefaultAddress: `${process.env.NEXT_PUBLIC_USER_SERVICE}${process.env.NEXT_PUBLIC_API_PREFIX}front/user/default-address`,
    getAddressById: `${process.env.NEXT_PUBLIC_USER_SERVICE}${process.env.NEXT_PUBLIC_API_PREFIX}front/user/get-address`,
    socialSignin: `${process.env.NEXT_PUBLIC_USER_SERVICE}${process.env.NEXT_PUBLIC_API_PREFIX}front/user/auth_social_signin`,
    socialSignUp: `${process.env.NEXT_PUBLIC_USER_SERVICE}${process.env.NEXT_PUBLIC_API_PREFIX}front/user/auth_social_signup`,
};

const adminEndPoints = {
    languageList: `${process.env.NEXT_PUBLIC_ADMIN_SERVICE}front/languageList/list`,
};

const cmsEndPoints = {
    faqList: `${
        process.env.NEXT_PUBLIC_CMS_SERVICE + process.env.NEXT_PUBLIC_API_PREFIX
    }front/faq/list`,
    testimonialList: `${
        process.env.NEXT_PUBLIC_CMS_SERVICE + process.env.NEXT_PUBLIC_API_PREFIX
    }front/testimonial/list`,
};

export { userEndpoints, adminEndPoints, cmsEndPoints };
