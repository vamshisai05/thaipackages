import os
import re

# Fix bachelor-packages.html
fpath = r'c:\Users\theva\OneDrive\Desktop\thaipackages\bachelor-packages.html'
with open(fpath, 'r', encoding='utf-8') as f:
    content = f.read()
content = content.replace('Thailand\ufffds', "Thailand's")
content = content.replace('friends\ufffd trips', "friends' trips")
content = content.replace('experience\ufffdfrom', "experience—from")
with open(fpath, 'w', encoding='utf-8') as f:
    f.write(content)

# Fix destinations.html
fpath = r'c:\Users\theva\OneDrive\Desktop\thaipackages\destinations.html'
with open(fpath, 'r', encoding='utf-8') as f:
    content = f.read()
content = content.replace('Nov \ufffd Apr', "Nov – Apr")
content = content.replace('Nov \ufffd Feb', "Nov – Feb")
with open(fpath, 'w', encoding='utf-8') as f:
    f.write(content)

# Fix group-tours.html
fpath = r'c:\Users\theva\OneDrive\Desktop\thaipackages\group-tours.html'
with open(fpath, 'r', encoding='utf-8') as f:
    content = f.read()
content = content.replace('More people \ufffd More fun \ufffd Bigger savings \ufffd Unforgettable memories', "More people • More fun • Bigger savings • Unforgettable memories")
with open(fpath, 'w', encoding='utf-8') as f:
    f.write(content)

# Fix honeymoon-packages.html
fpath = r'c:\Users\theva\OneDrive\Desktop\thaipackages\honeymoon-packages.html'
with open(fpath, 'r', encoding='utf-8') as f:
    content = f.read()
content = content.replace('â‚¹', "₹")
with open(fpath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed mojibake!")