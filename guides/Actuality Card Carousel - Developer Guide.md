# Actuality Card Carousel - Developer Guide

This guide explains how to update the Actuality Card Carousel component used on the CSPM website.

## How It Works

The Actuality Card Carousel displays a series of cards that automatically scroll, showing important announcements or news. Each card contains:

- An image
- A title
- A brief summary
- Detailed content (shown when clicked)

## Updating Actualities

### File Structure

```
src/
├── assets/
│   ├── adbar/             # Images for actualities
│   │   ├── image1.jpg
│   │   ├── image2.jpg
│   │   └── ...
│   ├── actualities/       # Markdown content files
│   │   ├── actuality1.md
│   │   ├── actuality2.md
│   │   └── ...
│   └── actualityData.js   # Data configuration file
└── components/
    └── ActualityCardCarousel.jsx
```

### Step 1: Prepare Your Content

1. **Create a markdown file** for the actuality content in `src/assets/actualities/`
   - Use descriptive filenames (e.g., `new-service-2025.md`)
   - Format your content using markdown syntax

2. **Add your image** to `src/assets/adbar/`
   - Use optimized images (recommended size: 1200×800px)
   - Use descriptive filenames (e.g., `new-service-2025.jpg`)

### Step 2: Update the Data File

Open `src/assets/actualityData.js` and add or modify entries:

```javascript
const actualityData = [
  {
    id: "actuality1",  // Unique identifier
    title: "New Service Announcement",  // Card title
    image: require("./adbar/new-service-2025.jpg"),  // Image path
    contentPath: require("./actualities/new-service-2025.md"),  // Content path
    summary: "Brief description of the new service we're offering starting May 2025."  // Card summary
  },
  // Other actualities...
];

export default actualityData;
```

To **remove** an actuality, simply delete its entry from the array.
To **reorder** actualities, change their order in the array.

### Step 3: Content Formatting Tips

When writing markdown content files:

- Use headings (`#`, `##`, etc.) for structure
- Use bullet points (`*` or `-`) for lists
- Use `[Link text](URL)` for hyperlinks
- Include images with `![Alt text](image-url)`
- Use `**bold**` and `*italic*` for emphasis

### Example Markdown File

```markdown
# New Service Announcement

Starting **May 2025**, we are proud to offer our new financial planning service.

## What's included:

- Comprehensive financial health assessment
- Customized savings strategy
- Quarterly portfolio review
- Tax optimization consultation

For more information, please [contact us](https://csaladodpenzugyimentora.hu/contact) or visit our office.

![Service illustration](https://example.com/image.jpg)
```

### Testing Your Changes

After making updates:

1. Start the development server: `npm start`
2. Navigate to the actualities section
3. Verify that your new/updated actualities appear correctly
4. Test the automatic scrolling functionality
5. Click on cards to ensure modal content displays properly

## Troubleshooting

- **Images not showing**: Check file paths and ensure images are properly imported
- **Content not loading**: Verify markdown file paths are correct
- **Carousel not scrolling**: Check for JavaScript errors in browser console

For additional help, contact the website administrator.