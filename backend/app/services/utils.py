from PIL import Image
import os

def save_gif(frames, path, duration=100):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    frames[0].save(
        path,
        save_all=True,
        append_images=frames[1:],
        duration=duration,
        loop=0
    )