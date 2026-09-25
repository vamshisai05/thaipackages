import os

files_to_check = [
    r'c:\Users\theva\OneDrive\Desktop\thaipackages\context\packages.js',
    r'c:\Users\theva\OneDrive\Desktop\thaipackages\js\app.js',
    r'c:\Users\theva\OneDrive\Desktop\thaipackages\index.html'
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
            print( (f"{filepath} context: " + repr(content[start:end])).encode('ascii', 'replace').decode('ascii') )
            idx += 1