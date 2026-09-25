import re

file_path = r'c:\Users\theva\OneDrive\Desktop\thaipackages\context\packages.js'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

content = re.sub(r'".*Guaranteed Authentic Indian/Veg Food Options"', '"🇮🇳 Guaranteed Authentic Indian/Veg Food Options"', content)
content = re.sub(r'".*24/7 Telugu & Hindi On-Ground Support"', '"🗣️ 24/7 Telugu & Hindi On-Ground Support"', content)
content = re.sub(r'".*100% Private AC Vehicle Transfers"', '"🚐 100% Private AC Vehicle Transfers"', content)
content = re.sub(r'".*Well-paced, family & couple friendly itinerary"', '"👨‍👩‍👧 Well-paced, family & couple friendly itinerary"', content)
content = re.sub(r'".*Fully Customisable to your exact preferences"', '"💰 Fully Customisable to your exact preferences"', content)
content = re.sub(r'".*100% Telugu-Speaking Guides.*"', '"🗣️ 100% Telugu-Speaking Guides & Dedicated Local Coordinators Available"', content)
content = re.sub(r'".*25% Discount on Group Packages.*"', '"💰 25% Discount on Group Packages (4+ Travelers)"', content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Restored packages.js highlights")