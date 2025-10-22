from PIL import Image
import numpy as np
from colorsys import rgb_to_hls

def rgb_to_hsl(r, g, b):
    # Convert RGB values to [0, 1] range
    r, g, b = r/255.0, g/255.0, b/255.0
    
    # Convert to HLS (Hue, Lightness, Saturation)
    h, l, s = rgb_to_hls(r, g, b)
    
    # Convert HLS to HSL format used in CSS
    # Multiply hue by 360 for degrees
    h = round(h * 360)
    # Convert lightness and saturation to percentages
    s = round(s * 100)
    l = round(l * 100)
    
    return h, s, l

# Open the image
img = Image.open('../src/assets/logo.jpg')

# Convert image to RGB if it isn't already
img = img.convert('RGB')

# Get image data as numpy array
img_array = np.array(img)

# Reshape the array to 2D (all pixels by RGB)
pixels = img_array.reshape(-1, 3)

# Calculate the average color
avg_color = np.mean(pixels, axis=0)

# Convert RGB to HSL
h, s, l = rgb_to_hsl(avg_color[0], avg_color[1], avg_color[2])

print(f"HSL Values: {h} {s}% {l}%")