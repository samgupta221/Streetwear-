export async function logUserSignup({ email }) {
  // In production, send POST to Apps Script or Sheet API
  return Promise.resolve();
}

export async function sendOtpToEmail(email) {
 
  return Promise.resolve("123456");
}

export async function logPasswordReset({ email }) {
  return Promise.resolve();
}
