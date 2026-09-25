import os
import re

file_path = r'c:\Users\theva\OneDrive\Desktop\thaipackages\js\app.js'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

slugs_to_delete = [
    'phuket-tour-packages',
    'krabi-tour-packages',
    'bangkok-pattaya-tour-packages',
    'bangkok-phuket-tour-packages',
    'thailand-tour-packages-from-hyderabad',
    'thailand-tour-packages-with-indian-food'
]

# Update app.js (remove fallbacks from FALLBACK_PACKAGES)
start_idx = content.find('const FALLBACK_PACKAGES = [')
if start_idx != -1:
    array_start = content.find('[', start_idx)
    array_end = content.find('];', array_start)
    array_content = content[array_start+1:array_end]

    objects = []
    depth = 0
    obj_start = -1
    in_string = False
    escape = False
    quote_char = ''

    for i in range(len(array_content)):
        char = array_content[i]
        if escape:
            escape = False
            continue
        if char == '\\':
            escape = True
            continue
        if in_string:
            if char == quote_char:
                in_string = False
            continue
        if char in '"\'':
            in_string = True
            quote_char = char
            continue
        if char == '{':
            if depth == 0:
                obj_start = i
            depth += 1
        elif char == '}':
            depth -= 1
            if depth == 0:
                objects.append((obj_start, i+1))

    kept_objects = []
    for start, end in objects:
        obj_str = array_content[start:end]
        slug_match = re.search(r'slug:\s*["\']([^"\']+)["\']', obj_str)
        if slug_match and slug_match.group(1) in slugs_to_delete:
            continue
        kept_objects.append(obj_str)

    new_array_content = ",\n      ".join(kept_objects)
    new_content = content[:array_start+1] + "\n      " + new_array_content + "\n    " + content[array_end:]
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

print("Cleaned up FALLBACK_PACKAGES")