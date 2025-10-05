ALTER TABLE organisations ALTER COLUMN id SET DEFAULT gen_random_uuid();  
ALTER TABLE events ALTER COLUMN id SET DEFAULT gen_random_uuid();  
ALTER TABLE eventTasks ALTER COLUMN id SET DEFAULT gen_random_uuid();  