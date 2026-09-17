const fs = require('fs');
const path = require('path');

function processFile(filePath) {
    if (!fs.existsSync(filePath)) {
        console.log("Not found:", filePath);
        return;
    }
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Move price wrap in HTML
    const cardRegex = /<div class="package-card-body">\s*<span class="package-destination">([\s\S]*?)<div class="package-card-footer">\s*<div class="package-price-wrap">([\s\S]*?)<\/div>\s*<a href="([^"]+)"([^>]*)>([\s\S]*?)<\/a>\s*<\/div>/g;
    content = content.replace(cardRegex, (match, bodyContent, priceWrapContent, href, aAttrs, aText) => {
        return `<div class="package-card-body">
                  <div class="package-price-wrap">${priceWrapContent}</div>
                  <span class="package-destination">${bodyContent}<div class="package-card-footer" style="text-align: center; width: 100%;">
                    <a href="${href}"${aAttrs}>${aText}</a>
                  </div>`;
    });

    // 2. Center footer for button
    content = content.replace(/<div class="package-card-footer">/g, '<div class="package-card-footer" style="text-align: center; width: 100%;">');
    content = content.replace(/<div class="package-card-footer" style="text-align: center; width: 100%;" style="text-align: center; width: 100%;">/g, '<div class="package-card-footer" style="text-align: center; width: 100%;">');

    // 3. Replace broken Unsplash image
    content = content.replace(/1552465011-b4e21bf6e79a/g, '1509339022327-1e1e25360a41');

    // 4. Strip emojis from pill features in HTML
    content = content.replace(/<span class="pill-feature">([^<]+)<\/span>/g, (match, text) => {
        let noEmoji = text.replace(/[^A-Za-z0-9\s\+%\/-]/g, '').trim();
        noEmoji = noEmoji.replace(/\s{2,}/g, ' ');
        return `<span class="pill-feature">${noEmoji}</span>`;
    });

    // 5. Strip emojis from featurePillsMap in JS
    let isFeaturePills = false;
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('const featurePillsMap = {')) isFeaturePills = true;
        if (isFeaturePills && lines[i].includes('};')) isFeaturePills = false;
        
        if (isFeaturePills) {
            lines[i] = lines[i].replace(/'([^']+)'/g, (m, text) => {
                let noEmoji = text.replace(/[^A-Za-z0-9\s\+%\/-]/g, '').trim();
                noEmoji = noEmoji.replace(/\s{2,}/g, ' ');
                return "'" + noEmoji + "'";
            });
        }
    }
    content = lines.join('\n');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log("Processed:", filePath);
}

processFile('c:\\Users\\theva\\OneDrive\\Desktop\\thaipackages\\index.html');
processFile('c:\\Users\\theva\\OneDrive\\Desktop\\thaipackages\\js\\app.js');
processFile('c:\\Users\\theva\\OneDrive\\Desktop\\thaipackages\\context\\packages.js');

console.log("ALL FIXES APPLIED SUCCESSFULLY");
