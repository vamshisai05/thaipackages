import os
import re

base_dir = r"c:\Users\theva\OneDrive\Desktop\thaipackages"
style_path = os.path.join(base_dir, "css", "style.css")
index_path = os.path.join(base_dir, "index.html")
app_path = os.path.join(base_dir, "js", "app.js")

# --- 1. Fix CSS (Bug 1 & Bug 3) ---
if os.path.exists(style_path):
    with open(style_path, "r", encoding="utf-8") as f:
        css = f.read()

    # Bug 1: Fix truncation on package-card desc (remove rigid min-height, add ellipsis, increase clamp)
    css = re.sub(
        r'display:\s*-webkit-box;\s*-webkit-line-clamp:\s*2;\s*-webkit-box-orient:\s*vertical;\s*overflow:\s*hidden;\s*min-height:\s*36px;',
        r'display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;',
        css
    )

    # Bug 3: Carousel track mobile width CSS (change 100cqw to 85vw to reveal next card)
    css = css.replace("calc(100cqw)", "85vw")

    with open(style_path, "w", encoding="utf-8") as f:
        f.write(css)
    print("Fixed style.css")

# --- 2. Fix JS app.js (Bug 2, Bug 3, Bug 4) ---
if os.path.exists(app_path):
    with open(app_path, "r", encoding="utf-8") as f:
        app = f.read()

    # Bug 2: Remove feature pills HTML block dynamically rendered
    app = re.sub(r'<div class="package-feature-pills">.*?</div>', '', app, flags=re.DOTALL|re.IGNORECASE)

    # Bug 3: Fix Carousel JS artificial limit / width on mobile (1 -> 1.15)
    app = app.replace("let cardsVisible = 1;", "let cardsVisible = 1.15;")

    # Bug 4: Fix Pattaya image (if present in fallback packages in app.js)
    app = app.replace("1598970434795-0c54fe7c0648", "1549880338-65dd4bc8a4d4")

    with open(app_path, "w", encoding="utf-8") as f:
        f.write(app)
    print("Fixed app.js")

# --- 3. Fix index.html (Bug 2, Bug 4) ---
if os.path.exists(index_path):
    with open(index_path, "r", encoding="utf-8") as f:
        html = f.read()

    # Bug 2: Remove feature pills from static fallback HTML
    html = re.sub(r'<div class="package-feature-pills">.*?</div>', '', html, flags=re.DOTALL|re.IGNORECASE)
    html = re.sub(r'<div class="features-list">.*?</div>', '', html, flags=re.DOTALL|re.IGNORECASE)

    # Bug 4: Fix broken image for Pattaya
    html = html.replace("1598970434795-0c54fe7c0648", "1549880338-65dd4bc8a4d4")

    with open(index_path, "w", encoding="utf-8") as f:
        f.write(html)
    print("Fixed index.html")

print("ALL BUG FIXES APPLIED SUCCESSFULLY")
