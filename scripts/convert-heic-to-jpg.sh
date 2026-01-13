#!/bin/bash

# HEIC to JPEG Conversion Script
# Uses native macOS sips tool to preserve EXIF/GPS metadata
# Usage: ./convert-heic-to-jpg.sh

MEDIA_DIR="$(dirname "$0")/../public/media"
CONVERTED_COUNT=0
FAILED_COUNT=0

echo "Starting HEIC to JPEG conversion..."
echo "Media directory: $MEDIA_DIR"
echo ""

# Check if media directory exists
if [ ! -d "$MEDIA_DIR" ]; then
    echo "Error: Media directory not found at $MEDIA_DIR"
    exit 1
fi

# Count total HEIC files
TOTAL=$(find "$MEDIA_DIR" -name "*.HEIC" -o -name "*.heic" | wc -l | tr -d ' ')
echo "Found $TOTAL HEIC files to convert"
echo ""

# Convert each HEIC file
for heic_file in "$MEDIA_DIR"/*.HEIC "$MEDIA_DIR"/*.heic; do
    # Skip if no files match the pattern
    [ -e "$heic_file" ] || continue

    # Get filename without extension
    filename=$(basename "$heic_file")
    name="${filename%.*}"

    # Output JPEG path
    jpg_file="$MEDIA_DIR/${name}.jpg"

    echo "Converting: $filename -> ${name}.jpg"

    # Convert using sips (preserves EXIF metadata)
    if sips -s format jpeg "$heic_file" --out "$jpg_file" > /dev/null 2>&1; then
        ((CONVERTED_COUNT++))
        echo "  Success"
    else
        ((FAILED_COUNT++))
        echo "  FAILED"
    fi
done

echo ""
echo "================================"
echo "Conversion complete!"
echo "Converted: $CONVERTED_COUNT files"
echo "Failed: $FAILED_COUNT files"
echo "================================"

# Verify metadata on first converted file (if any exist)
if [ $CONVERTED_COUNT -gt 0 ]; then
    echo ""
    echo "Verifying metadata on sample file..."
    SAMPLE=$(find "$MEDIA_DIR" -name "*.jpg" | head -1)
    if [ -n "$SAMPLE" ]; then
        echo "Sample: $(basename "$SAMPLE")"
        echo ""
        echo "EXIF Data:"
        mdls -name kMDItemLatitude -name kMDItemLongitude -name kMDItemContentCreationDate "$SAMPLE"
    fi
fi
