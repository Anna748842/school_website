USE rms_school;

INSERT IGNORE INTO news (id, title, date, category, description) VALUES
  (1, 'Karam Festival Celebration', '10 Sep 2026', 'Events',
   'Students participated in cultural performances at the Karam Festival celebration.'),
  (2, 'Matric Examination Achievers Felicitated', '20 Mar 2026', 'Achievement',
   'Students who performed exceptionally well in the 2025 Matric examination were felicitated.'),
  (3, '2024 Batch Silver Jubilee Reunion', '15 Apr 2026', 'Alumni',
   'Former students of the 2001 batch returned to the school for a Silver Jubilee reunion.'),
  (4, 'Independence Day Celebration', '15 Aug 2026', 'Event',
   'School celebrates Independence Day with patriotic fervor and cultural programs.');

INSERT IGNORE INTO events (id, date, title, location) VALUES
  (1, '10 Oct 2026', 'Sports Day', 'School Playground'),
  (2, '18 Nov 2026', 'Annual Function', 'School Auditorium'),
  (3, '25 Dec 2026', 'Winter Break', 'School Campus');