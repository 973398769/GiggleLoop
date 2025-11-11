import os
import uuid
from diffusers import StableDiffusionPipeline
import torch
from app.services.utils import save_gif

device = "cuda" if torch.cuda.is_available() else "cpu"
model_id = "runwayml/stable-diffusion-v1-5"
pipe = StableDiffusionPipeline.from_pretrained(model_id, torch_dtype=torch.float16)
pipe = pipe.to(device)

async def generate_gif(prompt: str):
    try:
        # Generate image using Stable Diffusion
        image = pipe(prompt).images[0]
        
        filename = f"{uuid.uuid4()}.gif"
        save_path = os.path.join("generated", filename)
        save_gif([image], save_path)
        
        return {
            "status": "success",
            "url": f"/generated/{filename}"
        }
    except Exception as e:
        return {
            "status": "error",
            "error": str(e)
        }
