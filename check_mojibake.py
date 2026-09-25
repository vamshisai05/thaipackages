import os
import re

def check_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            # common mojibake sequences: â€™, â€œ, â€, ðŸ, Ã
            matches = re.findall(r'[âðÃÂ][^\x00-\x7F]+', content)
            if matches:
                print(f"{filepath}: {set(matches)}")
            
            # check for replacement characters
            if '\ufffd' in content:
                print(f"{filepath}: contains \\ufffd")
    except Exception as e:
        pass

for root, dirs, files in os.walk(r'c:\Users\theva\OneDrive\Desktop\thaipackages'):
    for file in files:
        if file.endswith(('.html', '.js', '.css')):
            check_file(os.path.join(root, file))
