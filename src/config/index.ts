import dotenv from 'dotenv';
import path from 'path';
import z from 'zod';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const envSchema = z.object({
  NODE_ENV: z.enum(['production', 'development', 'test']),
  PORT: z.string().default('5000'),
  DB_URL: z
    .string()
    .startsWith('mongodb://', { message: 'Must provide a MongoDB URL' }),
  JWT_SECRET: z.string(),
  JWT_ACCESS_EXPIRATION_MINUTES: z.string().default('60'),
  JWT_REFRESH_EXPIRATION_DAYS: z.string().default('15'),
  JWT_RESET_PASSWORD_EXPIRATION_MINUTES: z.string().default('20'),
<<<<<<< HEAD
=======
  TWITTER_CONSUMER_KEY: z.string(),
  TWITTER_CONSUMER_SECRET: z.string(),
  TWITTER_ACCESS_TOKEN_KEY: z.string(),
  TWITTER_ACCESS_TOKEN_SECRET: z.string(),
>>>>>>> f16c2143db4a93fa3798e5e7ba817f2e2ca8982b
  // JWT_VERIFY_EMAIL_EXPIRATION_MINUTES: z.number().default(20),
});

const envVars = envSchema.safeParse(process.env);
if (!envVars.success) {
  throw new Error(
    envVars.error.issues
      .map((error) => `${error.path} ${error.message}`)
      .join('\n')
  );
}

export default {
  env: envVars.data.NODE_ENV,
  port: envVars.data.PORT,
  mongoose: {
    url:
      envVars.data.DB_URL + (envVars.data.NODE_ENV === 'test' ? '-test' : ''),
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ignoreUndefined: true,
    },
  },
  jwt: {
    secret: envVars.data.JWT_SECRET,
    accessExpirationMinutes: envVars.data.JWT_ACCESS_EXPIRATION_MINUTES,
    refreshExpirationDays: envVars.data.JWT_REFRESH_EXPIRATION_DAYS,
    resetPasswordExpirationMinutes:
      envVars.data.JWT_RESET_PASSWORD_EXPIRATION_MINUTES,
    verifyEmailExpirationMinutes:
      envVars.data.JWT_VERIFY_EMAIL_EXPIRATION_MINUTES,
  },
<<<<<<< HEAD
=======
  twitter: {
    consumerKey: envVars.data.TWITTER_CONSUMER_KEY,
    consumerSecret: envVars.data.TWITTER_CONSUMER_SECRET,
    accessToken: envVars.data.TWITTER_ACCESS_TOKEN_KEY,
    accessTokenSecret: envVars.data.TWITTER_ACCESS_TOKEN_SECRET,
  },
>>>>>>> f16c2143db4a93fa3798e5e7ba817f2e2ca8982b
};
