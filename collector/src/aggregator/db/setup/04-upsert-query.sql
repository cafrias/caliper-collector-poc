INSERT INTO time_spent (user_id, activity_id, class_id, total_minutes, registered_at)
VALUES (55443, 554466, 201601, 1, DATE_TRUNC('day', '2019-11-15 11:30:00'::timestamp))
ON CONFLICT(registered_at, class_id, activity_id, user_id) DO UPDATE SET total_minutes = time_spent.total_minutes + 1;