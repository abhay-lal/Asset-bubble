import z from 'zod';

const register = z.object({
  body: z.object({
    email: z.string().email().trim(),
    password: z
      .string()
      .trim()
      .refine(
        (val) =>
          !(!(val.length > 8) || !val.match(/\d/) || !val.match(/[a-zA-Z]/)),
        {
          message:
            'Password must be at least 8 characters long with at least 1 letter and 1 number',
          path: ['Register'],
        }
      ),
    name: z.string().trim(),
  }),
});

const login = z.object({
  body: z.object({
    email: z.string().email().trim(),
    password: z.string().trim(),
  }),
});

const logout = z.object({
  body: z.object({
    refreshToken: z.string().trim(),
  }),
});

const refreshTokens = z.object({
  body: z.object({
    refreshToken: z.string().trim(),
  }),
});

const forgotPassword = z.object({
  body: z.object({
    email: z.string().email().trim(),
  }),
});

const resetPassword = z.object({
  query: z.object({
    token: z.string().trim(),
  }),
  body: z.object({
    password: z
      .string()
      .trim()
      .refine(
        (val) =>
          !(!(val.length > 8) || !val.match(/\d/) || !val.match(/[a-zA-Z]/)),
        {
          message:
            'Password must be at least 8 characters long with at least 1 letter and 1 number',
          path: ['Register'],
        }
      ),
  }),
});

const verifyEmail = z.object({
  query: z.object({
    token: z.string().trim(),
  }),
});

export default {
  login,
  logout,
  register,
  refreshTokens,
  forgotPassword,
  resetPassword,
  verifyEmail,
};
