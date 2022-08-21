use vf5usfj_db;

INSERT INTO user
    (username, email, password)
VALUES
    ('JudgementKazzy', 'kkiryu@test.com', 'sunflower'),
    ('MadDog', 'gmajima@test.com', 'kiryuchan');


INSERT INTO log
    (character_name, hours_played, user_id),
VALUES
    ('Akira Yuki', 3, 1),
    ('Kage-Maru', 1, 2)