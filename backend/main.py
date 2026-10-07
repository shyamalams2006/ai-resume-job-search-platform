from fastapi import FastAPI

app = FastAPI(
    title="AI Resume Job Search Platform API",
    description="Backend API for AI Resume and Job Search Platform",
    version="1.0.0"
)


@app.get("/")
def root():
    return {
        "message": "AI Resume Job Search Platform API is running"
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "message": "API is working successfully"
    }