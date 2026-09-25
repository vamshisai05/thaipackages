import os

files_to_check = [
    r'c:\Users\theva\OneDrive\Desktop\thaipackages\context\contact.js',
    r'c:\Users\theva\OneDrive\Desktop\thaipackages\context\business.js',
    r'c:\Users\theva\OneDrive\Desktop\thaipackages\context\content.js'
]

for filepath in files_to_check:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        if '\ufffd' in content or 'â' in content or 'ð' in content:
            print(f"Found corruption in {filepath}")