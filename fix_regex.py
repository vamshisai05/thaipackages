import re

file_path = r'c:\Users\theva\OneDrive\Desktop\thaipackages\context\packages.js'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace title for bangkok
content = re.sub(
    r'slug:\s*"bangkok-tour-packages",\s*title:\s*".*?",',
    'slug: "bangkok-tour-packages",\n      title: "🇹🇭 Bangkok Tour – 4 Days / 3 Nights",',
    content
)

# Replace title for pattaya
content = re.sub(
    r'slug:\s*"pattaya-tour-packages",\s*title:\s*".*?",',
    'slug: "pattaya-tour-packages",\n      title: "🌴 Pattaya Tour – 4 Days / 3 Nights",',
    content
)

# Fix corrupted highlights globally
content = re.sub(r'".*Guaranteed Authentic Indian/Veg Food Options"', '"🇮🇳 Guaranteed Authentic Indian/Veg Food Options"', content)
content = re.sub(r'".*24/7 Telugu & Hindi On-Ground Support"', '"🗣️ 24/7 Telugu & Hindi On-Ground Support"', content)
content = re.sub(r'".*100% Private AC Vehicle Transfers"', '"🚐 100% Private AC Vehicle Transfers"', content)
content = re.sub(r'".*Well-paced, family & couple friendly itinerary"', '"👨‍👩‍👧 Well-paced, family & couple friendly itinerary"', content)
content = re.sub(r'".*Fully Customisable to your exact preferences"', '"💰 Fully Customisable to your exact preferences"', content)
content = re.sub(r'".*100% Telugu-Speaking Guides.*"', '"🗣️ 100% Telugu-Speaking Guides & Dedicated Local Coordinators Available"', content)
content = re.sub(r'".*25% Discount on Group Packages.*"', '"💰 25% Discount on Group Packages (4+ Travelers)"', content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Restored successfully via regex")