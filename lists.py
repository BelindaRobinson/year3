calendars = [ "Work", "Home", "Family", "Gmail", "Facebook", "Birthdays", "NZ Holidays" ]
colours = [ "Red", "Yellow", "Blue", "Green", "Purple", "Pink", "Black" ]

for index in range(len(calendars)):
   print(calendars[index], colours[index])

days = list(range(1,31))
print("January", days)

days2d = [[1, "New Years Day"],[2, "Day After New Years Day"],[7, "Mates Birthday"],[15, "Back to work"]]
print(days2d)

daysd = {'1': 'New Years Day', '2': 'Day after New Years Day', '4': 'Bobs Birthday', '7': 'Back to work', '15': 'WOF is Due', '23': 'Meeting', '29': 'Dinner with Bob','31': 'Marys Birthday'}

for key, value in daysd.items():
   print(key,value)

#dictionarys are easy when using more then one list as such

calendarsd = {'new years day': 'nz hoilday', 'day after new years day': 'nz holiday', 'bobs bornday': 'borndays', 'back to work': 'work', 'wof in due': 'home', 'meeting': 'work', 'dinner with bob': 'gmail', 'marys bornday': 'borndays'}

for key, value in calendarsd.items():
   print(key, value)

print(days[1], "January", calendars[6], colours[6])

