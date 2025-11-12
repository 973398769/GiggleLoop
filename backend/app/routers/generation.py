from fastapi import APIRouter, HTTPException, UploadFile, File
from app.services.generation import generate_gif
from app.models import GenerationRequest, GenerationResponse

router = APIRouter()

@router.post("/gif", response_model=GenerationResponse)
async def create_gif(request: GenerationRequest):
    try:
        result = await generate_gif(request.prompt)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/video", response_model=GenerationResponse)
async def create_video(request: GenerationRequest):
    try:
        return {"status": "success", "url": "placeholder_video.mp4"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))