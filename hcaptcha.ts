import { verify } from 'hcaptcha';

const secretKey = process.env.HCAPTCHA_SECRET!;

export const onNewsLetterFormSubmit = async (formData:any) => {
  try {
    const token = formData.get('captcha')?.toString() || null;

    if (!token) {
      return { message: 'Invalid captcha', success: false };
    }

    const { success } = await verify(secretKey, token);

    if (!success) {
      return { message: 'Invalid captcha', success: false };
    }

    // Proceed with your form submission logic...
    return { message: 'Success', success: true };
  } catch (error) {
    return { message: 'Verification failed', success: false };
  }
};