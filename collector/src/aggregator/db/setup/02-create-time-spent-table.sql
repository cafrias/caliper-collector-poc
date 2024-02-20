CREATE TABLE time_spent (
	user_id INTEGER NOT NULL,
	activity_id INTEGER NOT NULL,
	class_id INTEGER NOT NULL,
	total_minutes INTEGER NOT NULL,
	registered_at TIMESTAMP NOT NULL
);
