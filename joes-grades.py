joesgrades = [["compx101", "A+", "15"], ["compx150", "B+", 15], ["compx189", "C", 15], ["compx183", "B-", 15], ["compx194", "A+", 30],  ["maths102", "E", 15], ["maths101", "D", 15]]

grading = {'E': '0', 'D': '0', 'C-': '1', 'C': '2', 'C+': '3', 'B-': '4', 'B': '5', 'B+': '6', 'A-': '7', 'A': '9', 'A+': '9'}

grades = {'compx101': 'A+', 'compx150': 'B+', 'compx189': 'C', 'compx183': 'B-', 'compx194': 'A+', 'maths102': 'E', 'maths101': 'D'}

a = grades.get('compx101')
a1 = grades.get('compx150')
a2 = grades.get('compx189')
a3 = grades.get('compx183')
a4 = grades.get('compx194')
a5 = grades.get('maths102')
a6 = grades.get('maths101')

b = grading.get(a)
b1 = grading.get(a1)
b2 = grading.get(a2)
b3 = grading.get(a3)
b4 = grading.get(a4)
b5 = grading.get(a5)
b6 = grading.get(a6)

c = joesgrades[0][0]
c1 = joesgrades[1][0]
c2 = joesgrades[2][0]
c3 = joesgrades[3][0]
c4 = joesgrades[4][0]
c5 = joesgrades[5][0]
c6 = joesgrades[6][0]

d = joesgrades[0][2]
d1 = joesgrades[1][2]
d2 = joesgrades[2][2]
d3 = joesgrades[3][2]
d4 = joesgrades[4][2]
d5 = joesgrades[5][2]
d6 = joesgrades[6][2]


print("paper name:", c, "paper grade:", a, "paper points:", d, "paper gps", b)


