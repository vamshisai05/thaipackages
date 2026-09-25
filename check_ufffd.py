import os

files_to_check = [
    r'c:\Users\theva\OneDrive\Desktop\thaipackages\bachelor-packages.html',
    r'c:\Users\theva\OneDrive\Desktop\thaipackages\destinations.html',
    r'c:\Users\theva\OneDrive\Desktop\thaipackages\group-tours.html'
]

for filepath in files_to_check:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        idx = 0
        while True:
            idx = content.find('\ufffd', idx)
            if idx == -1:
                break
            start = max(0, idx - 30)
            end = min(len(content), idx + 30)
            print(f"{filepath} context: {content[start:end]}")
            idx += 1