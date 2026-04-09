import os
try:
    from PIL import Image, ImageDraw, ImageFont, ImageOps
except ImportError:
    print("Pillow not installed")
    exit(1)

def get_font(size):
    font_paths = [
        "C:\\Windows\\Fonts\\arialbd.ttf",
        "C:\\Windows\\Fonts\\arial.ttf",
        "C:\\Windows\\Fonts\\seguiemj.ttf",
    ]
    for path in font_paths:
        if os.path.exists(path):
            try:
                return ImageFont.truetype(path, size)
            except Exception:
                pass
    return ImageFont.load_default()

public_dir = "public"
exclude = ['me.jpeg', 'card.jpeg', 'apple-touch-icon.png', 'favicon.ico']

def watermark_image(path):
    try:
        with Image.open(path) as img:
            # We must handle image orientation (Exif) for some photos from mobile
            img = ImageOps.exif_transpose(img)
            
            orig_mode = img.mode
            if orig_mode != 'RGBA':
                img = img.convert('RGBA')
            
            width, height = img.size
            if width < 100 or height < 100:
                print(f"Skipping {path}, too small")
                return # Skip tiny images
                
            # Font size: ~5% of image height, max 120
            font_size = int(max(20, min(120, height * 0.05)))
            font = get_font(font_size)
            
            txt_layer = Image.new('RGBA', img.size, (255, 255, 255, 0))
            draw = ImageDraw.Draw(txt_layer)
            
            text = "Mahakal Property Dealer\nShivam Tomar"
            
            # calculate text size
            try:
                bbox = draw.multiline_textbbox((0, 0), text, font=font, align="center")
                tw = bbox[2] - bbox[0]
                th = bbox[3] - bbox[1]
            except AttributeError:
                # older PIL version fallback
                tb = draw.textsize(text, font=font)
                tw, th = tb[0], tb[1] * 2  # rough estimate for 2 lines
                
            # positioning at bottom center
            margin = int(height * 0.03)
            x = (width - tw) / 2
            y = height - th - margin - 10 # 10px extra padding
            
            # draw subtle dark background stroke/shadow for readability
            shadowcolor = (0, 0, 0, 180)
            for offset_x, offset_y in [(-2,-2), (2,-2), (-2,2), (2,2), (-1, -3), (1, -3), (-3, -1), (3, 1)]:
                draw.multiline_text((x+offset_x, y+offset_y), text, font=font, align="center", fill=shadowcolor)
                
            # white text
            draw.multiline_text((x, y), text, font=font, align="center", fill=(255, 255, 255, 230))
            
            watermarked = Image.alpha_composite(img, txt_layer)
            
            # convert back if it was RGB to save as JPG
            if orig_mode in ['RGB', 'L', 'P'] or str(path).lower().endswith('.jpg') or str(path).lower().endswith('.jpeg'):
                watermarked = watermarked.convert('RGB')
            
            watermarked.save(path, quality=90)
            print(f"Watermarked: {path}")
    except Exception as e:
        print(f"Failed to watermark {path}: {e}")

processed = 0
for root, dirs, files in os.walk(public_dir):
    for f in files:
        if f.lower().endswith(('.png', '.jpg', '.jpeg')):
            if f.lower() not in exclude:
                # Only watermark images in subdirectories or specific ones we know
                if root != public_dir or f.lower() == 'plot1.jpeg': 
                    filepath = os.path.join(root, f)
                    watermark_image(filepath)
                    processed += 1

print(f"Done watermarking {processed} images.")
