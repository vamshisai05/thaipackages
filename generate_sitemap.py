import os
import re
import datetime
import logging
import xml.etree.ElementTree as ET

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(levelname)s: %(message)s')

BASE_URL = "https://www.thaipackages.com/"
ROOT_DIR = "."
CONTEXT_DIR = os.path.join(ROOT_DIR, "context")

def format_w3c_datetime(timestamp):
    dt = datetime.datetime.fromtimestamp(timestamp, tz=datetime.timezone.utc)
    return dt.isoformat(timespec='seconds')

def get_static_html_files():
    static_urls = []
    try:
        for filename in os.listdir(ROOT_DIR):
            if filename.endswith(".html"):
                # Exclude hidden files, 404, or known admin/old files
                if filename.startswith(".") or filename.startswith("_") or filename == "404.html":
                    continue
                # We can also exclude the old hardcoded package files as they are obsolete
                if filename in ["bangkok-pattaya-saver.html", "phuket-krabi-escape.html"]:
                    continue

                filepath = os.path.join(ROOT_DIR, filename)
                mtime = os.path.getmtime(filepath)
                
                # Clean up index.html to resolve to root
                url_path = "" if filename == "index.html" else filename
                full_url = f"{BASE_URL}{url_path}"
                
                static_urls.append({
                    "loc": full_url,
                    "lastmod": format_w3c_datetime(mtime)
                })
        logging.info(f"Found {len(static_urls)} static HTML pages.")
    except Exception as e:
        logging.error(f"Error reading static HTML files: {e}")
    return static_urls

def extract_slugs_from_js(filepath, url_template):
    dynamic_urls = []
    if not os.path.exists(filepath):
        logging.warning(f"File not found: {filepath}")
        return dynamic_urls

    try:
        mtime = os.path.getmtime(filepath)
        lastmod = format_w3c_datetime(mtime)

        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Simple regex to find slug values like slug: "bangkok-pattaya-classic-vacation"
        pattern = re.compile(r'slug:\s*["\']([^"\']+)["\']')
        slugs = pattern.findall(content)
        
        # Deduplicate while preserving order
        unique_slugs = list(dict.fromkeys(slugs))

        for slug in unique_slugs:
            full_url = f"{BASE_URL}{url_template}?id={slug}"
            dynamic_urls.append({
                "loc": full_url,
                "lastmod": lastmod
            })
        logging.info(f"Extracted {len(unique_slugs)} slugs from {filepath}.")
    except Exception as e:
        logging.error(f"Error parsing {filepath}: {e}")
        
    return dynamic_urls

def generate_sitemap():
    logging.info("Starting sitemap generation...")
    
    # 1. Extraction
    static_pages = get_static_html_files()
    
    packages_js_path = os.path.join(CONTEXT_DIR, "packages.js")
    package_pages = extract_slugs_from_js(packages_js_path, "package-detail.html")
    
    destinations_js_path = os.path.join(CONTEXT_DIR, "destinations.js")
    destination_pages = extract_slugs_from_js(destinations_js_path, "destination-detail.html")
    
    all_pages = static_pages + package_pages + destination_pages
    
    # 2. Transformation
    urlset = ET.Element("urlset", xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")
    
    for page in all_pages:
        url_el = ET.SubElement(urlset, "url")
        loc_el = ET.SubElement(url_el, "loc")
        loc_el.text = page["loc"]
        
        lastmod_el = ET.SubElement(url_el, "lastmod")
        lastmod_el.text = page["lastmod"]

    # 3. Load (Atomic Write)
    tree = ET.ElementTree(urlset)
    # Pretty print workaround for standard library
    ET.indent(tree, space="  ", level=0)
    
    temp_file = "sitemap_temp.xml"
    final_file = "sitemap.xml"
    
    try:
        tree.write(temp_file, encoding="utf-8", xml_declaration=True)
        os.replace(temp_file, final_file)
        logging.info(f"Successfully generated {final_file} with {len(all_pages)} URLs.")
    except Exception as e:
        logging.error(f"Failed to write sitemap: {e}")
        if os.path.exists(temp_file):
            os.remove(temp_file)

if __name__ == "__main__":
    generate_sitemap()
