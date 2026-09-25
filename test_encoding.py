s = "dYrdY3 Guaranteed Authentic Indian/Veg Food Options"
try:
    print(s.encode('cp1252').decode('utf-8'))
except Exception as e:
    print(e)