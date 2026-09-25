import os
import re

file_path = r'c:\Users\theva\OneDrive\Desktop\thaipackages\context\packages.js'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

def update_package(slug, new_title, new_itinerary_str):
    global content
    # Find slug
    slug_match = re.search(r'slug:\s*["\']' + slug + r'["\']', content)
    if not slug_match: return
    start_idx = slug_match.start()
    
    # Replace title
    title_pattern = re.compile(r'(title:\s*["\'])(.*?)(["\'],)')
    title_match = title_pattern.search(content, start_idx)
    if title_match:
        content = content[:title_match.start(2)] + new_title + content[title_match.end(2):]
        
    # Replace itinerary array
    itinerary_start = content.find('itinerary: [', start_idx)
    if itinerary_start != -1:
        itinerary_end = content.find(']', itinerary_start) + 1
        content = content[:itinerary_start] + f"itinerary: {new_itinerary_str}" + content[itinerary_end:]
        
bangkok_itinerary = '''[
        { day: 1, title: "Bangkok Arrival & City Evening", summary: "Arrival at Bangkok Airport; Private transfer to hotel; Hotel check-in and relaxation; Evening visit to a local night market; Overnight stay in Bangkok." },
        { day: 2, title: "Bangkok City & Cultural Tour", summary: "Breakfast at hotel; Visit **Grand Palace & Wat Pho**; Visit **Wat Arun**; Chao Phraya River experience; Evening shopping at popular markets/malls; Overnight stay in Bangkok." },
        { day: 3, title: "Safari World & Shopping", summary: "Breakfast at hotel; Full-day visit to **Safari World Bangkok**; Enjoy Safari Park and animal shows; Return to Bangkok; Evening shopping and leisure; Overnight stay in Bangkok." },
        { day: 4, title: "Leisure & Departure", summary: "Breakfast and hotel check-out; Free time for shopping or leisure, depending on flight timing; Transfer to Bangkok Airport; **Departure with wonderful memories of Bangkok.**" }
      ]'''

pattaya_itinerary = '''[
        { day: 1, title: "Pattaya Arrival & Nightlife", summary: "Arrival at Bangkok Airport; Transfer to Pattaya; Hotel check-in and relaxation; Evening at leisure; Experience Pattaya’s vibrant nightlife, including **Walking Street, live music, bars and entertainment venues**; Overnight stay in Pattaya." },
        { day: 2, title: "Coral Island & Pattaya Nightlife", summary: "Breakfast at hotel; Coral Island (Koh Larn) tour by speedboat; Enjoy beaches, swimming and optional water activities; Return to Pattaya; Evening free for dinner and nightlife; Explore **Walking Street and Pattaya’s evening entertainment**; Overnight stay in Pattaya." },
        { day: 3, title: "Pattaya Sightseeing & Evening Entertainment", summary: "Breakfast at hotel; Visit **Sanctuary of Truth**; Visit Pattaya Viewpoint; Shopping and leisure time; Evening at leisure or enjoy a **cabaret/entertainment show**; Optional nightlife experience; Overnight stay in Pattaya." },
        { day: 4, title: "Leisure & Departure", summary: "Breakfast and hotel check-out; Free time for shopping or relaxation; Transfer to Bangkok Airport; **Departure with unforgettable Pattaya memories.**" }
      ]'''

update_package('bangkok-tour-packages', '🇹🇭 Bangkok Tour – 4 Days / 3 Nights', bangkok_itinerary)
update_package('pattaya-tour-packages', '🌴 Pattaya Tour – 4 Days / 3 Nights', pattaya_itinerary)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated successfully.")