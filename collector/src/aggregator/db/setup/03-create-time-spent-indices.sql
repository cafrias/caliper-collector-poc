CREATE UNIQUE INDEX daily_class_activity_user ON time_spent (registered_at, class_id, activity_id, user_id);