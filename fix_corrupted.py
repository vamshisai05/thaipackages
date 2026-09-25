import os

file_path = r'c:\Users\theva\OneDrive\Desktop\thaipackages\context\packages.js'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix bangkok title
content = content.replace('title: "dY1dY- Bangkok Tour ?" 4 Days / 3 Nights",', 'title: "🇹🇭 Bangkok Tour – 4 Days / 3 Nights",')
content = content.replace('title: "dY1dY- Bangkok Tour ?" 4 Days / 3 Nights",', 'title: "🇹🇭 Bangkok Tour – 4 Days / 3 Nights",')

# Fix pattaya title
content = content.replace('title: "dY1dY- Pattaya Tour ?" 4 Days / 3 Nights",', 'title: "🌴 Pattaya Tour – 4 Days / 3 Nights",')
content = content.replace('title: "dY1dY- Pattaya Tour ?" 4 Days / 3 Nights",', 'title: "🌴 Pattaya Tour – 4 Days / 3 Nights",')

# Fix corrupted highlights that I might have broken
content = content.replace('"dYrdY3 Guaranteed Authentic Indian/Veg Food Options",', '"🇮🇳 Guaranteed Authentic Indian/Veg Food Options",')
content = content.replace('"dY-,? 24/7 Telugu & Hindi On-Ground Support",', '"🗣️ 24/7 Telugu & Hindi On-Ground Support",')
content = content.replace('"dYs? 100% Private AC Vehicle Transfers",', '"🚐 100% Private AC Vehicle Transfers",')
content = content.replace('"dY"??dYc??dY  Well-paced, family & couple friendly itinerary",', '"👨‍👩‍👧 Well-paced, family & couple friendly itinerary",')
content = content.replace('"dY\' Fully Customisable to your exact preferences",', '"💰 Fully Customisable to your exact preferences",')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Restored corrupted strings")