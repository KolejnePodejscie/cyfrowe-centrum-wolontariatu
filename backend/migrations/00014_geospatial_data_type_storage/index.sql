ALTER TABLE events ALTER COLUMN latitude TYPE double precision USING 0::double precision;
ALTER TABLE events ALTER COLUMN longitude TYPE double precision USING 0::double precision;
