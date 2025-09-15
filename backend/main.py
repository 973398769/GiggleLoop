from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import generation

app = FastAPI(
    title="GiggleLoop API",
    description="API for generating funny GIFs and short videos",
    version="0.1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(generation.router, prefix="/api/generate", tags=["Generation"])

@app.get("/")
def health_check():
    return {"status": "healthy", "message": "GiggleLoop API is running!"}