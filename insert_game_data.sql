-- Insert data into the Game table
INSERT INTO Game (`id`, `name`, `desc`) VALUES
(2, 'Badminton', 'A racquet sport played with a shuttlecock (birdie) over a net.'),
(3, 'Basketball', 'A team sport played on a rectangular court, aiming to score points by shooting a ball through a hoop.'),
(4, 'Boxing', 'A combat sport where two participants throw punches at each other within a boxing ring.'),
(5, 'Cycling BMX Freestyle', 'Freestyle BMX involves performing tricks and stunts on specially designed BMX bikes.'),
(6, 'Cycling Track', 'Track cycling involves racing on a banked oval track, typically indoors.'),
(7, 'Fencing', 'Fencing is a combat sport where participants use bladed weapons to score points on their opponent.'),
(8, 'Judo', 'Judo is a martial arts and combat sport focusing on throws and grappling techniques.'),
(9, 'Karate', 'Karate is a martial art involving striking, kicking, knee and elbow strikes, and open-handed techniques.'),
(10, 'Sailing', 'Sailing involves using wind to propel a boat across water.'),
(11, 'Shooting', 'Shooting sports involve using firearms or air guns to hit targets.'),
(12, 'Tennis', 'Tennis is a racket sport played individually (singles) or in pairs (doubles), hitting a ball over a net.'),
(13, 'Wrestling', 'Wrestling is a combat sport involving grappling techniques such as throws and pins.');

-- Insert data into the GameType table
INSERT INTO GameType (`game_type`, `game_id`) VALUES
('Target archery (distance shooting at stationary targets)', 1),
('Field archery (shooting at various targets in outdoor settings)', 1),
('Singles (one player per side)', 2),
('Doubles (two players per side)', 2),
('Regular basketball', 3),
('3x3 basketball (played with 3 players per team on a half-court)', 3),
('Amateur boxing (Olympics)', 4),
('Professional boxing (various sanctioning bodies)', 4),
('Park', 5),
('Street', 5),
('Dirt', 5),
('Vert', 5),
('Sprint', 6),
('Team pursuit', 6),
('Keirin', 6),
('Omnium', 6),
('Foil', 7),
('Épée', 7),
('Sabre', 7),
('Matches are won by ippon (full point)', 8),
('Waza-ari (half point)', 8),
('Penalties (Shido)', 8),
('Various styles exist, including Shotokan, Wado-ryu, and Goju-ryu.', 9),
('Different classes of boats exist, such as dinghies, keelboats, and multihulls', 10),
('Racing formats include fleet racing and match racing', 10),
('Rifle shooting', 11),
('Pistol shooting', 11),
('Shotgun shooting (trap, skeet)', 11),
('Precision shooting', 11),
('Court types include grass, clay, and hard courts', 12),
('Matches won by games and sets', 12),
('Freestyle wrestling (common in the Olympics, allowing holds above and below the waist)', 13),
('Greco-Roman wrestling (restricts holds to above the waist)', 13);