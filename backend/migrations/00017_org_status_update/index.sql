ALTER TABLE organisations ALTER COLUMN isVerified TYPE TEXT USING 'pending'::TEXT;
ALTER TABLE organisations ALTER COLUMN isVerified SET DEFAULT 'pending'::TEXT;
