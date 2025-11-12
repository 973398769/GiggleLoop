from pydantic import BaseModel

class GenerationRequest(BaseModel):
    prompt: str


class GenerationResponse(BaseModel):
    status: str
    url: str
    error: str = None